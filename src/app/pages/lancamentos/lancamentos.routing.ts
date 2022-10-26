import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosListaComponent } from './lancamentos-lista/lancamentos-lista.component';


const routes: Routes = [
    { path: '', component: LancamentosListaComponent },
    { path: 'lancamentos/novo', component: LancamentoCadastroComponent },
    { path: ':codigo', component: LancamentoCadastroComponent },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class LancamentosRoutingModule { }
