import { CategoriaService } from './../service/categoria.service';
import { Categoria } from './../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from './../service/produto.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
})
export class CadastrarProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  listaProdutos: Produto[];
  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  idCategoria: number;

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    if (environment.token == '' || environment.tipo != 'adm') {
      Swal.fire({
        title: 'Você não possui autorização!',
        icon: 'error'
    })
      //alert('Você não possui autorização!');
      this.router.navigate(['/home']);
    }
    this.findAllProdutos();
    this.findAllCategorias();
  }

  findAllProdutos() {
    /*para listar  todos os produtos*/
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findCategoriaById() {
    this.categoriaService
      .getByIdCategorias(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
        console.log(this.categoria.nome);
      });
  }

  cadastrar() {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;
    console.log(this.produto);
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      Swal.fire({
        title: 'Produto cadastrado com sucesso!',
        icon: 'success'
    })
      //alert('Produto cadastrado');
      this.findAllProdutos();
      this.produto = new Produto();
    });
  }
}
