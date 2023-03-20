import { AuthBtn } from '../AuthBtn/AuthBtn';
import EmailIcon from '../../../icons/emailIcon.svg';
import PassIcon from '../../../icons/lock.svg';
import LogoMob from '../../../images/authImg/Logo.svg';
import {
  Form,
  Input,
  InputContainer,
  InputIcon,
  Logo,
  Container,
  FormPart,
} from './LogInForm.styled';

export const LogInForm = () => {
  return (
    <FormPart>
      <Container>
        <Logo>
          <img alt="#" src={LogoMob} />
          <h1>Wallet</h1>
        </Logo>
        <Form>
          <InputContainer>
            <InputIcon src={EmailIcon}></InputIcon>
            <Input type="email" name="Email" placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <InputIcon src={PassIcon}></InputIcon>
            <Input type="password" name="Password" placeholder="Password" />
          </InputContainer>

          <AuthBtn greenName={'LogIn'} navName={'Registration'} />
        </Form>
      </Container>
    </FormPart>
  );
};
