import { DashboardModule } from './pages/dashboard/dashboard.module';
import { LoginComponent } from './pages/seguranca/login/login.component';
import { PrimengModule } from './primeng.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent, LoginComponent, NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavbarComponent]
})
export class AppModule { }
