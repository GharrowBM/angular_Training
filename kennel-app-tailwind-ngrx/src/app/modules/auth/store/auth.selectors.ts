import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, AUTH_FEATURE_KEY } from "./auth.reducers";

const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY)

export const getToken = createSelector(getAuthState, (state) => state.token)