import React from "react";
import { Header } from "./components/Header/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from './components/Pages'
import { DataProvider } from "./components/Context/Context";
import { Cart } from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <DataProvider>

    <div className="App">
      <Router>
          <Header/> 
         
          <Cart/> 
         
          <Pages/>
          <Footer/>
      </Router>
     
    </div>
    </DataProvider>
  );
}

export default App;
