import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ImgPart = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 533px;
    gap: 30px;
    margin-top: 60px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    display: flex;
    margin-bottom: 0px;
    gap: 10px;
    width: 45vw;
  }
`;

export const Image = styled.img`
  display: block;
  @media screen and (min-width: 768px) {
    width: 260px;
    height: 250px;
  }
  @media screen and (min-width: 1280px) {
    width: 435px;
    height: 420px;
  }
`;

export const Title = styled.h1`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }
`;
