// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - assignmentsGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from "./Person";

class Student extends Person {
  private _matricula: number;
  private _notasDeProva: number[] = [];
  private _notasDeTrabalho: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._matricula = this.gerarMatricula()
  }

  getMatricula(): number {
    return this._matricula;
  }

  gerarMatricula(): number{
    return Math.floor(Math.random() * 10000) + 1;
  }


  //NotasDeProva-----------------
  getNotasDeProva(): number[] {
    return this._notasDeProva;
  }

  setNotasDeProva(value: number[]) {
    if (value.length !== 4) {
      throw new Error("você precisa enviar 4 notas");
    }
    this._notasDeProva = value;
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
    const todasAsnotas = [...this._notasDeProva, ...this._notasDeTrabalho];
    return todasAsnotas.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  getMediaDasNotas(): number {
    const somaDasNotas = this.getSomaTodasNotas();
    return somaDasNotas / 6;
  }
}

export default Student;
