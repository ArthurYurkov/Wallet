import { useEffect } from 'react';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { getUserData } from 'redux/user/user-operations';
import { CurrencyPage } from '../pages/CurrencyPage/CurrencyPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { StatisticsPage } from './StatisticsPage/StatisticsPage';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <>
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<LogInPage />}></Route>
              <Route
                path="/registration"
                element={<RegistrationPage />}
              ></Route>
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/currency" element={<CurrencyPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
