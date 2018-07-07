import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./services/auth-guard.service";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }