import { Router } from '@angular/router';
import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

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

  constructor(
    private produtoService: ProdutoService,
    private router: Router
    ) { }

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

  finalizarCompra() {
    if(environment.token == '') {
      Swal.fire({
        title: 'Você precisa estar logado!',
        icon: 'warning'        
      }
      )
      this.router.navigate(['/login'])
      // alert('Você precisa estar logado!')
      
    } else if(this.listaProdutos.length > 0) {
      Swal.fire(
        'Muito obrigado pela compra!',
        'Você acabou de nos ajudar a avançar a <b> erradicação da pobreza</b> no mundo!',
        'success'
        //,
        //confirmButtonText: 'Cool',
        //confirmButtonColor: ''
    )
      // alert('Muito obrigado pela compra!')
      this.listaProdutos = []
      environment.carrinho = [0]
      this.router.navigate(['/home'])
    } else {
      Swal.fire({
        title: 'Seu carrinho está vazio!',
        icon: 'warning'        
      }
      )
      //alert('Seu carrinho está vazio!')
    }
  }



}
