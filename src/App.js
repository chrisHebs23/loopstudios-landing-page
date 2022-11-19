import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Header/Header"));

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Header />
    </Suspense>
  );
};

export default App;
