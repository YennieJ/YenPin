import { getDatabase, ref, set, remove, onValue } from "firebase/database";

import { CardType } from "pages/my";
//여기서 임포트인가 여기서 만들어서 마이에서 임포트인가

export const FbGetAllCards = async (onUpdate: any) => {
  const db = getDatabase();
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
};

//any로 받음
export const FbGetMyCards = (userUid: string | undefined, onUpdate: any) => {
  const db = getDatabase();
  const starCountRef = ref(db, `/${userUid}/cards`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    onUpdate(data);
  });
};

export const FbSaveCard = (userUid: string | undefined, card: CardType) => {
  const db = getDatabase();
  set(ref(db, `/${userUid}/cards/${card.id}`), {
    id: card.id,
    fileName: card.fileName,
    fileURL: card.fileURL,
  });
};

export const FbDeleteCard = (userUid: string | undefined, id: number) => {
  const db = getDatabase();
  remove(ref(db, `/${userUid}/cards/${id}`));
};
