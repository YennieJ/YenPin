import {
  getFirestore,
  setDoc,
  doc,
  increment,
  arrayUnion,
  arrayRemove,
  getDocs,
  collection,
  query,
  deleteDoc,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { CardType } from "types";

const db = getFirestore();

export async function FbGetAllCards() {
  const q = query(collection(db, "cards"), orderBy("createdAt", "desc"));

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return data as CardType[];
}

export async function FbGetMyCards(userUid: string) {
  const q = query(
    collection(db, "cards"),
    orderBy("createdAt", "desc"),
    where("user", "==", userUid)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return data as CardType[];
}

export async function FbGetPopularCards() {
  const q = query(collection(db, "cards"), orderBy("likeCount", "desc"));

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return data as CardType[];
}

export async function FbCreateCard(card: CardType) {
  await setDoc(doc(db, `/cards/${card.id}`), {
    id: card.id,
    userUid: card.userUid,
    photoURL: card.photoURL,
    cardName: card.cardName,
    message: card.message,
    likeCount: 0,
    likeUids: [],
    createdAt: serverTimestamp(),
  });
}

export async function FbUpdateCard(card: CardType) {
  await setDoc(
    doc(db, `/cards/${card.id}`),
    {
      photoURL: card.photoURL,
      cardName: card.cardName,
      message: card.message,
    },
    { merge: true }
  );
}

export async function FbLikeCard(userUid: string, card: CardType) {
  const likeUid = card.likeUids.includes(userUid);

  const cardRef = doc(db, `cards/${card.id}`);
  likeUid
    ? await setDoc(
        cardRef,
        {
          likeCount: increment(-1),
          likeUids: arrayRemove(userUid),
        },
        { merge: true }
      )
    : await setDoc(
        cardRef,
        {
          likeCount: increment(1),
          likeUids: arrayUnion(userUid),
        },
        { merge: true }
      );
}

export async function FbDeleteCard(cardId: number) {
  deleteDoc(doc(db, `/cards/${cardId}`));
}

export async function FbGetSavedCards(userUid: string) {
  const q = query(
    collection(db, "cards"),
    where("likeUids", "array-contains", userUid)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return data as CardType[];
}
