import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { LoginRepsonse } from './login.response';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedin$: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.signedin$ = new BehaviorSubject( this.getUser() != null );
  }

  login(userForm: User) {
    this.httpClient.post<LoginRepsonse>(`${environment.apiBaseURL}/users/login`, userForm)
      .subscribe(
        result => {
          alert(result.message);
          localStorage.setItem('user', JSON.stringify(result.user));
          this.signedin$.next(true);
          this.router.navigate(['/']) ;
        },
        err => alert( err.error.message || err.statusText )
      );
  }

  logout() {
    if (this.getUser()) {
      localStorage.removeItem('user');
      this.signedin$.next(false);
      this.router.navigate(['/login']) ;
    }
  }

  getUser(): User {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse( userStr ) as User : null;
  }
}
