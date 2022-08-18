import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthContextProvider from "./contexts/AuthContextProvider";
import MainRoutes from "./MainRoutes";


function App() {

  return (
    <>
      <AuthContextProvider>
        <Header />
        <MainRoutes />
        <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
