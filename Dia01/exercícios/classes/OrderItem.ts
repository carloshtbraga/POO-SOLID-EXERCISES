class OrderItem {
  private _nome: string;
  private _price: number;

  constructor(n: string, p: number) {
    this._nome = n;
    this._price = p;
  }

  getNome(): string {
    return this._nome;
  }

  setNome(value: string) {
    if (value.length < 3) {
      throw new Error("O nome deve conter no mínimo 3 caracteres.");
    }

    this._nome = value;
  }

  getPrice(): number {
    return this._price;
  }

  setPrice(value: number) {
    if (value < 0) {
      throw new Error("O preço deve ser positivo.")
    }
    this._price = value;
  }
}

export default OrderItem