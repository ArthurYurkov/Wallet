import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/user/user-selectors';
import { Container, Money, Title } from './Balance.styled';

export const Balance = () => {
  const balance = useSelector(selectBalance);
  return (
    <>
      <Container>
        <Title>YOUR BALANCE</Title>
        <Money>₴ {balance}</Money>
      </Container>
    </>
  );
};
