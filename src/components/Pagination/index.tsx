import Link from 'next/link';
import { PaginationData } from '../../domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';

export type PaginationProps = PaginationData;

const Pagination = ({
  nextPage,
  numberOfPosts,
  category,
  previousPage,
  postsPerPage,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href={previousLink}>
            <span>Previous</span>
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>
            <span>Next</span>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};

export default Pagination;
