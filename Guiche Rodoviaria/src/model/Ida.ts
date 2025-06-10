import { Passagem } from "./Passagem";
export class Ida extends Passagem {
  private _destinoIda: string;
  private _precoIda: number;

  constructor(numero: number, nome: string, cpf: number, contato: number) {
    super(numero, nome, cpf, contato);
    this._destinoIda = "Praia Grande";
    this._precoIda = 31.5;
  }
  visualizar() {
    console.log(`Nº da passagem ${this.numero}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Contato: ${this.contato}`);
    console.log(`Contato: ${this._destinoIda}`);
    console.log(`Contato: ${this._precoIda}`);
  }
}
