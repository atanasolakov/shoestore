import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../../store/actions";
import "./price.css";

const Price = () => {
    const prices = ["0-50 $", "50-100 $","100-150", "Over 150 $", "All"];
    const [selectedPrice, setSelectedPrice] = useState(prices[0]);

    const dispatch = useDispatch();
    const handlePriceChange = (price) => {
        setSelectedPrice(price);
        dispatch(setPriceFilter(price));
    };

    return (
        <div className="dropdown-container">
            <label htmlFor="price" className="dropdown-label">
                Price
            </label>
            <div className="price-buttons-container">
                {prices.map((price, index) => (
                    <button
                        key={index}
                        onClick={() => handlePriceChange(price)}
                        className={`price-button ${selectedPrice === price ? "active" : ""}`}
                    >
                        {price}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Price;

