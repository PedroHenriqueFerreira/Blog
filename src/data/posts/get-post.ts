import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';
import { PostData } from '../../domain/posts/post';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (
  slug: string | string[],
): Promise<{ data: PostData[] }> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${POSTS_URL}&slug=${slugString}`;
  const jsonPosts = await fetchJson<{ data: PostData[] }>(url);

  const content = await markdownToHtml(jsonPosts.data[0].attributes.content);

  jsonPosts.data[0].attributes.content = content;

  return jsonPosts;
};
