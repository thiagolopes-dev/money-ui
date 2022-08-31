import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ],
  declarations: []
})
export class PrimengModule { }
