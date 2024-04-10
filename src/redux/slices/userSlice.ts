import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { tokenManager } from 'App';
import { UserService } from '@/services';
import { LocationInfoModel, UserModel } from '@/models';

type initialStateType = {
  user: UserModel | null;
  location: LocationInfoModel;
};

const initialState: initialStateType = {
  user: null,
  location: {},
};

export const getUserInfo = createAsyncThunk('user/getUserInfo', async (_, { dispatch }) => {
  try {
    const user = await UserService.getInfo();
    console.log('🚀 ~ getUserInfo ~ user:', user);
    dispatch(setUser(user));
  } catch (err) {
    console.log(err);
  }
});

export const updateUserInfo = createAsyncThunk('user/updateUserInfo', async (user: FormData) => {
  try {
    await UserService.updateInfoById(tokenManager.getUserId(), user);
  } catch (err) {
    console.log(err);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setCurrentUserLocation(state, action) {
      state.location = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, setCurrentUserLocation } = actions;
export default reducer;
