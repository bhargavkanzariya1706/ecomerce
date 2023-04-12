import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWishListOpen:false,
    wishListItems:[]
};


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers: {

        togglewishList(state,action){
                state.isWishListOpen = action.payload;
        },

        addwishListitem (state,action){
            const newItemId = action.payload.id;

            const existingItem = state.wishListItems.find(items => items.id === newItemId);
            if(existingItem){
                state.wishListItems = state.wishListItems.filter(item => item.id !== action.payload.id);
            }else{
                state.wishListItems.push(action.payload);
            }
        },

        removeItem(state,action){

            state.wishListItems = state.wishListItems.filter(item => item.id !== action.payload);

        },
         
    }

});
export const {togglewishList,addwishListitem,removeItem} = wishlistSlice.actions;
export default wishlistSlice.reducer;
