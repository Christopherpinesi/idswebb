import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lhome',
  templateUrl: './lhome.page.html',
  styleUrls: ['./lhome.page.scss'],
})
export class LhomePage implements OnInit {

  constructor(
    public router :Router ,
    public menu : MenuController) { }

  ngOnInit() {}

}
