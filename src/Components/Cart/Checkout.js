import classes from './Checkout.module.css';
import useInput from '../../hooks/use-input';
import { useState } from 'react';

const Checkout = (props) => {

    const {value: enteredName,
        hasError: nameInputHasError, 
        isValid:enteredNameIsValid,
        resetValue: resetNameInput,
        valueInputChangeHandler: nameChangeHandler,
        valueInputBlurHandler: nameBlurHandler} = useInput(value=> value.trim() !=='');

    const {value: enteredStreet,
        hasError: streetInputHasError, 
        isValid:enteredStreetIsValid,
        resetValue: resetStreetInput,
        valueInputChangeHandler: streetChangeHandler,
        valueInputBlurHandler: streetBlurHandler} = useInput(value=> value.trim() !==''); 
        
    const {value: enteredPost,
        hasError: postInputHasError, 
        isValid:enteredPostIsValid,
        resetValue: resetPostInput,
        valueInputChangeHandler: postChangeHandler,
        valueInputBlurHandler: postBlurHandler} = useInput(value=> value.trim() !==''); 
        
    const {value: enteredCity,
        hasError: cityInputHasError, 
        isValid:enteredCityIsValid,
        resetValue: resetCityInput,
        valueInputChangeHandler: cityChangeHandler,
        valueInputBlurHandler: cityBlurHandler} = useInput(value=> value.trim() !=='');  

    let formIsValid = false;    

    if (enteredNameIsValid && enteredStreetIsValid && enteredPostIsValid && enteredCityIsValid){
        formIsValid = true;
      } 

    const confirmHandler = async (event) => {
      event.preventDefault();

      if (!enteredNameIsValid || !enteredStreetIsValid || !enteredPostIsValid || !enteredCityIsValid){
        return;
      } 

      const customerData = {
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPost,
        city: enteredCity
      }
      console.log(customerData);

      const response = await fetch ('https://movies-database-server.onrender.com/add-order', {
        method: 'POST',
        body: JSON.stringify(customerData),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
      });
      
      const data = await response.json();
      console.log(data);
    
      resetNameInput();
      resetStreetInput();
      resetPostInput();
      resetCityInput();
    };
  
    return (
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className= {nameInputHasError? classes.invalid:classes.control}>
          <label htmlFor='name'>Name and Surname</label>
          <input type='text' id='name'
           onChange={nameChangeHandler}
           onBlur={nameBlurHandler}
           value={enteredName}/>
        </div>
        {nameInputHasError && <p className={classes.invalid}>Name must not be empty</p>}
        <div className= {streetInputHasError? classes.invalid:classes.control}>
          <label htmlFor='street'>Your Street</label>
          <input type='text' id='street'
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet} />
        </div>
        {streetInputHasError && <p className={classes.invalid}>Street must not be empty</p>}
        <div className= {postInputHasError? classes.invalid:classes.control}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal'
          onChange={postChangeHandler}
          onBlur={postBlurHandler}
          value={enteredPost} />
        {postInputHasError && <p className={classes.invalid}>Invalid Postal Code</p>}  
        </div>
        <div className= {cityInputHasError? classes.invalid:classes.control}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city'
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity} />
        </div>
        {cityInputHasError && <p className={classes.invalid}>Invalid City</p>}  
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit} disabled={!formIsValid}>Confirm</button>
        </div>
      </form>
    );
  };

export default Checkout;