import { HttpErrorResponse } from '@angular/common/http'
import { createActionGroup, emptyProps, props } from "@ngrx/store"
import { Dog } from "../dogs.types"

export const DogsActions = createActionGroup({
    source: 'Dogs',
    events: {
        'Load Dogs': emptyProps(),
        'Load Dogs Success': props<{dogs: Dog[]}>(),
        'Load Dogs Failure': props<{error: HttpErrorResponse}>(),
        'Add Dog': props<{dog: Dog}>(),
        'Delete Dog': props<{dogId: number}>(),
        'Update Dog': props<{dogId: number, dog: Dog}>()
    }
})