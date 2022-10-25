import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth.routing';
import { StoreModule } from '@ngrx/store';
import { authReducer, AUTH_FEATURE_KEY } from './store/auth.reducers';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
