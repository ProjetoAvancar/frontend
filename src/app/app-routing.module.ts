import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  
  { path:'login', component: LoginComponent },
  { path:'cadastro', component: CadastrarComponent },

  {path: 'produto-edit/:id', component: ProdutoEditComponent}, /*rota pra editar produto*/
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent} /*rota pra deletar produto*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
