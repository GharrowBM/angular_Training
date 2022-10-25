import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  // Main Route
  {path: '', pathMatch: 'full', redirectTo: 'auth'},

  // Dogs Feature
  {path:'dogs', canActivate: [AuthGuard], canActivateChild: [AuthGuard], loadChildren: () => import('./modules/dogs/dogs.module').then(m => m.DogsModule)},

  // Auth Features
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
