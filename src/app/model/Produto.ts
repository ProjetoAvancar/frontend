import { Categoria } from "./Categoria"

export class Produto {
  public id: number
  public nome: string
  public descricao: string
  public valor: number
  public foto: string
  public desconto: number
  public categoria: Categoria
  // public usuario: User
}
