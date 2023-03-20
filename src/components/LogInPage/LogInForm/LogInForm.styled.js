import styled from '@emotion/styled';

export const FormPart = styled.div`
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
  }
  @media screen and (min-width: 1280px) {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    height: 100vh;
    width: 55vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    border-radius: 20px;
    margin-top: 0px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Logo = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 30px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`;

export const InputContainer = styled.label`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  padding-bottom: 5px;
  padding-left: 10px;

  width: 270px;
  @media screen and (min-width: 768px) {
    width: 410px;
  }
`;

export const InputIcon = styled.img`
  width: 24px;
  height: 24px;
  fill: tomato;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  padding-left: 10px;
  outline: none;
  color: #bdbdbd;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;
