import { Passagem } from "./Passagem";
export class Volta extends Passagem {
  private _destinoVolta: string;
  private _precoVolta: number;

  constructor(numero: number, nome: string, cpf: number, contato: number) {
    super(numero, nome, cpf, contato);
    this._destinoVolta = "Itaquera";
    this._precoVolta = 25.9;
  }
  public get precoVolta() {
    return this._precoVolta;
  }

  public set precoVolta(precoVolta: number) {
    this._precoVolta = precoVolta;
  }

  public get destinoVolta() {
    return this._destinoVolta;
  }

  public set destinoVolta(destinoVolta: string) {
    this._destinoVolta = destinoVolta;
  }
}
