import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto()
  /*comentada pois não tenho a parte de categoria*/
  //listaCategorias: Categoria[] 
  //idCategoria: string

  constructor(
     private produtoService: ProdutoService,
     private router: Router,
     private route: ActivatedRoute /*Pega a rota ativa*/
     //private categoriaService: CategoriaService  /*comentada pois ainda nao tenho a parte de categoria*/

  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == ''){
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    //this.findAllCategorias()  /*está comentado pq ainda não tenho a parte de categoria*/
  }
/*para achar o produto por id*/
  findByIdProduto(id: number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  /* está comentado pq ainda não tenho a parte de categoria
  findByIdCategoria(){
    this.categoriaService.getbyIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  } */

  /* está comentado pq ainda não tenho a parte de categoria
  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp 
    })
  } */

  atualizar(){
      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/login'])
      })
    }

  }
