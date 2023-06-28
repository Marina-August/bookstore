import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props)=>{
    const cartCTX = useContext(CartContext);

    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
    const hasItems = cartCTX.items.length > 0;

    const cartItems = <ul className={classes['cart-items']}>
        {cartCTX.items.map(el =><li>{el.name}</li>)}</ul>

    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button} onClick={props.onHideCart}>Order</button>}

            </div>
        </Modal>
    )

}

export default Cart;