import { UserLogin } from './../model/UserLogin';
import { User } from './../model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://projetoavancar.herokuapp.com/usuarios/logar',
      userLogin
    )
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(
      'https://projetoavancar.herokuapp.com/usuarios/cadastrar',
      user
    )
  }

  getUserById(id: number): Observable<User> {
    this.refreshToken()
    return this.http.get<User>(`https://projetoavancar.herokuapp.com/usuarios/${id}`, this.token)
  }

  putUsuario(user: User): Observable<User> {
    this.refreshToken()
    return this.http.put<User>('https://projetoavancar.herokuapp.com/usuarios/atualizar', user, this.token)
  }

  logado() {
    let ok = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

}
