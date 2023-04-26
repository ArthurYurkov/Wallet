import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';
import { AuthContainer, UserContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isToken = useSelector(selectToken);
  return (
    <>
      {!isToken ? (
        <AuthContainer>
          <Outlet></Outlet>
        </AuthContainer>
      ) : (
        <UserContainer>
          <Header />
          <Navigation />
          <Outlet />
        </UserContainer>
      )}
    </>
  );
};
