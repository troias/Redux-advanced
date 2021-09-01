import classes from './CartButton.module.css';
import {  useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../../src/store/ui'


const CartButton = (props) => {
  const totalAmount = useSelector(state => state.cart.totalCartItemQuantity)
  const currState = useSelector(state => state.cart)
  const dispatch =  useDispatch()
  console.log("currState", currState)
  const toggleButtonHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
