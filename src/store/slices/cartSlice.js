import {  createSlice } from "@reduxjs/toolkit";
const initialState ={
    isCartOpen:false,
    cartItem:[],
}

const cartSlice = createSlice({

    name : 'cart',
    initialState,
    reducers:{

        toggleCart(state,action){
            state.isCartOpen = action.payload;

        },

        addItem(state,action) {
            const newItemId = action.payload.id;
                console.log(newItemId);
            const existingItem = state.cartItem.find(item => item.id === newItemId);
            if (existingItem) {
                existingItem.quantity++;
                
            } else {
                
                state.cartItem.push(action.payload);
            }

        },
        
        removeItem(state, action) {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload);},
            
            incrementItem(state, action) {
                state.cartItem = state.cartItem.map(item => {
                    if(item.id === action.payload){
                        item.quantity++;
                    }
                    return item;
                });
            },

            decrementItem(state, action) {

                state.cartItem = state.cartItem.map(item =>{

                    if(item.id === action.payload){
                        item.quantity--;
                    
                    }
                    return item;

                }).filter(item =>item.quantity !==0);
            }
        
        }



    });
export const {toggleCart,addItem,removeItem,incrementItem,decrementItem} = cartSlice.actions;
export default cartSlice.reducer;


