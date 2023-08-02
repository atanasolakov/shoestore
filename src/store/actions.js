import { createAction } from "@reduxjs/toolkit";

export const setSearchQuery = createAction("SET_SEARCH_QUERY");
export const setCategoryFilter = createAction("SET_CATEGORY_FILTER");
export const setColorFilter = createAction("SET_COLOR_FILTER");
export const setPriceFilter = createAction("SET_PRICE_FILTER");

export const setBrandFilter = createAction("SET_BRAND_FILTER");

export const setSorting = createAction("SET_SORTING");



export const removeFromCart = (productId) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: productId,
    };
};

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
    };
};

export const toggleCart = () => {
    return {
        type: "TOGGLE_CART",
    };
};
