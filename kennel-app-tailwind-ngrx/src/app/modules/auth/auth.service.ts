import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignUpResponse, SignInResponse } from "./auth.types";

const API_KEY = 'AIzaSyB0gYyi4x60mWTTJnQOQ1kNMD37SayFlX0'
const BASE_REGISTER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
const BASE_SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
@Injectable()
export class AuthService {

    constructor(private _http: HttpClient) {}

    signUp(email: string, password: string) {
        return this._http.post<SignUpResponse>(BASE_REGISTER_URL, {
            email,
            password,
            returnSecureToken: true
        })
    } 

    signIn(email: string, password: string) {
        return this._http.post<SignInResponse>(BASE_SIGN_IN_URL, {
            email,
            password,
            returnSecureToken: true
        })
    }
}