import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';

const BackDrop = ()=>{
    return(
        <div className= {classes.backdrop}/>
    )}

const ModalOverlay = (props)=> {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portal = document.getElementById('overlays');

const Modal = (props)=>{
    return(
        <>
        {ReactDOM.createPortal(<BackDrop/>, portal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </>
    )

}

export default Modal;