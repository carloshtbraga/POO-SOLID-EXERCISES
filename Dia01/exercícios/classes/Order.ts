import Client from "./Client";
import OrderItem from "./OrderItem";

class Order {
  private _cliente: Client;
  private _itens: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount: number;

  constructor(cl: Client, oi: OrderItem[], pm: string, di: number) {
    this._cliente = cl;
    this._itens = oi;
    this._paymentMethod = pm;
    this._discount = di;
  }

  getClient(): Client {
    return this._cliente;
  }
  getItens(): OrderItem[] {
    return this._itens;
  }
  getPaymentMethod(): string {
    return this._paymentMethod;
  }
  getDiscount(): number {
    return this._discount;
  }

  setClient(value: Client) {
    this._cliente = value;
  }
  setItens(value: OrderItem[]) {
    this._itens = value;
  }
  setPayment(value: string) {
    this._paymentMethod = value;
  }
  setDiscount(value: number) {
    if (value < 0) {
      throw new Error("O desconto não pode ser um valor negativo.");
    }
    this._discount = value;
  }
}

export default Order;
