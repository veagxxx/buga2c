import { User } from "./user.interface";

export interface Reply {
  id: number;
  replyContent: string;
  createAt: string;
  poster: User;
}