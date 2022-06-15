import { Router } from '@angular/router';
import { Categoria } from './../model/Categoria';
import { CategoriaService } from './../service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  categorias: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
    ) { }

  ngOnInit() {
    if (environment.token == '' || environment.tipo != 'adm') {
      Swal.fire({
        title: 'Você não possui autorização!',
        icon: 'error'
    })
      //alert('Você não possui autorização!');
      this.router.navigate(['/home']);
    } else {
      this.findAllCategoria()
    }
  }

  findAllCategoria() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.categorias = resp
    })
  }

  cadastrar() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      Swal.fire({
        title: 'Categoria cadastrada com sucesso!',
        icon: 'success'
    })
      //alert("Categoria cadastrada!")
      this.findAllCategoria()
      this.categoria = new Categoria()
    })
  }

}
