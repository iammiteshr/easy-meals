// redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const { addToCart } = cartSlice.actions;
export default store;
