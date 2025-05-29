import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store'; 

// Part1: Define Slice (including reducers and actions)
interface ColorState {
  lightMode: boolean;
}

const initialState: ColorState = {
  lightMode: true,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColorMode: (state, action: PayloadAction<boolean>) => {
      state.lightMode = action.payload;
      localStorage.setItem('theme', action.payload ? 'dark' : 'light'); // 存入 localStorage
    },
  },
});

// export state to global
export const selectLightMode = (state: RootState) => state.color?.lightMode;

// export actions to global
export const { setColorMode } = colorSlice.actions;

// export reducer to global
export default colorSlice.reducer;
