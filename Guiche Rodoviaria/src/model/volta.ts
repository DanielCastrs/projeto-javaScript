import { Passagem } from "./Passagem";
export class Volta extends Passagem {
  private _destinoVolta: string;
  private _precoVolta: number;

  constructor(numero: number, nome: string, cpf: number, contato: number) {
    super(numero, nome, cpf, contato);
    this._destinoVolta = "Itaquera";
    this._precoVolta = 25.9;
  }
}
