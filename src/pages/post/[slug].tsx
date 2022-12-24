import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';

type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <p>{post.attributes.title}</p>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllPosts();

  return {
    paths: data.map((post) => {
      return { params: { slug: post.attributes.slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getPost(ctx?.params?.slug as string);

  return {
    props: { post: data[0] },
  };
};

export default DynamicPost;
