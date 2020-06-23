import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../models/authentication-service'
import { User} from '../models/user'




@Component({
  selector: 'app-dati-personali',
  templateUrl: './dati-personali.page.html',
  styleUrls: ['./dati-personali.page.scss'],
})
export class DatiPersonaliPage implements OnInit {
  constructor(private authService : AuthenticationService ) {}
  
  ngOnInit() {}

}

