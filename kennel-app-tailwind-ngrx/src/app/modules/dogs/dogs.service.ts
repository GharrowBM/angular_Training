import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Dog } from "./dogs.types";

const BASE_API_URL = 'https://angular-perso-kennel-app-default-rtdb.europe-west1.firebasedatabase.app/'

@Injectable() 
export class DogsService {
    
    constructor(private _http: HttpClient) {}
    
    getDogs(): Observable<Dog[]> {
        return this._http.get<Dog[]>(`${BASE_API_URL}dogs.json`).pipe(
            tap(dogs => console.log(dogs)),
            map(data => {
                const postArray = []

                for (const key in data) {
                    postArray.push({id: key, ...data[key]})
                }

                return postArray
            })
        )
    }
}