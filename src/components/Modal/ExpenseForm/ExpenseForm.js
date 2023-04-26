import {
  Calendar,
  Category,
  Comment,
  DatetimePicker,
  Form,
  List,
  Option,
  Sum,
} from './ExpenseForm.styled';
import moment from 'moment';

import { ReactComponent as CalendarImg } from '../../../icons/calendar.svg';
import { ReactComponent as OpenArrowImg } from '../../../icons/arrow.svg';
import { ReactComponent as CloseArrowImg } from '../../../icons/backarrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIsLoading,
} from 'redux/transactions/transaction-selectors';
import { useEffect, useState } from 'react';
import {
  createTransactionThunk,
  getCategories,
} from 'redux/transactions/transactions-operation';
import { ModalButtons } from '../ModalButtons/ModalButtons';

export const ExpenseForm = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const currentDate = new Date();

  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState('Select a category');
  const [money, setMoney] = useState();
  const [openList, setOpenList] = useState(false);
  const [comment, setComment] = useState('');
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    try {
      if (!categories) {
        dispatch(getCategories());
      }
    } catch (error) {
      console.log(error);
    }
  }, [categories]);

  const handleTakeId = (name, id) => {
    setCategoryName(name);
    if (id) {
      setCategoryId(id);
    }
  };

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

        break;
    }
  };

  const handleOpenList = () => {
    setOpenList(!openList);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      transactionDate: moment(date, 'DD.MM.YYYY').toISOString(),
      type: 'EXPENSE',
      categoryId: categoryId,
      comment: comment,
      amount: '-' + parseFloat(money),
    };
    dispatch(createTransactionThunk(data));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Category onClick={e => handleOpenList()}>
          <p>{categoryName}</p>
          {!openList ? (
            <>
              <OpenArrowImg />
            </>
          ) : (
            <>
              <CloseArrowImg />
            </>
          )}

          {openList && (
            <List>
              {!isLoading && (
                <>
                  {Array.isArray(categories) &&
                    categories
                      .filter(e => e.name !== 'Income')
                      .map(({ id, name }) => {
                        return (
                          <Option
                            onClick={() => handleTakeId(name, id)}
                            value={name}
                            key={id}
                          >
                            {name}
                          </Option>
                        );
                      })}
                </>
              )}
            </List>
          )}
        </Category>
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
