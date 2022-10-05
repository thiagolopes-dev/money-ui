import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    SidebarModule
  ],
  declarations: []
})
export class PrimengModule { }
