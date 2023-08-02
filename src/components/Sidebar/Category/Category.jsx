import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../../store/actions";
import "../Price/price.css";

const Category = () => {
    const categories = ["Sneakers", "Flats", "Sandals", "Heels", "All"];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const dispatch = useDispatch();

    const handleCategory = (category) => {
        setSelectedCategory(category);
        dispatch(setCategoryFilter(category));
    };

    return (
        <div className="dropdown-container">
            <label htmlFor="category" className="dropdown-label">
                Category
            </label>
            <div className="price-buttons-container">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategory(category)}
                        className={`price-button ${selectedCategory === category ? "active" : ""}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Category;
