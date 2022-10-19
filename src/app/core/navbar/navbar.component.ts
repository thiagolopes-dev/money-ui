import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  menu: boolean = false;
  ngOnInit() {
  }
 exibindoMenu(){
  this.menu = true;
 }
 pessoas(){
  console.log('entrou aqui');
 }
 home(){
  this.router.navigate(['/']);
 }
}
