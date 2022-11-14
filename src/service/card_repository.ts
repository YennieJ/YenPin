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

import { CardType } from "pages/my/components/preview";
//여기서 임포트인가 여기서 만들어서 마이에서 임포트인가

const db = getDatabase();

export const FbGetAllCards = (onUpdate: any) => {
  const temp2 = ref(db, "card");

  onValue(temp2, (snapshot) => {
    const data = snapshot.val();

    onUpdate(data);
  });
};

//any로 받음
export const FbGetMyCards = (userUid: any, onUpdate: any) => {
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

export const FbSaveCard = (userUid: string | undefined, card: CardType) => {
  set(ref(db, `/card/${card.id}`), {
    id: card.id,
    fileName: card.fileName,
    fileURL: card.fileURL,
    user: userUid,
  });
};

export const FbDeleteCard = (id: number) => {
  remove(ref(db, `/card//${id}`));
};
