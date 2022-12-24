import { Container } from './styled';

type PostContainerProps = {
  content: string;
};

const PostContainer = ({ content }: PostContainerProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostContainer;
