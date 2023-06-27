import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props)=>{
    const cartItems = <ul className={classes['cart-items']}>{[{id:2, name: 'Book1', 
        amount: 1, price: 27},].map(el =><li>{el.name}</li>)}</ul>

    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <sapn>37.00</sapn>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button} onClick={props.onHideCart}>Order</button>

            </div>
        </Modal>
    )

}

export default Cart;