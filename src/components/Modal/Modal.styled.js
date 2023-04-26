import styled from '@emotion/styled';

export const Container = styled.div``;

export const Overlay = styled.div`
  z-index: 9;
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

export const ModalBlock = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 45px;
  padding-top: 160px;

  @media screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
  }
`;

export const Title = styled.h2``;
