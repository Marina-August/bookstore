import { useRef, useState } from 'react';
import classes from './BookItemForm.module.css'
import Input from './Input';


const BookItemForm = (props)=>{
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler =(event)=>{
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmount > 3){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }


    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref = {amountInputRef} label ='Amount' input = {{
                id: props.id +'amount',
                type:'number',
                min:'1',
                max:'3',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please, enter a valid amount 1-3</p>}
        </form>
    )

}

export default BookItemForm;