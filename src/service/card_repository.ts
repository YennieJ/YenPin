import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

import { CardType } from "types";

const db = getDatabase();

export const FbGetAllCards = (onUpdate: any) => {
  const cards = ref(db, "card");
  onValue(cards, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
};

// export const FbGetAllCards = () => {
//   return new Promise((resolve) => {
//     const cards = ref(db, "card");
//     onValue(cards, (snapshot) => {
//       const data = snapshot.val();
//       resolve(data);
//     });
//   });
// };

//any로 받음
export const FbGetMyCards = (userUid: string, onUpdate: any) => {
  const mostViewedPosts = query(
    ref(db, "card"),
    orderByChild("user"),
    equalTo(userUid)
  );

  onValue(mostViewedPosts, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
};

export const FbSaveCard = (userUid: string, card: CardType) => {
  set(ref(db, `/card/${card.id}`), {
    id: card.id,
    cardName: card.cardName,
    fileURL: card.fileURL,
    message: card.message,
    user: userUid,
  });
};

export const FbDeleteCard = (id: number) => {
  remove(ref(db, `/card//${id}`));
};
