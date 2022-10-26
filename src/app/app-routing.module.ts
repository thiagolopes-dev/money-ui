import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/seguranca/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'pessoas',
    loadChildren: () =>
      import('./pages/pessoas/pessoas.module').then(
        (m) => m.PessoasModule
      ),
  },
  {
    path: 'lancamentos',
    loadChildren: () =>
      import('./pages/lancamentos/lancamentos.module').then(
        (m) => m.LancamentosModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
