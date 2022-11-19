import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("./Header/Header"));
const HomePage = lazy(() => import("./pages/HomePages/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Header />
      <HomePage />
    </Suspense>
  );
};

export default App;
