import styled from '@emotion/styled';
import imgEllipseOne from '../../images/background/Ellipse_orange.png';
import imgEllipseTwo from '../../images/background/Ellipse_blue.png';

export const Container = styled.div`
  width: 100vw;

  @media screen and (min-width: 768px) {
    background-image: url(${imgEllipseOne}), url(${imgEllipseTwo});
    background-repeat: no-repeat;
    background-position: top -120px right -260px, bottom -150px left -135px;
    background-color: #e7eaf2;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
`;
