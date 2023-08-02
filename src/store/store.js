import { configureStore } from "@reduxjs/toolkit";
import {cartReducer, searchReducer} from "./reducers";

const rootReducer = {
    search: searchReducer,
    cart: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;

