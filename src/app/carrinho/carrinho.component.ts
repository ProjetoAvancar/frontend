import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho = environment.carrinho
  produto: Produto = new Produto()
  listaProdutos: Array<Produto> = []
  soma = 0

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.carrinhoCompleto()
  }

  findProdutoById(id: number) {
    this.produtoService.getProdutoById(id).subscribe((resp: Produto)=>{
      this.produto = resp
      this.soma += this.produto.valor
      this.listaProdutos.push(this.produto)
    })
  }

  carrinhoCompleto() {
    for(let item in this.carrinho){
      if(this.carrinho[item] > 0) {
        let id = this.carrinho[item]
        this.findProdutoById(id)
      }
    }
  }



}
