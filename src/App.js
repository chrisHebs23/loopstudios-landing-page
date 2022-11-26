import React, { lazy, Suspense } from "react";
import Footer from "./Footer/Footer";

const Header = lazy(() => import("./Header/Header"));
const HomePage = lazy(() => import("./pages/HomePages/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Header />
      <HomePage />
      <Footer />
    </Suspense>
  );
};

export default App;
