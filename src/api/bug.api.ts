import { Pagination } from '@/typings/index';
import axios from '@/utils/axios';

export const getBugList = (query: Pagination) => {
  return axios.get(`/api/bug`, { params: query });
}