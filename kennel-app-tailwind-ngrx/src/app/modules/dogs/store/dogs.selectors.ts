import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DogState, DOG_FEATURE_KEY } from "./dogs.reducers";

const dogsState = createFeatureSelector<DogState>(DOG_FEATURE_KEY)

export const getDogs = createSelector(dogsState, (state) => state.dogs)