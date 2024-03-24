import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LocationInfoModel, UserModel } from '@/models';
import { RootState } from '../store';
import { useFetchUserInfo } from '@/hooks';
import { UserService } from '@/services';

type initialStateType = {
    user: UserModel | null
    location: LocationInfoModel
};

const initialState: initialStateType = {
    user: null,
    location: {}
};

export const getUserInfo = createAsyncThunk(
    "user/fetchUserCart",
    async (_, { dispatch }) => {
        try {
            const user = await UserService.getInfoById("65fda634c9ca0c49017e8305");
            console.log("🚀 ~ user:", user)

            dispatch(setUser(user))

        } catch (err) {
            console.log(err);
        }
    }
);

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
