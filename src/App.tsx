import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopNavbar from './TopNavBar';
//@ts-ignore
// const Subapp = React.lazy(() => import('SubappOne/Shell'));
import Subapp from 'SubappOne/Shell';
// import Subapp from 'SubappOne/Shell';
type Props = {};

const App = (props: Props) => {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ color: 'blue' }}>
              THis is the landing page of Shell
            </div>
          }
        />
        <Route
          path="/subapp-2/*"
          element={
            <Suspense fallback={<div>Loading Subapp...</div>}>
              <Subapp />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
