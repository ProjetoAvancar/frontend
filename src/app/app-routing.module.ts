import { ProdutosComponent } from './produtos/produtos.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'produtos', pathMatch:'full'},

  { path: 'produtos', component: ProdutosComponent },
  { path:'login', component: LoginComponent },
  { path:'cadastro', component: CadastrarComponent },

  { path:'busca-produto/:nome', component: BuscaProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
