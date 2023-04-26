import { Button, Container } from './OpenModalBtn.styled';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const OpenModalBtn = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Container>
        <Button onClick={() => handleClick}>
          <AddIcon />
        </Button>
      </Container>
      <Modal />
    </>
  );
};
