import UserModel from "./userModel"

interface SignInWithGoogleRequest {
    accessToken: string
}

interface SignInResponse {
    userInfo: UserModel
    accessToken: string
    refreshToken: string
}

export { SignInWithGoogleRequest, SignInResponse }