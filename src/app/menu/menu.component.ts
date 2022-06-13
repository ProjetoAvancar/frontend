import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  id = environment.id

  constructor(
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  carrinho() {
    this.router.navigate(['/carrinho'])
  }
}
