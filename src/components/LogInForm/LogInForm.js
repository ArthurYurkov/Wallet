import { AuthBtn } from '../AuthBtn/AuthBtn';
import EmailIcon from '../../icons/emailIcon.svg';
import PassIcon from '../../icons/lock.svg';
import LogoMob from '../../images/authImg/Logo.svg';
import {
  Form,
  Input,
  InputContainer,
  InputIcon,
  Logo,
  Container,
} from './LogInForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInThunk } from 'redux/auth/auth-operations';
import { getUserData } from 'redux/user/user-operations';

export const LogInForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'Email':
        setEmail(value);
        break;

      case 'Password':
        setPassword(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      email: email.toLowerCase(),
      password: password.toLowerCase(),
    };
    dispatch(signInThunk(formData))
      .unwrap()
      .then(() => dispatch(getUserData()));

    setPassword('');
    setEmail('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Logo>
          <img alt="#" src={LogoMob} />
          <h1>Wallet</h1>
        </Logo>
        <InputContainer>
          <InputIcon src={EmailIcon}></InputIcon>
          <Input
            type="email"
            name="Email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <InputIcon src={PassIcon}></InputIcon>
          <Input
            type="password"
            name="Password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </InputContainer>

        <AuthBtn
          greenName={'LogIn'}
          navName={'Registration'}
          toPath={'/registration'}
        />
      </Form>
    </Container>
  );
};
