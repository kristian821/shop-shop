import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { ADD_TO_CART, UPDATE_CART_QUANITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { useDispatch, useSelector } from "react-redux";

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  

  const addToCart = () => {
    // Find the cart item with the maching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    // if there was a match, call UPDATE with a new purchase quanity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANITY,
        _id: _id,
        purchaseQuanity: parseInt(itemInCart.purchaseQuanity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuanity: parseInt(itemInCart.purchaseQuanity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: {...item, purchaseQuanity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuanity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
