import { Container } from './styled';

export type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
