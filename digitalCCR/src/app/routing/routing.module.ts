import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from '../login/login.component'
import { DisplayinfoComponent } from '../displayinfo/displayinfo.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'displayinfo', component: DisplayinfoComponent},
  {path: 'dashboard', component: DashboardComponent}

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
