import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const cartState = useSelector((state) => state.cart);
    const cartOpen = useSelector((state) => state.cartOpen);
    const dispatch = useDispatch();

    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, payload: { products: [...cart] } });
        };

        if (!cartState.length) {
            getCart();
        }
    }, [cartState.length, dispatch]);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToChekout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);
    
    function toggleCart() {
        dispatch({ type: TOGGLE_CART, payload: undefined });
    }

    function calculateTotal() {
        let sum = 0;
        cartState.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        cartState.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        })
        getCheckout({
            variables: { products: productIds}
        })
    }

    if (!cartOpen) {
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
                <button onClick={submitCheckout}>
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