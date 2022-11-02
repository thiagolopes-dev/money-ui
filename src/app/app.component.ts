import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'money-ui';

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  navegaLogin() {
    this.router.navigate(['/login']);
  }

  exibindoNavbar() {
    return this.router.url !== '/login';
  }
}


