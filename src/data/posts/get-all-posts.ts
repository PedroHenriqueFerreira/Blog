import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';
import { PostData } from '../../domain/posts/post';

export const getAllPosts = async (
  query = '',
): Promise<{ data: PostData[] }> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<{ data: PostData[] }>(url);

  return posts;
};
