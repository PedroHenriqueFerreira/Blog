import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

const Category = ({ posts, category }: CategoryProps) => {
  return <HomePage category={category} posts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `sort=id:desc&pagination[limit]=30&&filters[category][name][$contains]=${ctx.query.category}`;

  const { data } = await getAllPosts(urlQuery);

  return {
    props: {
      posts: data,
      category: ctx.query.category,
    },
  };
};

export default Category;
