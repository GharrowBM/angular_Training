import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { DogsService } from "../dogs.service";
import { Dog } from "../dogs.types";
import { DogsActions } from "./dogs.actions";

@Injectable()
export class DogsEffects {
    loadDogs$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(DogsActions.loadDogs),
            mergeMap(action => {
                return this._dogsService.getDogs().pipe(
                    map((dogs: Dog[]) => DogsActions.loadDogsSuccess({dogs}))
                )
            })
        )
    })

    constructor(private _actions$: Actions, private _dogsService: DogsService) {}
}