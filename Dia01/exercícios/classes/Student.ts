class Student {
  private _matricula: number;
  private _nome: string;
  private _notasDeProva: number[];
  private _notasDeTrabalho: number[];

  constructor(
    matricula: number,
    nome: string,
    notasDeProva: number[],
    notasDeTrabalho: number[]
    ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasDeProva = notasDeProva;
    this._notasDeTrabalho = notasDeTrabalho;
  }

  getatricula(): number {
    return this._matricula;
  }

  //nome-----------------
  getNome(): string {
    return this._nome;
  }

  setNome(value: string) {
    if (value.length < 4) {
      throw new Error("O Nome precisa de pelo menos 4 dígitos");
    }
    this._nome = value;
  }
  //NotasDeProva-----------------
  getNotasDeProva(): number[] {
    return this._notasDeProva;
  }

  setNotasDeProva(value: number[]) {
    if (value.length !== 4) {
      throw new Error("você precisa enviar 4 notas");
    }
    this._notasDeProva;
  }
  //NotasdeTrabalho-----------------
  getNotasDeTrabalho(): number[] {
    return this._notasDeTrabalho;
  }

  setNotasDeTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error("Você precisa de exatamente 2 notas");
    }
    this._notasDeTrabalho = value;
  }

  getSomaTodasNotas(): number {
    const todasAsnotas = [...this._notasDeProva, ...this._notasDeTrabalho]
    return todasAsnotas.reduce((acc, curr) => {
      return acc + curr
    }, 0)
  }

  getMediaDasNotas(): number{
    const somaDasNotas = this.getSomaTodasNotas()
    return somaDasNotas / 6
  }
}

export default Student;
