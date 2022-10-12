import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  menu: boolean = false;
  ngOnInit() {
  }
 exibindoMenu(){
  this.menu = true;
 }
 pessoas(){
  console.log('entrou aqui');
 }
}
