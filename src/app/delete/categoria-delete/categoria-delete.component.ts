import { Categoria } from './../../model/Categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {
  categoria: Categoria = new Categoria();
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
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
      this.idCategoria = this.route.snapshot.params['id'];
      this.findCategoriaById(this.idCategoria);
    }
  }

  findCategoriaById(id: number) {
    this.categoriaService.getByIdCategorias(id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
  }

  deletar() {
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(()=>{
      Swal.fire({
        title: 'Categoria apagada com sucesso!',
        icon: 'success'
    })
      //alert('Categoria apagada!')
      this.router.navigate(['/categoria'])
    })
  }

}
