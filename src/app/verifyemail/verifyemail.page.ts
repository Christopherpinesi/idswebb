import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../models/authentication-service";

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.page.html',
  styleUrls: ['./verifyemail.page.scss'],
})
export class VerifyemailPage implements OnInit {

  constructor(public authService :AuthenticationService) { }

  ngOnInit() {
  }

}
