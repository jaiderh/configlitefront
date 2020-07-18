import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { SocketListComponent } from './sockets/socket-list/socket-list.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { SocketDetailComponent } from './sockets/socket-detail/socket-detail.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientListResolverService } from './clients/client-list-resolver.service';
import { ClientDetailResolverService } from './clients/client-detail-resolver.service';
import { LoginFormComponent } from './Auth/login-form/login-form.component';
import { AuthGuard } from './Auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'devices', component: DeviceListComponent, canActivate: [AuthGuard] },
  { path: 'device-detail/:id', component: DeviceDetailComponent, canActivate: [AuthGuard] },
  { path: 'sockets', component: SocketListComponent, canActivate: [AuthGuard] },
  { path: 'socket-detail/:id', component: SocketDetailComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientListComponent,
    resolve: { clientList: ClientListResolverService }, canActivate: [AuthGuard] },
  { path: 'clients/:id/detail', component: ClientDetailComponent,
     resolve: { clientDetail: ClientDetailResolverService }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
