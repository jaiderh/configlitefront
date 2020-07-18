import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { SocketListComponent } from './sockets/socket-list/socket-list.component';
import { SocketDetailComponent } from './sockets/socket-detail/socket-detail.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './Auth/login-form/login-form.component';
import { HttpErrorInterceptor } from './Auth/http.error.interceptor';
import { HttpAuthInterceptor } from './Auth/http-auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    SocketListComponent,
    SocketDetailComponent,
    ClientListComponent,
    ClientDetailComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
