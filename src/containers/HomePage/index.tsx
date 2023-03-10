import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import Pagination from '../../components/Pagination';
import { PostCard } from '../../components/PostCard';
import { SITE_NAME } from '../../config/app-config';
import { PaginationData } from '../../domain/posts/pagination';
import { PostData } from '../../domain/posts/post';
import { AllPostsLinks, Category, Container } from './styled';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

const HomePage = ({ posts, category, pagination }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>
          {`${SITE_NAME}${category ? ` - ${category}` : ''}`}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
        {pagination && <Pagination {...pagination} />}
        {!pagination?.nextPage && (
          <AllPostsLinks>
            <Link href="/post/page/1" passHref>
              Ver todos os posts
            </Link>
          </AllPostsLinks>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default HomePage;
