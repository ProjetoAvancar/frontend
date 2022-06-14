import { Categoria } from './Categoria';
import { User } from './User';
export class Produto {
  public id: number
  public nome: string
  public descricao: string
  public valor: number
  public desconto: number
  public foto: string
  public categoria: Categoria
  public usuario: User
}
