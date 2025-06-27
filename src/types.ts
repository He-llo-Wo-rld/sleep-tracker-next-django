export interface Record {
  id: string;
  text: string;
  amount: number;
  date: Date | string | number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
