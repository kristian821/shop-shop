import React from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';
import './style.css';

const Cart = () => {
    const [state, dispatch] = useStoreContext();

    function toggleCart() {
        dispatch({ TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    if (!state.cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}>
                <span
                    role="img"
                    aria-label="trash">🛒</span>
            </div>
        )
    }
  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      <div>
          <CartItem item={{name:'Camera', image:'camera.jpg', price:5, purchaseQuantity:3}} />
          <CartItem item={{name:'Soap', image:'soap.jpg', price:6, purchaseQuantity:4}} />

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
    </div>
  );
};

export default Cart;