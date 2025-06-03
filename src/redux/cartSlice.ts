import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store"; 

// 商品項目型別
export interface CartItem {
  id: string;
  name: string;
  price: number;
  cover: string;
  // 可以根據需要補上更多欄位，例如 image, category 等
}

// 初始 state 型別
interface CartState {
  cartItems: CartItem[];
}

// 初始值
const initialState: CartState = {
  cartItems: [],
};

// 建立 slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const exists = state.cartItems.some((x) => x.id === item.id);
      if (!exists) {
        state.cartItems.push(item);
      }
      // 若已存在則不重複加入
    },
    removeCartItems: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.id !== action.payload
      );
    },
  },
});

// selector
export const selectCartItems = (state: RootState) => state.cart.cartItems;

// actions
export const { addCartItems, removeCartItems } = cartSlice.actions;

// reducer
export default cartSlice.reducer;
