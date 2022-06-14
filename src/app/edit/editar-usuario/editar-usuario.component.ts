import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: User = new User()
  idUsuario: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.idUsuario = this.route.snapshot.params['id']
    this.findUserById()
  }

  findUserById() {
    this.authService.getUserById(this.idUsuario).subscribe((resp: User)=>{
      this.usuario = resp
      this.usuario.senha = ''
    })
  }

  atualizar() {
    this.authService.putUsuario(this.usuario).subscribe((resp: User)=>{
      this.usuario = resp
      alert('Usuário atualizado com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }

}
