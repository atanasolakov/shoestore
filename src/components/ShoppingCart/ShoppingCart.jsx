import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    toggleCart,
    addToCart, // Import the new action
} from "../../store/actions";
import { Dialog } from "@mui/material";
import { Close, RemoveCircle, AddCircle } from "@mui/icons-material";
import shoppingcart from "./shoppingcart.css";

const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const isOpen = useSelector((state) => state.cart.isOpen);
    const dispatch = useDispatch();

    const closeCart = () => {
        dispatch(toggleCart());
    };

    const removeOrDecrease = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const addOrIncrease = (item) => {
        dispatch(addToCart(item));
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.newPrice * item.quantity,
        0
    );

    return (
        <Dialog open={isOpen} onClose={closeCart} fullWidth maxWidth="sm">
            <div className={"header-container"}>
                <h3>Shopping Cart</h3>
                <button onClick={closeCart} className={"close-button"}>
                    <Close />
                </button>
            </div>
                {cartItems.length === 0 ? (
                    <p>No items in the cart</p>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <img src={item.img} alt={item.title} />
                                    <span>${item.newPrice}</span>
                                    <div className="quantity-container">
                                        <button
                                            onClick={() => addOrIncrease(item)}
                                            className="quantity-button"
                                            style={{color: 'green'}}
                                        >
                                            <AddCircle />
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button
                                            onClick={() => removeOrDecrease(item.id)}
                                            className="quantity-button"
                                            style={{color: 'red'}}
                                        >
                                            <RemoveCircle />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={'button-wrapper'}>
                         <button className={'pay-button'}>
                            Pay ${totalPrice.toFixed(2)}
                         </button>
                        </div>
                    </div>
                )}
        </Dialog>
    );
};

export default ShoppingCart;
