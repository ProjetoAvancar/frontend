import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

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
      alert('Você não possui autorização!');
      this.router.navigate(['/produtos']);
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
        alert('Categoria atualizada!');
        this.router.navigate(['/categoria']);
      });
  }
}
