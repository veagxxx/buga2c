import { Tag } from "./tag.interface";
import { Comment } from "./comment.interface";
import { User } from "./user.interface";

export interface Bug {
  id: number;
  title: string;
  description: string;
  status: number;
  createTime: string;
  tags: Tag[];
  comments: Comment[];
  author: User;
}