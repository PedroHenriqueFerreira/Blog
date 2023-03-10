import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ cover, slug, title }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href={`/post/${slug}`}>
          <span>
            <img src={cover} alt={title} />
          </span>
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href={`/post/${slug}`}>
          <span>{title}</span>
        </Link>
      </PostCardHeading>
    </Container>
  );
};
