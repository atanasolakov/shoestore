import {setSearchQuery, setSorting} from "./actions";

const initialState = {
    searchQuery: "",
    categoryFilter: "All",
    colorFilter: "All",
    priceFilter: "All",
    brandFilter: "All",
    sorting: "lowestToHighest",
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case setSearchQuery.type:
            return {
                ...state,
                searchQuery: action.payload,
            };
        case "SET_CATEGORY_FILTER":
            return {
                ...state,
                categoryFilter: action.payload,
            };
        case "SET_COLOR_FILTER":
            return {
                ...state,
                colorFilter: action.payload,
            };
        case "SET_PRICE_FILTER":
            return {
                ...state,
                priceFilter: action.payload,
            };
        case "SET_BRAND_FILTER":
            return {
                ...state,
                brandFilter: action.payload,
            };
        case setSorting.type:
            return {
                ...state,
                sorting: action.payload,
            };
        default:
            return state;
    }
};

const initialCartState = {
    cartItems: [],
    isOpen: false,
    totalQuantity: 0,
};
export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    totalQuantity: state.totalQuantity + 1,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                    totalQuantity: state.totalQuantity + 1,
                };
            }

        case "REMOVE_FROM_CART":
            const existingCartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (existingCartItem.quantity === 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== action.payload),
                    totalQuantity: state.totalQuantity - 1,
                };
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                    totalQuantity: state.totalQuantity - 1,
                };
            }

        case "TOGGLE_CART":
            return {
                ...state,
                isOpen: !state.isOpen,
            };

        default:
            return state;
    }
};



