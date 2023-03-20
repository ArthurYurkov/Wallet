import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogInPage } from './LogInPage/LogInPage';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<LogInPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
