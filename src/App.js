import Books from "./Components/Books/Books";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

const App = ()=> {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  }

  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      <Header onShowCart = {showCartHandler}/>
      <Books/>
      {cartIsShown && <Cart onHideCart = {hideCartHandler}/>}
    </CartProvider>
    
  );
}

export default App;
