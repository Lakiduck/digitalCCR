import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from '../login/login.component'

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
  // {path: 'members', component: EditMemberComponent, outlet: "dashboard"}
]

@NgModule({
  imports :[
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
