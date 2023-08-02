import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "@mui/icons-material/Home";
import { LocalGroceryStore, Person } from "@mui/icons-material";
import "./navigation.css";
import SearchInput from "../SearchInput/SearchInput";
import { toggleCart } from "../../store/actions"; // Import the action to toggle the cart
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Navigation = () => {
    const isOpen = useSelector((state) => state.cart.isOpen);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const handleCartIconClick = () => {
        dispatch(toggleCart());
    };

    return (
        <nav>
            <div className={"navigation-container"}>
                <div className={"image-container"}>
                    <img src="evastore.png" alt="Logo" />
                </div>
                <Person className={"icon"} fontSize={"large"} />
                <Home className={"icon"} fontSize={"large"} />
                <LocalGroceryStore
                    className={"icon"}
                    fontSize={"large"}
                    onClick={handleCartIconClick}
                > </LocalGroceryStore>
                {totalQuantity > 0 && <span onClick={handleCartIconClick} className="cart-badge">{totalQuantity}</span>}
            </div>
            <SearchInput />
            {isOpen && <ShoppingCart />}
        </nav>
    );
};

export default Navigation;
