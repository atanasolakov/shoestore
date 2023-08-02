import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setColorFilter } from "../../../store/actions";

const Color = () => {
    const colors = ["All", "Black", "Blue", "Green", "Red", "White"];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const dispatch = useDispatch();
    const handleColorChange = (color) => {
        setSelectedColor(color);
        dispatch(setColorFilter(color));
    };

    return (
        <div className="dropdown-container">
            <div>
            <label htmlFor="color" className="dropdown-label">
                Color
            </label>
            </div>
            <div className="color-buttons">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className={`color-button ${selectedColor === color ? "selected" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(color)}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Color;
