import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const GreenBtn = styled.button`
  background-color: #24cca7;
  border: none;
  color: #fff;
  height: 50px;
  border-radius: 20px;
  width: 280px;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1em;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const NavBtn = styled(NavLink)`
  text-decoration: none;
  border: 1px solid #4a56e2;
  color: #4a56e2;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 280px;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1em;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
