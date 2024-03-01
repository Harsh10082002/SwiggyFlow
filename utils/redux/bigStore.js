

import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const bigStore = configureStore({
    reducer:{
        cart: cartSlice,
    }
});

export default bigStore;