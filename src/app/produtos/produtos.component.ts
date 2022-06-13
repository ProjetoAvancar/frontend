import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
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
}
