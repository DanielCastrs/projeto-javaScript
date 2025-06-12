import { Passagem } from "./Passagem";
export class Ida extends Passagem {
  private _destinoIda: string;
  private _precoIda: number;

  constructor(numero: number, nome: string, cpf: number, contato: number) {
    super(numero, nome, cpf, contato);
    this._destinoIda = "Praia Grande";
    this._precoIda = 25;
  }

  public get detinoIda() {
    return this._destinoIda;
  }

  public set destinoIda(destinoIda: string) {
    this.destinoIda = destinoIda;
  }

  public get precoIda() {
    return this._precoIda;
  }

  public set precoIda(precoIda: number) {
    this._precoIda = precoIda;
  }
  valorPass(): void {
    console.log(`Preço da passagem ${this._destinoIda}`);
  }
  visualiza() {
    super.visualizar();
    console.log("Destino: " + this.destinoIda + "\nPreço: " + this.precoIda);
  }
}
