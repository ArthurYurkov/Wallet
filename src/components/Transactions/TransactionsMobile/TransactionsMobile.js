import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { selectAllTransactions } from 'redux/transactions/transaction-selectors';
import { getAllTransactions } from 'redux/transactions/transactions-operation';
import {
  Card,
  CardInfo,
  Container,
  Data,
  Name,
} from './TransactionsMobile.styled';

export const TransactionsMobile = () => {
  const transactionsList = useSelector(selectAllTransactions);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllTransactions);
    }
  }, [dispatch]);

  return (
    <>
      <Container>
        <Card>
          <CardInfo>
            <Name>Date</Name>
            <Data></Data>
          </CardInfo>
          <CardInfo>
            <Name>Type</Name>
            <Data></Data>
          </CardInfo>
          <CardInfo>
            <Name>Category</Name>
            <Data></Data>
          </CardInfo>
          <CardInfo>
            <Name>Comment</Name>
            <Data></Data>
          </CardInfo>
          <CardInfo>
            <Name>Sum</Name>
            <Data></Data>
          </CardInfo>
          <CardInfo>
            <Name>Balance</Name>
            <Data></Data>
          </CardInfo>
        </Card>
      </Container>
    </>
  );
};
