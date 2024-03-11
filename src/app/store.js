// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
