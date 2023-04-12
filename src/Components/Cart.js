import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../store/slices/cartSlice';

const Cart = () => {

    const { isCartOpen, cartItem } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const CloseCart = (close) => {
        dispatch(toggleCart(close));
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };

    const cartQuantity = cartItem.length;

    const cartTotal = cartItem.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    return (
        <>
            {
                isCartOpen && (
                    <div id="cart">
                        <div className="cart_content">
                            <div className="cart_head">
                                <h2>Cart <small>({cartQuantity})</small></h2>
                                <div
                                    title="Close"
                                    className="close_btn"
                                    onClick={() => CloseCart(false)}
                                >
                                    <span>&times;</span>
                                </div>
                            </div>

                            <div className="cart_body">
                                {
                                    cartQuantity === 0 ? (
                                        <div>
                                        <img src="/images/bag-icon.svg" alt='bg-icon' className="empty_cart"/>
                                        <h2 style={{textAlign:"center"}}> You Cart is empty</h2>
                                        </div>
                                    ) : (
                                        cartItem.map(item => {
                                            const { id, img, title, price, quantity } = item;
                                            const itemTotal = price * quantity;

                                            return (
                                                <div className="cart_items" key={id}>
                                                    <figure className="cart_items_img">
                                                        <img src={img} alt="product-img" />
                                                    </figure>

                                                    <div className="cart_items_info">
                                                        <h4>{title}</h4>
                                                        <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                                                    </div>

                                                    <div className="cart_items_quantity">
                                                        <span onClick={() => handleDecrement(id)}>&#8722;</span>
                                                        <b>{quantity}</b>
                                                        <span onClick={() => handleIncrement(id)}>&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_items_delete"
                                                        onClick={() => handleRemove(id)}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>

                            <div className="cart_foot">
                                <h3>
                                    <small>Total:</small>
                                    <b>₹ {cartTotal.toLocaleString()}</b>
                                </h3>

                                <button
                                    type="button"
                                    className="checkout_btn"
                                    disabled={cartQuantity === 0}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};
export default Cart;
