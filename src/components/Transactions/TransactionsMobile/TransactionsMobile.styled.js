import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 280px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
`;

export const CardInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-left: 5px solid #ff6596;
  border-bottom: 1px solid #dcdcdf;
  &:nth-of-type(1) {
    border-top-left-radius: 15px;
  }
  &:nth-of-type(6) {
    border-bottom: none;
    border-bottom-left-radius: 15px;
    &:after {
      display: none;
    }
  }
`;

export const Name = styled.p`
  height: 42px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Data = styled.div``;
