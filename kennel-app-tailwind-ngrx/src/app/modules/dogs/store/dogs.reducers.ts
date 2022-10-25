import { HttpErrorResponse } from "@angular/common/http"
import { createReducer, on } from "@ngrx/store"
import { Dog } from "../dogs.types"
import { DogsActions } from "./dogs.actions"

export const DOG_FEATURE_KEY = "dogsState"

export interface DogState {
    dogs: Dog[],
    selectedDog?: Dog,
    isLoading: boolean,
    error?: HttpErrorResponse
}

const initialState: DogState = {
    dogs: [
        {name: "Bernie", breed: "Labrador", age: 4}
    ],
    isLoading: false
}

export const dogReducer = createReducer(
    initialState,
    on(DogsActions.loadDogsSuccess, (state, {dogs}) => {
        return {
            ...state,
            dogs: [...dogs]
        }
    })
)