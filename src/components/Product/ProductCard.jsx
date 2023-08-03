import React, { useState } from 'react';
import {AddCard } from '@mui/icons-material';
import './productcard.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import { useToasts } from "react-toast-notifications";
import {Rating} from "@mui/material";


const ProductCard = ({ product }) => {
    const {
        img,
        title,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
    } = product;

    const [isHovered, setIsHovered] = useState(false);
    const { addToast } = useToasts();

    const dispatch = useDispatch();
    const handleAdd = (product) => {
        dispatch(addToCart(product));
        addToast('Product Added to card', {
            appearance: 'success',
            autoDismiss: true,
        });
    };


    return (
        <div className={`product-card ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img className="shoe-image" src={img} alt={title} />
            <div className="descriptions">
                <h3>{title}</h3>
                <div className="product-rating">
                    <Rating
                        name="simple-controlled"
                    />
                    {reviews}
                </div>
                <div className="product-prices">
                    {prevPrice && <span className="prev-price">{prevPrice}</span>}
                    <span className="new-price">${newPrice}</span>
                </div>
                <div className={'additions'}>
                <p>{company}</p>
                <p>{color}</p>
                <p>{category}</p>
                    <button className={'add-to-cart'} onClick={() => handleAdd(product)}><AddCard/></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
