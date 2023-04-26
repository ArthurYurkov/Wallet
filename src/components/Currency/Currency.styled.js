import styled from '@emotion/styled';

import bgImg from '../../images/home/currency-bg.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  background-color: #4a56e2;
  width: 280px;
  border-radius: 30px;
  border-spacing: 0px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const Head = styled.thead`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px 0px;
`;

export const Names = styled.tr`
  display: flex;
  gap: 30px;
  color: #fff;
`;

export const Body = styled.tbody`
  height: 150px;
`;
