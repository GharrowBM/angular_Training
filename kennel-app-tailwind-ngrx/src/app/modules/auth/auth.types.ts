export interface SignUpResponse {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
}

export interface SignInResponse {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered: boolean
}