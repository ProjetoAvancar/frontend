import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from './../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  produto: Produto = new Produto()
  listaProdutos: Produto[]

  constructor(
    private router: Router,
    private produtoService: ProdutoService 
  ) { }

  ngOnInit(){
    this.findAllProdutos() 
  }

  findAllProdutos(){ /*para listar  todos os produtos*/ 
  this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
    this.listaProdutos = resp
  })
 }

  cadastrar(){ 
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert("Produto cadastrado")
      this.findAllProdutos()
      this.produto = new Produto() 
    })
  }

}
