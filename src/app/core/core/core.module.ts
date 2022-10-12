import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { PrimengModule } from 'src/app/primeng.module';


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
