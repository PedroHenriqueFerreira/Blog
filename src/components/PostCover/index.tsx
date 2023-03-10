import { Container } from './styled';

export type PostCoverProps = {
  url: string;
  alt: string;
};

export const PostCover = ({ url, alt }: PostCoverProps) => {
  return <Container src={url} alt={alt} />;
};
