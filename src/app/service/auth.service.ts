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
      'http://localhost:8080/usuarios/logar',
      userLogin
    )
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:8080/usuarios/cadastrar',
      user
    )
  }

  getUserById(id: number): Observable<User> {
    this.refreshToken()
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  putUsuario(user: User): Observable<User> {
    this.refreshToken()
    return this.http.put<User>('http://localhost:8080/usuarios/atualizar', user, this.token)
  }

  logado() {
    let ok = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

}
