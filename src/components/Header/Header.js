import {
  Container,
  Door,
  Exit,
  Image,
  Logo,
  Name,
  Title,
} from './Header.styled';
import LogInImg from '../../images/authImg/Logo.svg';
import ExitDoor from '../../icons/exit.svg';
import { signOutThunk } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/user/user-selectors';

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <>
      <Container>
        <Logo>
          <Image src={LogInImg} />
          <Title>Wallet</Title>
        </Logo>
        <Exit>
          <Name>{userName}</Name>
          <Door onClick={() => dispatch(signOutThunk())}>
            <img src={ExitDoor} />
            <p>Exit</p>
          </Door>
        </Exit>
      </Container>
    </>
  );
};
