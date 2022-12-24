import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';
import { PostData } from '../../domain/posts/post';

export const getPost = async (
  slug: string | string[],
): Promise<{ data: PostData[] }> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${POSTS_URL}&slug=${slugString}`;
  const posts = await fetchJson<{ data: PostData[] }>(url);

  return posts;
};
