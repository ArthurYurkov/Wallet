import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { Container, Image, ImgPart, Title } from './RegistrationPage.styled';

import RegImg from '../../images/authImg/RegImg.svg';

export const RegistrationPage = () => {
  return (
    <>
      <Container>
        <ImgPart>
          <Image src={RegImg} />
          <Title>Finance App</Title>
        </ImgPart>
        <RegistrationForm />
      </Container>
    </>
  );
};
