import { UserType } from "./user";

export type CommentType = {
  _id?: string;
  comment: string;
  user: UserType | string;
  createdAt?: Date;
  room: string;
}