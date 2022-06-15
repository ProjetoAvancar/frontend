import { Produto } from './../model/Produto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://projetoavancar.herokuapp.com/produtos')
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`https://projetoavancar.herokuapp.com/produtos/${id}`)
  }

  getProdutosByNome(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://projetoavancar.herokuapp.com/produtos/nome/${nome}`)
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('https://projetoavancar.herokuapp.com/produtos/cadastrar', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('https://projetoavancar.herokuapp.com/produtos/atualizar', produto, this.token)
  }

  deleteProduto(id: number){
  return this.http.delete(`https://projetoavancar.herokuapp.com/produtos/${id}`, this.token)
  }

}
