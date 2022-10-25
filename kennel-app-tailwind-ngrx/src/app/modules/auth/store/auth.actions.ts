import { HttpErrorResponse } from "@angular/common/http";
import { createActionGroup, props } from "@ngrx/store";
import { SignInResponse, SignUpResponse } from "../auth.types";

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'Sign Up': props<{email: string, password: string}>(),
        'Sign Up Success': props<SignUpResponse>(),
        'Sign Up Failure': props<{ error: HttpErrorResponse }>(),
        'Sign In': props<{email: string, password: string}>(),
        'Sign In Success': props<SignInResponse>(),
        'Sign In Failure': props<{ error: HttpErrorResponse }>()
    }
})