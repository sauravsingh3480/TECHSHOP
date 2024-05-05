import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: cartItemsFromStorage
    },
    reducers: {
        addItem: (state, action) => {
            const existsItem = state.items.find(item => item._id === action.payload._id)
            if (!existsItem) {
                state.items.push(action.payload);
            }
        },
        clearItem: (state) => {
            state.items = [];
        },
        removeItem: (state, action) =>
        ({
            ...state,
            items: state.items.filter(item => action.payload._id !== item._id)
        })
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;