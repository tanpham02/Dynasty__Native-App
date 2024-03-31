import { createSlice } from '@reduxjs/toolkit';

import { OrderModel } from '@/models/orderModel';

const orderInitialState: { order: OrderModel } = {
  order: {},
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: orderInitialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

const { reducer, actions } = orderSlice;
export const { setOrder } = actions;
export default reducer;
