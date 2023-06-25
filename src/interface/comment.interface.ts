import { User } from "./user.interface";

export interface Comment {
  id: number;
  commentTime: string;
  content: string;
  commentor: User;
}