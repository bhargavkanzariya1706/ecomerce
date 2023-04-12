import { configureStore } from "@reduxjs/toolkit";
import abc from "./slices/cartSlice";
import xyz from "./slices/wishlistSlice"; 

const store = configureStore({
    reducer:{
        cart:abc ,
        wishlist:xyz
    }
})
export default store;