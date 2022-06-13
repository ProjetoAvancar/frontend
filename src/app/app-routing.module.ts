import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  
  { path:'login', component: LoginComponent },
  { path:'cadastro', component: CadastrarComponent },

  { path:'cadastrar-produto', component: CadastrarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
