import { Container } from './styled';

type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};
