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

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/produtos')
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`http://localhost:8080/produtos/${id}`)
  }

  getProdutosByNome(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:8080/produtos/nome/${nome}`)
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/produtos/cadastrar', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>('http://localhost:8080/produtos/atualizar', produto, this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`, this.token)
  }


} 