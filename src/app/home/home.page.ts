import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router:Router
    ) {}
  Login() {
    this.router.navigate(['login']);
  }
}
