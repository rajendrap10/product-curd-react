import React from "react"
import AddProduct from "./components/AddProduct";
import Header from "./components/Header"
import ListProduct from "./components/ListProduct"

const App = () => {
  return (
    <div>
        <Header />
        <AddProduct />
        <ListProduct />
    </div>
  );
}

export default App;
