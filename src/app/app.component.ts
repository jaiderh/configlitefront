import { Component } from '@angular/core';
import { AuthService } from './Auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Config Lite';
  signedin$: BehaviorSubject<boolean>;

  constructor(public authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  get user(): string {
    return this.authService.getUser().username;
  }

  logout() {
    this.authService.logout();
  }

}
