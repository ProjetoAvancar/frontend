import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  id = environment.id
  nomeUser = localStorage.getItem('nome')

  nomeProduto: string

  constructor(
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  sair() {
    environment.nome = '',
    environment.token = '',
    environment.id = 0,
    environment.tipo = ''
    this.router.navigate(['/produtos'])
  }

}
