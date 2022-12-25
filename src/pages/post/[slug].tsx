import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { Post } from '../../containers/PostPage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllPosts();

  return {
    paths: data.map((post) => {
      return { params: { slug: post.attributes.slug } };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getPost(ctx?.params?.slug as string);

  return {
    props: { post: data.length > 0 ? data[0] : null },
    revalidate: 600,
  };
};

export default DynamicPost;
