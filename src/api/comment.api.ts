import { Pagination } from '@/typings/index';
import axios from '@/utils/axios';

export const getCommentList = (bugId: number, query?: Pagination) => {
  return axios.get(`/api/comment/${bugId}`, { params: query });
}