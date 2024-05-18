import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./@core/guards";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'pages',
    // canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    data: {breadcrumb: 'Home'},
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module')
      .then(m => m.ErrorModule),
  },
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: '**', redirectTo: 'error/404'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
