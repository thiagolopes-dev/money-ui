import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    SidebarModule,
    TooltipModule,
    CardModule,
    DropdownModule
  ],
  declarations: []
})
export class PrimengModule { }
