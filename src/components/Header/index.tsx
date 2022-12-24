import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import { Container } from './styled';

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <span>{SITE_NAME}</span>
      </Link>
    </Container>
  );
};

export default Header;
