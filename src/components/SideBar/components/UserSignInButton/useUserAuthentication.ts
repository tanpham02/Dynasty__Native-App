import { useSelector } from "react-redux";

import { tokenManager } from "App";
import { navigate } from "@/utils";
import { RootState } from "@/redux";
import { UserModel } from "@/models";
import { PATH_SCREEN } from "@/constants";

export const useUserAuthentication = () => {
    const isAuthenticated = tokenManager.getAccessToken();

    const userLogin = useSelector<RootState, UserModel>((state) => state.userStore.user);

    const loginOrViewProfile = () => {
        if (isAuthenticated) {
            navigate(PATH_SCREEN.MY_PROFILE_SCREEN)
        } else {
            navigate(PATH_SCREEN.SIGN_IN_SCREEN)
        }
    };

    return { isAuthenticated, userLogin, loginOrViewProfile } as const
}