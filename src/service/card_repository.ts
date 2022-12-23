import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  limitToLast,
  startAfter,
  startAt,
  orderByKey,
  orderByValue,
  endAt,
} from "firebase/database";

import { CardType } from "types";

const db = getDatabase();

// export const FbGetAllCards = () => {
//   return new Promise((resolve) => {
//     const cards = ref(db, "card");
//     onValue(cards, (snapshot) => {
//       const data = snapshot.val();
//       resolve(data);
//     });
//   });
// };

export async function FbGetAllCards() {
  return new Promise<CardType[]>((resolve) => {
    const cards = ref(db, "card");

    onValue(cards, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        resolve([]);
      } else {
        const dbCards = Object.values(data)
          .reverse()
          .map((data) => data);
        resolve(dbCards as CardType[]);
      }
    });
  });
}

//any로 받음
// export const FbGetMyCards = (userUid: string) => {
//   return new Promise((resolve) => {
//     const mostViewedPosts = query(
//       ref(db, "card"),
//       orderByChild("user"),
//       equalTo(userUid)
//     );

//     onValue(mostViewedPosts, (snapshot) => {
//       const data = snapshot.val();
//       resolve(data);
//     });
//   });
// };

export const FbGetSearch = (value: string) => {
  return new Promise((resolve) => {
    const search = query(
      ref(db, "card"),
      orderByChild("cardName"),
      startAt(value)
    );

    onValue(search, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });
};

export async function FbGetMyCards(userUid: string) {
  return new Promise<CardType[]>((resolve) => {
    const mostViewedPosts = query(
      ref(db, "card"),
      orderByChild("user"),
      equalTo(userUid)
    );
    onValue(mostViewedPosts, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        resolve([]);
      } else {
        const dbCards = Object.values(data)
          .reverse()
          .map((data) => data);
        resolve(dbCards as CardType[]);
      }
    });
  });
}

// export const FbSaveCard = (userUid: string, card: CardType) => {
//   set(ref(db, `/card/${card.id}`), {
//     id: card.id,
//     cardName: card.cardName,
//     fileURL: card.fileURL,
//     message: card.message,
//     user: userUid,
//   });
// };

// export async function FbSaveCard(userUid: string, card: CardType) {
//   return new Promise<CardType>((resolve, reject) => {
//     const newCard = set(ref(db, `/card/${card.id}`), {
//       id: card.id,
//       cardName: card.cardName,
//       fileURL: card.fileURL,
//       message: card.message,
//       user: userUid,
//     });
//     resolve(newCard as unknown as CardType);
//   });
// }

export async function FbSaveCard(userUid: string, card: CardType) {
  return new Promise<CardType>((resolve, reject) => {
    const newCard = set(ref(db, `/card/${card.id}`), {
      id: card.id,
      cardName: card.cardName,
      fileURL: card.fileURL,
      message: card.message,
      user: userUid,
    });
    resolve(newCard as any);
  });
}

export const FbDeleteCard = (id: number) => {
  remove(ref(db, `/card//${id}`));
};
