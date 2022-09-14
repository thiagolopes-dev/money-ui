import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
{path:'pessoas', component: PessoasListaComponent},
{path:'pessoas/novo', component: PessoaCadastroComponent},
{path:':codigo', component: PessoaCadastroComponent},

 ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class PessoaRoutingModule {}