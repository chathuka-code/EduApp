import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'clicks',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = clickSlice.actions;
export default clickSlice.reducer;
