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
    return this.http.get<Categoria[]>('https://projetoavancar.herokuapp.com/categorias')
  }

  getByIdCategorias(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://projetoavancar.herokuapp.com/categorias/${id}`,)
  }

  getNomeCategorias(nome: string ): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://projetoavancar.herokuapp.com/categorias/titulo/${nome}`)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://projetoavancar.herokuapp.com/categorias/cadastrar', categoria)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://projetoavancar.herokuapp.com/categorias/atualizar', categoria)
  }

  deleteCategoria(id: number){
    return this.http.delete(`https://projetoavancar.herokuapp.com/categorias/${id}`)
  }
}
