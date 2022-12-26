import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import HomePage from '../../../containers/HomePage';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/posts/pagination';
import { PostData } from '../../../domain/posts/post';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

const Page = ({ posts, category, pagination }: PageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  if (!posts.length) {
    return <Error statusCode={404} />;
  }

  return <HomePage posts={posts} category={category} pagination={pagination} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params?.params?.[0] as string);
  const category = ctx.params?.params?.[1] || '';

  const postsPerPage = 1;
  const startFrom = (page - 1) * postsPerPage;

  const previousPage = page - 1;
  const nextPage = page + 1;

  const categoryQuery = category
    ? `&[filters][category][name][$contains]=${category}`
    : '';

  const urlQuery = `sort=id:desc&pagination[limit]=${postsPerPage}&pagination[start]=${startFrom}${categoryQuery}`;

  const { data } = await getAllPosts(urlQuery);
  const allPosts = await getAllPosts(urlQuery);

  const pagination: PaginationData = {
    nextPage,
    previousPage,
    postsPerPage,
    category,
    numberOfPosts: allPosts.data.length,
  };

  return {
    props: {
      posts: data,
      pagination,
      category,
    },
    revalidate: 600,
  };
};

export default Page;
