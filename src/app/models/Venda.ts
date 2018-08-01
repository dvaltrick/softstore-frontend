import { ItemVenda } from "./ItemVenda";

export class Venda{
  public vendaId:Number;
  public itens:ItemVenda[] = [];
  public totalImpostos:Number = 0;
  public total:Number = 0;

}
