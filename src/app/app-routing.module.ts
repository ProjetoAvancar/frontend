import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', redirectTo:'produtos', pathMatch:'full'},

  { path:'produtos', component: ProdutosComponent, data: {isHeader: true} },
  { path:'login', component: LoginComponent },
  { path:'cadastro', component: CadastrarComponent },
  { path:'categoria', component: CategoriaComponent, data: {isHeader: true} },

  { path:'busca-produto/:nome', component: BuscaProdutoComponent, data: {isHeader: true} },
  { path:'edit-categoria/:id', component: CategoriaEditComponent, data: {isHeader: true} },
  { path:'delete-categoria/:id', component: CategoriaDeleteComponent, data: {isHeader: true} },

  { path:'cadastrar-produto', component: CadastrarProdutoComponent, data: {isHeader: true} },

  {path: 'produto-edit/:id', component: ProdutoEditComponent, data: {isHeader: true}}, /*rota pra editar produto*/
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent, data: {isHeader: true}} /*rota pra deletar produto*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
