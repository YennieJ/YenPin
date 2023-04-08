export interface CardType {
  id: number;
  userUid: string;
  photoURL: string;
  cardName: string;
  message: string;
  likeCount: number;
  likeUids: string[];
  createdAt?: Date;
}
