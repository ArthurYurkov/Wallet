import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<SharedLayout />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
