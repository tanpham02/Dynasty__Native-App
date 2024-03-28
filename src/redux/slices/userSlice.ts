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
    "user/getUserInfo",
    async (_, { dispatch, getState }) => {
        try {
            const userStore = (getState() as RootState)?.userStore.user as UserModel;
            const user = await UserService.getInfoById(userStore?._id || "660577c24ba07df3e3860a1d");

            dispatch(setUser(user))

        } catch (err) {
            console.log(err);
        }
    }
);

export const updateUserInfo = createAsyncThunk(
    "user/updateUserInfo",
    async (user: FormData, { dispatch, getState }) => {
        try {
            console.log("🚀 ~ data:", user)
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
