import { BtnContainer, GreenBtn, NavBtn } from './AuthBtn.styled';

export const AuthBtn = ({ greenName, navName, toPath }) => {
  return (
    <BtnContainer>
      <GreenBtn>{greenName}</GreenBtn>
      <NavBtn to={toPath}>{navName}</NavBtn>
    </BtnContainer>
  );
};
