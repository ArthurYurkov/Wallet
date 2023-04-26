import styled from '@emotion/styled';
import imgEllipseOne from '../../images/background/Ellipse_orange.png';
import imgEllipseTwo from '../../images/background/Ellipse_blue.png';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  @media screen and (min-width: 630px) {
    align-items: center;
    justify-content: flex-start;
    background-image: url(${imgEllipseOne}), url(${imgEllipseTwo});
    background-repeat: no-repeat;
    background-position: top -120px right -260px, bottom -150px left -135px;
  }

  @media screen and (min-width: 1280px) {
    width: 100vw;
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
    gap: 20px;
    margin-top: 60px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    display: flex;
    margin-bottom: 0px;
    gap: 10px;
    width: 80vw;
  }
`;

export const Image = styled.img`
  display: block;
  @media screen and (min-width: 768px) {
    width: 30vw;
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
