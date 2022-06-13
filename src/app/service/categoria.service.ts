import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  /*metodo para trazer uma lista de categorias */
  getAllCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categorias')
  }

  getByIdCategorias(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categorias/${id}`,)
  }

  getNomeCategorias(nome: string ): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`http://localhost:8080/categorias/titulo/${nome}`)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('http://localhost:8080/categorias', categoria)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('http://localhost:8080/categorias', categoria)
  }

  deleteCategoria(id: number){
    return this.http.delete(`http://localhost:8080/categorias/${id}`)
  }
}
