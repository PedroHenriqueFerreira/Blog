import { formatDate } from '../../utils/format-date';
import { Container } from './styled';

type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};

export default Date;
