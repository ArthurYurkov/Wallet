import { Container } from './Transactions.styled';
import { TransactionsMobile } from './TransactionsMobile/TransactionsMobile';
import { useMediaQuery } from 'react-responsive';

export const Transactions = () => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });
  const isTablet = useMediaQuery({ query: '(min-width:768px' });
  return <Container>{isMobile && <TransactionsMobile />}</Container>;
};
