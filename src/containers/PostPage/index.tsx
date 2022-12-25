import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Heading } from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import PostContainer from '../../components/PostContainer';
import { PostCover } from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import { PostData } from '../../domain/posts/post';

export type PropProps = {
  post: PostData;
};

export const Post = ({ post }: PropProps) => (
  <>
    <Header />
    <MainContainer>
      <Heading>{post.attributes.title}</Heading>
      <PostCover
        url={post.attributes.cover.data.attributes.url}
        alt={post.attributes.title}
      />
      <PostDetails
        author={post.attributes.author.data.attributes.name}
        category={post.attributes.category.data.attributes.name}
        date={post.attributes.createdAt}
      />
      <PostContainer content={post.attributes.content} />
      <Comments slug={post.attributes.slug} title={post.attributes.title} />
    </MainContainer>

    <Footer />
  </>
);

export default Post;
