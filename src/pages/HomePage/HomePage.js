import { Balance } from 'components/Balance/Balance';
import { OpenModalBtn } from 'components/OpenModalBtn/OpenModalBtn';
import { Transactions } from 'components/Transactions/Transactions';
import { Container } from './HomePage.styled';

export const HomePage = () => {
  return (
    <>
      <Container>
        <Balance />
        <Transactions />
        <OpenModalBtn />
      </Container>
    </>
  );
};
