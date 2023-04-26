import { Container, ImgPart, Image, Title } from './LogInPage.styled';
import LogInImg from '../../images/authImg/Frame.svg';
import { LogInForm } from '../../components/LogInForm/LogInForm';

export const LogInPage = () => {
  return (
    <>
      <Container>
        <ImgPart>
          <Image src={LogInImg} />
          <Title>Finance App</Title>
        </ImgPart>
        <LogInForm />
      </Container>
    </>
  );
};
