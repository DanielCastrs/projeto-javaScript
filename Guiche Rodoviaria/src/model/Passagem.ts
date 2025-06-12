export abstract class Passagem {
  private _numero: number;
  private _nome: string;
  private _cpf: number;
  private _contato: number;

  constructor(numero: number, nome: string, cpf: number, contato: number) {
    this._numero = numero;
    this._nome = nome;
    this._cpf = cpf;
    this._contato = contato;
  }

  public get numero() {
    return this._numero;
  }
  public get nome() {
    return this._nome;
  }
  public get cpf() {
    return this._cpf;
  }
  public get contato() {
    return this._contato;
  }
  public set numero(numero: number) {
    this._numero = numero;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public set cpf(cpf: number) {
    this._cpf = cpf;
  }
  public set contato(contato: number) {
    this._contato = contato;
  }

  visualizar() {
    console.log("*****************************");
    console.log(`Nº da passagem ${this.numero}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Contato: ${this.contato}`);
    // console.log(`Contato: ${this._destinoIda}`);
    // console.log(`Contato: ${this._precoIda}`);
  }
}
