import { GetStaticProps } from 'next';
import HomePage from '../containers/HomePage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

export type HomeProps = {
  posts: PostData[];
};

const Home = ({ posts }: HomeProps) => {
  return <HomePage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllPosts('sort=id:desc&pagination[limit]=30');

  return {
    props: {
      posts: data,
    },
  };
};

export default Home;
