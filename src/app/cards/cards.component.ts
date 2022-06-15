import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  carrinho = environment.carrinho

  listaProdutos: Produto[]
  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    this.getAllProdutos()
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  adicionarAoCarrinho(id: number) {
    console.log(id)
    this.carrinho.push(id)
    console.log(this.carrinho)
  }

}
