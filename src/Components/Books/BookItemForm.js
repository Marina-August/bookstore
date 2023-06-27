import classes from './BookItemForm.module.css'
import Input from './Input';


const BookItemForm = (props)=>{
    return(
        <form className={classes.form}>
            <Input label ='Amount' input = {{
                id: props.id +'amount',
                type:'number',
                min:'1',
                max:'3',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
        </form>
    )

}

export default BookItemForm;