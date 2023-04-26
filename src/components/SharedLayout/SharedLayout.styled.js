import styled from '@emotion/styled';
import imgEllipseOne from '../../images/background/Ellipse_orange.png';
import imgEllipseTwo from '../../images/background/Ellipse_blue.png';

export const AuthContainer = styled.div`
  @media screen and (min-width: 630px) {
    background-image: url(${imgEllipseOne}), url(${imgEllipseTwo});
    background-repeat: no-repeat;
    background-position: top -120px right -260px, bottom -150px left -135px;
    background-color: #e7eaf2;
    height: 100vh;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
`;

export const UserContainer = styled.div`
  background-color: #e7eaf2;
  height: 100vh;
`;
