import {
  Calendar,
  Comment,
  DatetimePicker,
  Form,
  Sum,
} from './IncomeForm.styled';
import 'react-datetime/css/react-datetime.css';
import { ReactComponent as CalendarImg } from '../../../icons/calendar.svg';
import { ModalButtons } from '../ModalButtons/ModalButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import moment from 'moment';
import {
  createTransactionThunk,
  getCategories,
} from 'redux/transactions/transactions-operation';
import {
  selectCategories,
  selectIncomeCategoryId,
} from 'redux/transactions/transaction-selectors';

export const IncomeForm = () => {
  const incomeId = useSelector(selectIncomeCategoryId);
  const currentDate = new Date();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [money, setMoney] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState(currentDate);

  console.log(incomeId);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'money':
        setMoney(value);

        break;

      case 'comment':
        setComment(value);
        break;

      case 'date':
        setDate(value);
        console.log(date);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      transactionDate: moment(date, 'DD.MM.YYYY').toISOString(),
      type: 'INCOME',
      categoryId: incomeId,
      comment: comment,
      amount: parseFloat(money),
    };
    dispatch(createTransactionThunk(data));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Sum
          name="money"
          value={money}
          onChange={e => handleChange(e)}
          type="number"
          placeholder="0.00"
          min="1"
          required
        ></Sum>
        <Calendar>
          <DatetimePicker
            initialValue={currentDate}
            dateFormat="DD.MM.YYYY"
            timeFormat=""
            onChange={date =>
              handleChange({
                target: {
                  name: 'date',
                  value: moment(date).format('DD.MM.YYYY'),
                },
              })
            }
          />
          <CalendarImg />
        </Calendar>

        <Comment
          name="comment"
          value={comment}
          onChange={e => handleChange(e)}
          placeholder="Comment"
        ></Comment>
        <ModalButtons />
      </Form>
    </>
  );
};
