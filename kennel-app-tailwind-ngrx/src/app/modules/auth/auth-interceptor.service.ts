import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { mergeMap, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromAuthSelectors from './store/auth.selectors'

@Injectable() 
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private _store: Store) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this._store.select(fromAuthSelectors.getToken).pipe(
            mergeMap(token => {
                const modifiedRequest = req.clone({params: new HttpParams().set('auth', token)})
                return next.handle(modifiedRequest)
            })
        )
    }

}