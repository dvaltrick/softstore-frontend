import { TipoProduto } from './TipoProduto';

export class Produto{
  public produtoId:Number;
  public nome:String;
  public codigoBarras:String;
  public tipo:TipoProduto = new TipoProduto();
  public valorUnitario:Number;
}
