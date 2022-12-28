import {
  getFirestore,
  setDoc,
  doc,
  increment,
  arrayUnion,
  arrayRemove,
  getDoc,
  collection,
  query,
  deleteDoc,
} from "firebase/firestore";
import { Type } from "types";

// Initialize Firebase

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

// export async function FbSaveCard(userUid: string, card: CardType) {
//   return new Promise<CardType>((resolve, reject) => {
//     const newCard = set(ref(db, `/card/${card.id}`), {
//       id: card.id,
//       cardName: card.cardName,
//       fileURL: card.fileURL,
//       message: card.message,
//       user: userUid,
//       likeCount: 0,
//       likeUid: [],
//     });
//     resolve(newCard as any);
//   });
// }

export async function SaveCard(card: Type) {
  await setDoc(doc(db, `/cards/${card.id}`), {
    id: card.id,
    image: card.image,
    title: card.title,
    message: card.message,
    user: card.user,
    likeCount: 0,
    likeUids: [],
  });
}
