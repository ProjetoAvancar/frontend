import { Produto } from './../model/Produto';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-busca-produto',
  templateUrl: './busca-produto.component.html',
  styleUrls: ['./busca-produto.component.css']
})
export class BuscaProdutoComponent implements OnInit {

  nomeProcurado: string
  produtos: Produto[]
  teste = [1,2,3,4,5,6,7,8,9,10]

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
    ) { }

  ngOnInit() {
    let nome = this.route.snapshot.params['nome']
    this.findByNomeProduto(nome)

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let nome = event.url
        nome = nome.split('/')[2]
        this.findByNomeProduto(nome)
      }
   })

  }

  findByNomeProduto(nome: string) {
    this.produtoService.getProdutosByNome(nome).subscribe((resp: Produto[])=>{
      this.produtos = resp
    })
    this.nomeProcurado = nome
    console.log('passou aqui')
  }

}
