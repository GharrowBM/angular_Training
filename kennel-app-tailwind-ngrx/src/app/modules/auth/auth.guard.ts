import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import * as fromAuthSelectors from './store/auth.selectors'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private _router: Router) {}

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = localStorage.getItem('token')
            const isAuth = !!token

            if (isAuth) return true
            
            return this._router.createUrlTree(['/auth/sign-in'])
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = localStorage.getItem('token')
            const isAuth = !!token

            if (isAuth) return true
            
            return this._router.createUrlTree(['/auth/sign-in'])
    }

}