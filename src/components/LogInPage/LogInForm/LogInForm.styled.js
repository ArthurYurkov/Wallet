import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 70px 60px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 410px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
  }
`;

export const Logo = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 30px;
  & img {
    height: 100%;
  }
  & h1 {
    font-size: 23px;
  }
  @media screen and (min-width: 768px) {
    height: 40px;
    & h1 {
      font-size: 33px;
    }
  }
`;

export const InputContainer = styled.label`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;

  width: 270px;
  @media screen and (min-width: 768px) {
    width: 100%;
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
  width: 100%;
`;
