import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true); // whether form is valid or not
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value; // get amount from input
        const enteredAmountNumber = +enteredAmount; // convert amount to number
        
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false) // check if amount is valid
            return;
        }

        props.onAddToCart(enteredAmountNumber); // add amount to cart
    }
    



    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{ id: "amount_" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
};

export default MealItemForm;