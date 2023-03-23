import { AuthBtn } from '../../AuthBtn/AuthBtn';
import EmailIcon from '../../../icons/emailIcon.svg';
import PassIcon from '../../../icons/lock.svg';
import AccountIcon from '../../../icons/account.svg';
import LogoMob from '../../../images/authImg/Logo.svg';
import {
  Form,
  Input,
  InputContainer,
  InputIcon,
  Logo,
  Container,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  return (
    <Container>
      <Form>
        <Logo>
          <img alt="#" src={LogoMob} />
          <h1>Wallet</h1>
        </Logo>
        <InputContainer>
          <InputIcon src={EmailIcon}></InputIcon>
          <Input type="email" name="Email" placeholder="Email" />
        </InputContainer>
        <InputContainer>
          <InputIcon src={PassIcon}></InputIcon>
          <Input type="password" name="Password" placeholder="Password" />
        </InputContainer>
        <InputContainer>
          <InputIcon src={PassIcon}></InputIcon>
          <Input type="password" name="Password" placeholder="Password" />
        </InputContainer>
        <InputContainer>
          <InputIcon src={AccountIcon}></InputIcon>
          <Input type="name" name="Name" placeholder="Name" />
        </InputContainer>

        <AuthBtn
          greenName={'Registration'}
          navName={'LogIn'}
          toPath={'/login'}
        />
      </Form>
    </Container>
  );
};
