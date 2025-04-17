import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            const item = action.payload;
            const product = state.cartItems.find((x) => x.id === item.id);
            if (product) {
                // 增加數量
                state.cartItems = state.cartItems.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // 新增商品，初始數量設為 1
                state.cartItems = [...state.cartItems, { ...item, qty: 1 }];
            }
        },
        removeCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (x) => x.id !== action.payload
            );
        },
    },
});

export const selectCartItems = (state) => state.cart.cartItems;

export const { addCartItems, removeCartItems } = cartSlice.actions;

export default cartSlice.reducer;
