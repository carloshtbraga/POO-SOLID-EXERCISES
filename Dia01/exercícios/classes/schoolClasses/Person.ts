// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

class Person {
  constructor(private _name: string, private _birthdate: Date) {
    this.validatePerson();
  }

  getName(): string {
    return this._name;
  }

  setName(name: string) {
    this.validateName(name);
    this._name = name;
  }

  getBirthDate(): Date {
    return this._birthdate;
  }

  setBirthDate(date: Date) {
    this.ValidadeBirthDate(date);
    this._birthdate = date;
  }

  private validateName(name: string) {
    if (name.length < 3) {
      throw new Error("O nome deve conter 3 caracteres no minimo");
    }
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yMs = 31_536_000_000;
    return Math.floor(diff / yMs);
  }

  private ValidadeBirthDate(date: Date) {
    if (date.getTime() > new Date().getTime()) {
      throw new Error("A data de nascimento não pode ser data no futuro");
    }
    if (Person.getAge(date) > 120) {
      throw new Error("a pessoa não pode ter mais de 120 anos");
    }
  }

  private validatePerson() {
    this.validateName(this._name);
    this.ValidadeBirthDate(this._birthdate);
  }
}

export default Person;
