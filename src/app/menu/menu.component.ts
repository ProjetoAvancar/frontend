import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterContentChecked {

  @Input() isHeader: boolean;
  idUser = environment.id;
  nome = environment.nome
  tipo = environment.tipo
  // tipoUser = localStorage.getItem('tipo')
  // nomeUser = localStorage.getItem('nome')

  nomeProduto: string

  constructor(
    public auth: AuthService,
    private router: Router
    ) {  }

  ngOnInit() {
    
  }

  ngAfterContentChecked() {
    // this.tipoUser = localStorage.getItem('tipo')
    // this.nomeUser = localStorage.getItem('nome')
    this.nome = environment.nome
    this.tipo = environment.tipo
    this.idUser = environment.id
  }

  sair() {
    environment.nome = '',
    environment.token = '',
    environment.id = 0,
    environment.tipo = ''

    localStorage.clear()

    this.router.navigate(['/produtos'])
  }
  carrinho() {
    this.router.navigate(['/carrinho'])
  }
}
