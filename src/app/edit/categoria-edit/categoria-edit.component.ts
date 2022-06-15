import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css'],
})
export class CategoriaEditComponent implements OnInit {
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (environment.token == '' || environment.tipo != 'adm') {
      Swal.fire({
        title: 'Você não possui autorização!',
        icon: 'error'
    })
      //alert('Você não possui autorização!');
      this.router.navigate(['/home']);
    } else {
      let id = this.route.snapshot.params['id'];
      this.findCategoriaById(id);
    }
  }

  findCategoriaById(id: number) {
    this.categoriaService.getByIdCategorias(id).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
  }

  atualizar() {
    this.categoriaService
      .putCategoria(this.categoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
        Swal.fire({
          title: 'Categoria atualizada com sucesso!',
          icon: 'success'
      })
        //alert('Categoria atualizada!');
        this.router.navigate(['/categoria']);
      });
  }
}
