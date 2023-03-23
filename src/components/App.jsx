import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogInPage } from './LogInPage/LogInPage';
import { RegistrationPage } from './RegistrationPage/RegistrationPage';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/login" element={<LogInPage />}></Route>
            <Route path="/registration" element={<RegistrationPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
