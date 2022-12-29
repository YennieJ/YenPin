export interface CardType {
  id: number;
  cardName: string;
  fileURL: string;
  message?: string;
  user: string;
  likeCount?: number;
  likeUid?: any;
}

export interface Type {
  id: number;
  image: string;
  message: string;
  title: string;
  user: string;
  likeCount: number;
  likeUids: string[];
  createdAt?: Date;
}
