import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo: any = '/assets/icons/logo_icon.png';
  constructor() { }

  ngOnInit(): void {
  }

}
