import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  @media screen and (min-width: 768px) {
    position: static;
    z-index: 1;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 18px;
  margin-left: 20px;
`;

export const Image = styled.img`
  height: 30px;
`;

export const Title = styled.h2`
  font-weight: bold;
`;

export const Exit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    gap: 0px;
  }
`;

export const Name = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: #bdbdbd;
  margin: 0px;
  @media screen and (min-width: 768px) {
    padding-right: 9px;
    border-right: 1px solid #bdbdbd;
  }
`;

export const Door = styled.button`
  height: 18px;
  cursor: pointer;
  border: none;
  background-color: #fff;

  &:hover {
    fill: #ff6596;
  }

  & p {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
      color: #bdbdbd;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
  }
`;
