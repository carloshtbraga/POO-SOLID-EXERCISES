export default class Subject {
  constructor(private _name: string) {
    if (_name.length < 3) {
      throw new Error(
        "Precisa de 3 caracteres no nome seu MERDA! Sim Vc está sendo chamado de merda no terminal")
  }
}

  getName(): string {
    return this._name;
  }

  setName(name: string) {
    if (name.length < 3) {
      throw new Error(
        "Precisa de 3 caracteres no nome seu MERDA! Sim Vc está sendo chamado de merda no terminal"
      );
    }
    this._name = name;
  }
}
