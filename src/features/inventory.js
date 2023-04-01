import React, { useEffect,useState } from 'react';

export const Cart = ({ cart , setcart}) => {
  // const { cart, currencyFilter, dispatch } = props;
  const [total, settotal] = React.useState()
  const [quantity, setquantity] = React.useState()
  // const [cart, setcart] = React.useState(cart)
  // const [cartobject, setcartobject] = React.useState(cart)
  console.log("cart", cart);
  
  let totalUSD = 0;

function calculateTotal(cart) {
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return totalUSD.toFixed(2);
}

  let subtaotal = calculateTotal(cart)

  useEffect(() => {
    settotal(subtaotal)
  },[cart])

  const onInputChangeHandler = (name, input) => {

    const newQuantity = Number(input);
    setquantity(newQuantity)

    if (input === '') {
      return;
    }
    const itemToUpdate = cart[name];
    let updatedItem  = {
      ...itemToUpdate , quantity : quantity
    }

    setcart(cart => {
      return {
        ...cart, 
        [name ]: updatedItem
      }
    })

    // return {
    //   ...cart , 
    //   [name] : updatedItem
    // };
  };

  // Use the cart and currencyFilter slices to render their data.


  const cartElements = Object.keys(cart).map(createCartItem)
  // const total = 0;

  return (
    <div id="cart-container">
      <ul id="cart-items">{cartElements}</ul>
      <h3 className="total">
        Total
        <span className="total-value">
          { total}
          {/* {getCurrencySymbol(currencyFilter)}{total} {currencyFilter} */}
        </span>
      </h3>
    </div>
  );

  function createCartItem(name) {
    const item = cart[name];

    if (item.quantity === 0) {
      return;
    }

    return (
      <li key={name}>
        <p>{name}</p>
        <select
          className="item-quantity"
          value={ item.quantity}
          onChange={(e) => {
            onInputChangeHandler(name, e.target.value);
          }}
        >
          {[...Array(100).keys()].map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      
      </li>
        
    );
  }
};

// import {
//   calculatePrice,
//   getCurrencySymbol,
// } from '../../utilities/utilities.js';
// import { addItem } from '../cart/cartSlice.js';
// import { loadData } from './inventorySlice';

export const Inventory = ({ inventoryData , data ,cartdata}) => {
  // const onMount = () => {
  //   dispatch(loadData());
  // };
  // useEffect(onMount, [dispatch]);

  const [cart, setcart] = useState(cartdata)
  // console.log("data.cart", cart);
   

  const onClickHandler = (inventoryItem) => {

    const { name, price } = inventoryItem;
    
    const quantity = inventoryItem[name] ? inventoryItem[name].quantity + 1 : 1;
    const newItem = { price, quantity };


    setcart(cart => {
      return {
        ...cart, 
        [name] : newItem
      }
    })
  }; 

  // if (inventory.length === 0) {
  //   return <p> Sorry, no products are currently available... </p>;
  // }

  return (
    <>
    < ul id = "inventory-container" > { inventoryData.map(createInventoryItem) }</ ul>
      <Cart cart={cart} setcart={ setcart}> </Cart>
    </>
  )

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    // const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className="item">
        <img src={img} alt={''} />
        <h3>{name}</h3>
        <h3 className="price">
          { price}
          {/* {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter} */}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
