import { useState } from 'react';
import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import { IncomeForm } from './IncomeForm/IncomeForm';
import { Overlay, Container, ModalBlock, Title } from './Modal.styled';
import { ModalButtons } from './ModalButtons/ModalButtons';
import { Switch } from './Switch/Switch';

export const Modal = () => {
  const [expense, setExpense] = useState(true);
  return (
    <Container>
      <Overlay>
        <ModalBlock>
          <Title>Add transaction</Title>
          <Switch state={setExpense} add={expense} />
          {expense ? <ExpenseForm /> : <IncomeForm />}
        </ModalBlock>
      </Overlay>
    </Container>
  );
};
