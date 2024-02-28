import { LocationInfoModel, UserModel } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
    user: UserModel
    location: LocationInfoModel
};

const initialState: initialStateType = {
    user: {},
    location: {}
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setCurrentUserLocation(state, action) {
            state.location = action.payload;
        }
    },
});

const { reducer, actions } = userSlice;

export const { setUser, setCurrentUserLocation } = actions;
export default reducer;
