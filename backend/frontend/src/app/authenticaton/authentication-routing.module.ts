import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'login',
    data: { preload: true },
    pathMatch: 'full',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'signup',
    data: { preload: true },
    pathMatch: 'full',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
  },
];


@NgModule({
  declarations: [],
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }