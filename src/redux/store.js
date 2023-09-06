import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './greeting_slice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
