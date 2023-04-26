import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const MenuBtn = styled(NavLink)`
  width: 44px;
  height: 44px;
  background-color: #6e78e8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  &.active {
    background-color: #4a56e2;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;
export const CurrencyBtn = styled(NavLink)`
  width: 44px;
  height: 44px;
  background-color: #6e78e8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  &.active {
    background-color: #4a56e2;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;
