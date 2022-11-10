import {
  getDatabase,
  ref,
  set,
  remove,
  onValue,
  query,
  orderByChild,
} from "firebase/database";

import { CardType } from "pages/my/components/preview";
//여기서 임포트인가 여기서 만들어서 마이에서 임포트인가

const db = getDatabase();

export const FbGetAllCards = (onUpdate: any) => {
  const recentPostsRef = query(ref(db, "user"));
  onValue(recentPostsRef, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
};

//any로 받음
export const FbGetMyCards = (userUid: string | undefined, onUpdate: any) => {
  const starCountRef = ref(db, `/user/${userUid}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
};

export const FbSaveCard = (userUid: string | undefined, card: CardType) => {
  set(ref(db, `/user/${userUid}/${card.id}`), {
    id: card.id,
    fileName: card.fileName,
    fileURL: card.fileURL,
  });
};

export const FbDeleteCard = (userUid: string | undefined, id: number) => {
  remove(ref(db, `/user/${userUid}/${id}`));
};

// const myUserId = auth.currentUser?.uid;
// const topUserPostsRef = query(
//   ref(db, "user-posts/" + myUserId),
//   orderByChild("starCount")
// );

// console.log(topUserPostsRef);
