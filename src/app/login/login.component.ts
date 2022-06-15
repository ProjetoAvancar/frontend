import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  entrar() {
    this.auth.login(this.userLogin).subscribe({
      next: (resp: UserLogin) => {
        this.userLogin = resp;

        environment.token = this.userLogin.token;
        environment.nome = this.userLogin.nome;
        environment.id = this.userLogin.id;
        environment.tipo = this.userLogin.tipo;

        // localStorage.setItem('nome', this.userLogin.nome)
        // localStorage.setItem('tipo', this.userLogin.tipo)

        this.router.navigate(['/home']);
      },
      error: (erro) => {
        if (erro.status == 401) {
          Swal.fire({
            title: 'Credenciais inválidas!',
            icon: 'error'
        })
          //alert('Usuário ou senha estão incorretos');
        }
      },
    });
  }
}
