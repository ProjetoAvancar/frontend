import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ProdutosComponent,
    MenuComponent,
    LoginComponent,
    CadastrarComponent,
    CarouselComponent,
    FooterComponent,
    BuscaProdutoComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    CadastrarProdutoComponent,
    TelaProdutoComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
