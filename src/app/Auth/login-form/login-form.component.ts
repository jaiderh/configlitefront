import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public user: User;

  constructor(private authService: AuthService) {
    this.user = {} as User;
   }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user);
  }

}
