export interface CardType {
  id: number;
  image: string;
  message: string;
  title: string;
  user: string;
  likeCount: number;
  likeUids: string[];
  createdAt?: Date;
}
