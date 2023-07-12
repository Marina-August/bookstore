import { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props)=>{
    const [isCheckout, setIsCheckout] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler =(id) =>{
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) =>{
        cartCtx.addItem({...item, amount:1});
    };

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(el =><CartItem key = {el.id} 
         name = {el.name} 
        amount = {el.amount} 
        price = {el.price}
        onRemove = {cartItemRemoveHandler.bind(null, el.id)}
        onAdd = {cartItemAddHandler.bind (null, el)}
        />)}</ul>

    const orderHandler = ()=>{
        setIsCheckout((prevIsCheckout) => !prevIsCheckout);
    }    

    return(
       
        <Modal>
            <div className={classes.main}>   
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount $</span>
                <span>{totalAmount}</span>
            </div>
           { !isCheckout && <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>
            }
           { isCheckout && <Checkout onCancel ={orderHandler}/>}
           </div>
        </Modal>
        
        

    )

}

export default Cart;