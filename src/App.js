import Navigation from "./components/Navigation/Navigation";
import ProductList from "./components/Product/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";
import app from './app.css'
import {ToastProvider} from "react-toast-notifications";
import Footer from "./components/Footer/Footer";
import React from "react";




function App() {

  return (
<>
  <ToastProvider placement={"top-center"} autoDismissTimeout={1000}>
      <Sidebar/>
      <Navigation/>
      <ProductList />
      <Footer />
  </ToastProvider>
</>
  );
}

export default App;
