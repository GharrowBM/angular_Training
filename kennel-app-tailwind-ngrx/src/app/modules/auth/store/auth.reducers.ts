import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "./auth.actions"

export interface AuthState {
    token: string
}

export const AUTH_FEATURE_KEY = 'authState'

const initialState: AuthState = {
    token: ''
}

export const authReducer = createReducer<AuthState>(
    initialState,
    on(AuthActions.signUpSuccess, (state, {idToken}) => {
        localStorage.setItem('token', idToken)
        return {
            ...state,
            token: idToken
        }
    }),
    on(AuthActions.signInSuccess, (state, {idToken}) => {
        localStorage.setItem('token', idToken)
        return {
            ...state,
            token : idToken
        }
    }),
)