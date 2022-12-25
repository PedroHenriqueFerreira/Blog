import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/app-config';
import { Container } from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-nextjs-2"
        config={{
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};

export default Comments;
