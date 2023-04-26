import styled from '@emotion/styled';
import Datetime from 'react-datetime';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  }
`;
