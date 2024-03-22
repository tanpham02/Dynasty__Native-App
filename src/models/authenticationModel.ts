import { UserModel } from "./userModel"

export interface SignInWithGoogleRequest {
    accessToken: string
}

export interface SignInResponse {
    userInfo: UserModel
    accessToken: string
    refreshToken: string
}
