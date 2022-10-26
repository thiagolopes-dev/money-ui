import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  exibindoMenu() {
    this.menu = true;
  }
  pessoas() {
    this.router.navigate(['/pessoas']);
    this.menu = false;
  }
  lancamentos() {
    this.router.navigate(['/lancamentos']);
    this.menu = false;
  }
  home() {
    this.router.navigate(['/']);
  }
}
