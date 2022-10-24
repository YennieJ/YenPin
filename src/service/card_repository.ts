import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { CardType } from "pages/my/my"; //여기서 임포트인가 여기서 만들어서 마이에서 임포트인가

// class CardRepository {
//   syncCards(userUid: string | undefined, onUpdate: any) {
//     const db = getDatabase();
//     const starCountRef = ref(db, `users/${userUid}`);
//     useEffect(() => {
//       onValue(starCountRef, (snapshot) => {
//         const data = snapshot.val();
//         data && onUpdate(data);
//       });
//     }, []);
//   }

//   saveCard(userUid: string | undefined, card: CardType) {
//     const db = getDatabase();
//     set(ref(db, `users/${userUid}/${card.id}`), {
//       id: card.id,
//       fileName: card.fileName,
//       fileURL: card.fileURL,
//     });
//   }

//   deleteCard(userUid: string | undefined, card: CardType) {
//     const db = getDatabase();
//     remove(ref(db, `users/${userUid}/${card.id}`));
//   }
// }

export const SyncCards = (userUid: string | undefined, onUpdate: any) => {
  const db = getDatabase();
  const starCountRef = ref(db, `users/${userUid}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    data && onUpdate(data);
  });
};

export const SaveCard = (userUid: string | undefined, card: CardType) => {
  const db = getDatabase();
  set(ref(db, `users/${userUid}/${card.id}`), {
    id: card.id,
    fileName: card.fileName,
    fileURL: card.fileURL,
  });
};

export const DeleteCard = (userUid: string | undefined, id: number) => {
  const db = getDatabase();
  remove(ref(db, `users/${userUid}/${id}`));
};
