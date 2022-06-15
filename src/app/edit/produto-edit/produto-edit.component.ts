import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
     private produtoService: ProdutoService,
     private router: Router,
     private route: ActivatedRoute,
     private categoriaService: CategoriaService

  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '' || environment.tipo != 'adm') {
      Swal.fire({
        title: 'Você não possui autorização!',
        icon: 'error'
    })
      //alert('Você não possui autorização!');
      this.router.navigate(['/home']);
    }

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findAllCategorias()
  }

/*para achar o produto por id*/
  findByIdProduto(id: number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  atualizar(){
      this.categoria.id = this.idCategoria
      this.produto.categoria = this.categoria

      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      Swal.fire({
        title: 'Produto atualizado com sucesso!',
        icon: 'success'
    })
      //alert('Produto atualizado com sucesso!')
      this.router.navigate(['/cadastrar-produto'])
      })
    }

  }
