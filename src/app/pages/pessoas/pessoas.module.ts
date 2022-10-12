import { NgModule } from "@angular/core";
import { PrimengModule } from "src/app/primeng.module";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PessoasListaComponent } from "./pessoas-lista/pessoas-lista.component";
import { PessoasRoutingModule } from "./pessoas.routing";


@NgModule({
  declarations: [
    PessoasListaComponent,
    PessoaCadastroComponent
  ],
  imports: [
    PrimengModule,
    PessoasRoutingModule
  ],
  exports: []
})
export class PessoasModule {}
