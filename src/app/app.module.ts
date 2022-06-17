import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { EditarUsuarioComponent } from './edit/editar-usuario/editar-usuario.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { SobreComponent } from './sobre/sobre.component';
import { BotaoComponent } from './botao/botao.component';


registerLocaleData(ptBr);

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
    TelaProdutoComponent,
    HomeComponent,
    BuscaProdutoComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    CadastrarProdutoComponent,
    TelaProdutoComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    FooterComponent,
    EditarUsuarioComponent,
    CarrinhoComponent,
    SobreComponent,
    BotaoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
    provide:  LOCALE_ID,
    useValue: 'pt',
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
],
  bootstrap: [AppComponent]
})
export class AppModule {}
