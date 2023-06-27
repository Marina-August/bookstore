import books from '../../assets/book.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props)=>{
    return (
    <>
    <header className={classes.header}>
        <h1>Bookstore</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={books} alt = 'books'/>
    </div>
    </>
    )

}

export default Header;