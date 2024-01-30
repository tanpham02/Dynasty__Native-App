import {createSlice} from '@reduxjs/toolkit';

type initialStateType = {
  user: {
    id?: string;
  };
};

const initialState: initialStateType = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const {reducer, actions} = userSlice;

export const {setUser} = actions;
export default reducer;
