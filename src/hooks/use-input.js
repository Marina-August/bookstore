import { useState} from 'react';

const useInput = (validateValue)=>{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };

    const valueInputBlurHandler = event => {
        setIsTouched(true);
      };

    const resetValue =()=>{
        setEnteredValue('');
        setIsTouched (false);
    }  

    return{
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        valueInputChangeHandler,
        valueInputBlurHandler,
        resetValue
    }

} 

export default useInput;