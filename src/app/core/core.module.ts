import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/primeng.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  providers: [],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
