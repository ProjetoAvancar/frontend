import { AuthService } from '../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/User';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

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
    if (environment.token == '') {
      Swal.fire({
        title: 'Você precisa estar logado!',
        icon: 'warning'        
      }
      )
      //alert('Você precisa estar logado!');
      this.router.navigate(['/home']);
    }
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
      Swal.fire({
        title: 'Usuário atualizado com sucesso!',
        icon: 'success'
    })
      //alert('Usuário atualizado com sucesso!')
      this.router.navigate(['/home'])
    })
  }

}
