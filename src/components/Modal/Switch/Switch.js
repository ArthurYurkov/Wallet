import { Container, Exp, Inc } from './Switch.styled';
import { ReactComponent as IncIcon } from '../../../icons/addIcon.svg';

export const Switch = ({ state, add }) => {
  const handleSwitch = () => {
    state(!add);
  };

  return (
    <Container>
      <input type="checkbox" checked={add} onChange={() => handleSwitch()} />
      <span>
        <Inc>Income</Inc>
        <Exp>Expense</Exp>
        <IncIcon />
        <IncIcon />
      </span>
    </Container>
  );
};
