import { AuthBtn } from '../AuthBtn/AuthBtn';
import EmailIcon from '../../icons/emailIcon.svg';
import PassIcon from '../../icons/lock.svg';
import AccountIcon from '../../icons/account.svg';
import LogoMob from '../../images/authImg/Logo.svg';
import {
  Form,
  Input,
  InputContainer,
  InputIcon,
  Logo,
  Container,
} from './RegistrationForm.styled';
import { signUpThunk } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'Email':
        setEmail(value);
        break;

      case 'Password':
        setPassword(value);
        break;

      case 'isPassword':
        setIsPassword(value);
        break;

      case 'Name':
        setName(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === isPassword) {
      const formData = {
        username: name.toLowerCase(),
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      };
      dispatch(signUpThunk(formData));

      setPassword('');
      setEmail('');
      setName('');
      setIsPassword('');
    } else {
      return alert('Passwords are not same');
    }
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
        <InputContainer>
          <InputIcon src={PassIcon}></InputIcon>
          <Input
            type="password"
            name="isPassword"
            placeholder="Repeat Password"
            value={isPassword}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <InputIcon src={AccountIcon}></InputIcon>
          <Input
            type="name"
            name="Name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
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
