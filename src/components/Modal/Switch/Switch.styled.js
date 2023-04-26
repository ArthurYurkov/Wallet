import styled from '@emotion/styled';

export const Container = styled.label`
  display: inline-block;
  width: 80px;
  height: 40px;
  position: relative;

  & input {
    opacity: 0;
    height: 0;
    width: 0;

    &:checked + span::before {
      transform: translateX(42px);
      background: #ff6596;
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      background-image: url('../../../icons/addIcon.svg');
    }
    &:checked + span svg {
      transform: translateX(42px);
    }
    &:checked + span p:first-of-type {
      color: #e0e0e0;
    }
    &:checked + span p:last-of-type {
      color: #ff6596;
    }
  }
  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid #e0e0e0;
    border-radius: 30px;

    & svg:first-of-type {
      position: absolute;
      left: 7.5px;
      bottom: 9px;
      transform: rotate(90deg);
      transition: all ease-in 300ms;
    }
    & svg:last-child {
      position: absolute;
      left: 7.5px;
      bottom: 9px;
      transition: all ease-in 300ms;
    }

    &::before {
      position: absolute;
      content: '';
      height: 44px;
      width: 44px;
      left: -4px;
      bottom: -3px;
      background: #24cca7;
      border-radius: 50%;

      box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
      transition: all ease-in 300ms;
    }
  }
`;

export const Inc = styled.p`
  position: absolute;
  left: -70px;
  top: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #24cca7;
  transition: all ease-in 300ms;
`;

export const Exp = styled.p`
  position: absolute;
  right: -75px;
  top: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #e0e0e0;
  transition: all ease-in 300ms;
`;
