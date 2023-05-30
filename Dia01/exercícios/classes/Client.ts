class Client {
  private _name: string;

  constructor(nome: string) {
    this._name = nome
  }

  getNome(): string{
    return this._name
  }

  setNome(value: string) {
    if (value.length < 4) {
      throw new Error("O Nome precisa de pelo menos 4 dígitos");
    }
    this._name = value;
  }
}

export default Client