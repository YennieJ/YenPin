import { getDatabase, ref, set, remove } from "firebase/database";
import { CardType } from "pages/my/my"; //여기서 임포트인가 여기서 만들어서 마이에서 임포트인가

class CardRepository {
  saveCard(userUid: string | undefined, card: CardType) {
    const db = getDatabase();
    set(ref(db, `users/${userUid}/${card.id}`), {
      card,
    });
  }
  deleteCard(userUid: string | undefined, card: CardType) {
    const db = getDatabase();
    remove(ref(db, `users/${userUid}/${card.id}`));
  }
}

export default CardRepository;
