import { AuthService } from './../service/auth.service';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {

    this.confirmarSenha = event.target.value

  }

  cadastrar() {

    if (this.user.senha != this.confirmarSenha) {
      Swal.fire({
        title: 'As senhas não são iguais!',
        icon: 'error'
    })
      //alert('As senhas não são iguais!')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        Swal.fire({
          title: 'Usuário cadastrado com sucesso!',
          icon: 'success'
      })
        //alert('Usuário cadastrado com sucesso!')
      })
    }

  }

}
