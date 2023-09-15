import { createSlice } from '@reduxjs/toolkit';

// export interface CounterState {
//   value: number;
// }

const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

// export default counterActions.reducer;
