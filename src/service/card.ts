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

import { Type } from "types";

import imageCompression from "browser-image-compression";

//setState로 넘기는 방법 뿐인가?
export async function ImgConvert(
  file: File,
  setFileURL: React.Dispatch<React.SetStateAction<string>>
) {
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
  };

  try {
    const compressedFile = await imageCompression(file, options);

    const promise = imageCompression.getDataUrlFromFile(compressedFile);
    promise.then((result) => {
      setFileURL(result);
    });
  } catch (error) {
    console.log(error);
  }
}

const db = getFirestore();

export async function SaveCard(card: Type) {
  await setDoc(doc(db, `/cards/${card.id}`), {
    id: card.id,
    image: card.image,
    title: card.title,
    message: card.message,
    user: card.user,
    likeCount: 0,
    likeUids: [],
    createdAt: serverTimestamp(),
  });
}

export async function GetCard() {
  const q = query(collection(db, "cards"), orderBy("createdAt", "desc"));

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return data as Type[];
}

export async function GetMyCard(userUid: string) {
  const q = query(
    collection(db, "cards"),
    orderBy("createdAt", "desc"),
    where("user", "==", userUid)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return data as Type[];
}

export async function GetPopularCard() {
  const q = query(collection(db, "cards"), orderBy("likeCount", "desc"));

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return data as Type[];
}

export async function UpdateCard(card: Type) {
  await setDoc(
    doc(db, `/cards/${card.id}`),
    {
      image: card.image,
      title: card.title,
      message: card.message,
    },
    { merge: true }
  );
}

export async function CountLikes(userUid: string, card: Type) {
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
export async function DeleteCard(cardId: number) {
  deleteDoc(doc(db, `/cards/${cardId}`));
}

export async function GetKeppCard(userUid: string) {
  const q = query(
    collection(db, "cards"),
    where("likeUids", "array-contains", userUid)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  return data as Type[];
}
