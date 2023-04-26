import styled from '@emotion/styled';
import Datetime from 'react-datetime';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Category = styled.div`
  /* -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0; */
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  /* width: 280px; */
  height: 32px;

  & svg {
    position: absolute;
    right: 5px;
    top: 12px;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 35px;
  left: 0px;
  height: 352px;
  width: 290px;
  margin: 2px 0px;
  padding: 0px;
  list-style: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #000000;
  background: rgb(240 240 240 / 70%);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  z-index: 15;
  overflow: scroll;
`;

export const Option = styled.li`
  padding: 8px 20px;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    color: #ff6596;
  }
`;

export const Sum = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 280px;
  height: 32px;
  padding: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  &:focus-visible {
    outline: none;
    color: #000000;
  }
  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const Calendar = styled.div`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
`;

export const DatetimePicker = styled(Datetime)`
  & input {
    border: none;
    width: 250px;
    height: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    padding: 5px;

    &:focus-visible {
      outline: none;
      color: #000000;
    }
  }
`;

export const Comment = styled.textarea`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  resize: none;
  width: 280px;
  padding: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
  &:focus-visible {
    outline: none;
    color: #000000;
  }
`;
