import logo from "./logo.svg";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Inventory } from "./features/inventory";
import { inventoryData } from "./data";
// import { Cart } from "./features/cart";
import Header from "./features/header";

function App() {
  const [data, setdata] = useState({
    inventory: inventoryData,
    cart: {},
    currencyFilter: "",
  });

  // console.log("datacart" ,data);
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <Inventory
        data={data}
        cartdata={data.cart}
        inventoryData={data.inventory}
      ></Inventory>
    </div>
  );
}

export default App;
