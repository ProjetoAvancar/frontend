import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-tela-produto',
  templateUrl: './tela-produto.component.html',
  styleUrls: ['./tela-produto.component.css']
})
export class TelaProdutoComponent implements OnInit {

  produto: Produto
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.findProdutoById(id)
    console.log(this.findProdutoById(id))
  }
  
  findProdutoById(id: number){
  this.produtoService.getProdutoById(id).subscribe((resp: Produto)=>{
      this.produto = resp
     })
   }

}