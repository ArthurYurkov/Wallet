import { Container, CurrencyBtn, Menu, MenuBtn } from './Navigation.styled';
import { ReactComponent as HomeBtn } from '../../images/home/home.svg';
import { ReactComponent as StatsBtn } from '../../images/home/graph.svg';
import { ReactComponent as CostsBtn } from '../../images/home/currency.svg';
import { useMediaQuery } from 'react-responsive';

export const Navigation = () => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });
  return (
    <>
      <Container>
        <Menu>
          <MenuBtn to="/home">
            <HomeBtn />
          </MenuBtn>
          <MenuBtn to="/statistics">
            <StatsBtn />
          </MenuBtn>
          {isMobile && (
            <CurrencyBtn to="/currency">
              <CostsBtn />
            </CurrencyBtn>
          )}
        </Menu>
      </Container>
    </>
  );
};
