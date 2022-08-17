import React from "react"
import Footer from "./components/Footer";
import Header from "./components/Header";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";


function App() {
  return <>
    <AuthContextProvider>
      <ProductContextProvider>

        <Header />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </AuthContextProvider>
  </>;
}

export default App;
