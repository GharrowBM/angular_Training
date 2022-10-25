import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { AuthService } from "../auth.service";
import { SignUpResponse } from "../auth.types";
import { AuthActions } from "./auth.actions";

@Injectable() 
export class AuthEffects {

    signUp$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(AuthActions.signUp),
            mergeMap(({email, password}) => {
                return this._authService.signUp(email, password).pipe(
                        map(response => AuthActions.signUpSuccess(response))
                    )
            })
        )
    })


    signIn$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(AuthActions.signIn),
            mergeMap(({email, password}) => {
                return this._authService.signIn(email, password).pipe(
                        map(response => AuthActions.signInSuccess(response))
                    )
            })
        )
    })


    constructor(private _authService: AuthService, private _actions$: Actions) {}

    
}