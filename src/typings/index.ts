export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Pagination {
  offset: number;
  limit: number;
  search?: string;
}