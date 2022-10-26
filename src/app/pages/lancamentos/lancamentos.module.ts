import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/primeng.module';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosListaComponent } from './lancamentos-lista/lancamentos-lista.component';
import { LancamentosRoutingModule } from './lancamentos.routing';

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosListaComponent
  ],
  imports: [
    PrimengModule,
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
