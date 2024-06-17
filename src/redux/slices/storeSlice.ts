import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { StoreConfigModel } from '@/models';
import { StoreConfigService } from '@/services';

type initialStateType = {
  storeConfig: StoreConfigModel;
};

const initialState: initialStateType = {
  storeConfig: {},
};

export const getStoreConfig = createAsyncThunk('store/getStoreConfig', async (_, { dispatch }) => {
  try {
    const storeConfigResponse = await StoreConfigService.getStoreConfig();
    dispatch(setStoreConfig(storeConfigResponse));
  } catch (error) {
    console.log('Error when get store config', error);
  }
});

const storeSlice = createSlice({
  name: 'store',
  initialState: initialState,
  reducers: {
    setStoreConfig: (state, action) => {
      state.storeConfig = action.payload;
    },
  },
});

const { reducer, actions } = storeSlice;

export const { setStoreConfig } = actions;

export default reducer;
