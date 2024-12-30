import { configureStore } from '@reduxjs/toolkit';
import clickReducer from './slices/clickSlice';

export const store = configureStore({
  reducer: {
    clicks: clickReducer,
  },
});
