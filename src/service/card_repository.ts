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
  update,
  push,
  child,
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

export const FbThumbs = () => {
  return new Promise((resolve) => {
    const search = query(ref(db, "card"), orderByChild("thumbs"));

    onValue(search, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });
};

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
      likeCount: 0,
      likeUid: [],
    });
    resolve(newCard as any);
  });
}

export async function FbLike(card: CardType) {
  return new Promise((resolve) => {
    const thumbs = update(ref(db, `/card/${card.id}`), {
      likeCount: +1,
      likeUid: card.user,
    });

    resolve(thumbs as any);
  });
}

export async function FbDislike(card: CardType) {
  return new Promise((resolve) => {
    const search = query(
      ref(db, "card"),
      orderByChild("likeUid"),
      equalTo(card.user)
    );

    // search.remove()

    const temp = remove(ref(db, `/card/${card.id}/likeUid/${card.user}`));
    resolve(temp as any);
  });
}
export async function FbUpdateCard(card: CardType) {
  return new Promise<CardType>((resolve, reject) => {
    const newCard = update(ref(db, `/card/${card.id}`), {
      id: card.id,
      cardName: card.cardName,
      fileURL: card.fileURL,
      message: card.message,
    });
    resolve(newCard as any);
  });
}

export const FbDeleteCard = (id: number) => {
  remove(ref(db, `/card//${id}`));
};
