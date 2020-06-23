import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user';
import { AuthenticationService } from "../models/authentication-service"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router) { }

  Lhome() {
    this.router.navigate(['lhome']);
  }
  Singup() {
    this.router.navigate(['singup']);
}

  ngOnInit() {}

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
