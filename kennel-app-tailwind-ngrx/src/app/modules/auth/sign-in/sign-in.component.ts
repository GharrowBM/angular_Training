import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth.actions';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLogin: boolean

  constructor(private _store: Store) { 
    this.isLogin = true
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (!this.isLogin) {
      this._store.dispatch(AuthActions.signUp({...f.form.value}))
    } else {
      this._store.dispatch(AuthActions.signIn({...f.form.value}))
    }
  }

}
