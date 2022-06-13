import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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
