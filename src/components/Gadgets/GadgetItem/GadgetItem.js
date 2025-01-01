import { useContext } from 'react';
import GadgetItemForm from './GadgetItemForm';
import GadgetImage from './GadgetImage'; 
import classes from './GadgetItem.module.css';
import CartContext from '../../../store/cart-context';

const GadgetItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.gadget}>
      <div>
        <h3>{props.name}</h3>
        <GadgetImage id={props.id} alt={props.name} /> {/* Use the new GadgetImage component */}
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <GadgetItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default GadgetItem;