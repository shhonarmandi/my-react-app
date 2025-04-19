export const TAN_STACK_QUERY_KEYS = {
  getPosts: (page: number, limit: number) =>
    `/posts?page=${page}&limit:${limit}`,
};
