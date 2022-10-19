import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    SidebarModule,
    TooltipModule
  ],
  declarations: []
})
export class PrimengModule { }
