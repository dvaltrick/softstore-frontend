import { Imposto } from './Imposto';
import { TipoProdutoImposto } from './TipoProdutoImposto';

export class TipoProduto{
  public tipoProdutoId:Number;
  public nome:String;
  public impostos: Imposto[];
  public tiposProdutosImpostos: TipoProdutoImposto[];
}
