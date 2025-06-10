import { Passagem } from "../model/Passagem";
import { PassagemRepository } from "../repository/PassagemRepository";

export class PassagemController implements PassagemRepository {
  private listaPassagem: Array<Passagem> = new Array<Passagem>();
  numero: number = 0;

  comprarPass(passagem: Passagem): void {
    this.listaPassagem.push(passagem);
    console.log("\nA Conta: " + passagem.numero + " foi compada com sucesso");
  }
  consultarPass(numero: number): void {
    let buscarPassagem = this.buscarNoArray(numero);
    if (buscarPassagem != null) {
      buscarPassagem.visualizar();
    } else {
      console.log("\nA Conta numero: " + numero + "não foi encontrada! ");
    }
  }
  atualizarDados(passagem: Passagem): void {
    let buscarPassagem = this.buscarNoArray(passagem.numero);
    if (buscarPassagem != null) {
      this.listaPassagem[this.listaPassagem.indexOf(buscarPassagem)] = passagem;
      console.log(
        "\nA Passagem numero: " +
          passagem.numero +
          " Foi atualizada com sucesso"
      );
    }
  }
  cancelarPass(numero: number): void {
    let buscarPassagem = this.buscarNoArray(numero);

    if (buscarPassagem != null) {
      this.listaPassagem.splice(this.listaPassagem.indexOf(buscarPassagem), 1);
      console.log("\nA Conta numero: " + numero + " foi apagada com sucesso!");
    } else {
      console.log("\nA Conta numero: " + numero + " Não foi encontrada!");
    }
  }
  disponivel(): void {
    console.log(40 - this.numero);
    // for (let passagem of this.listaPassagem) {
    //   passagem.visualizar();
    // }
  }

  //metodo auxiliares
  //gerar numero de conta
  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Passagem | null {
    for (let passagem of this.listaPassagem) {
      if (passagem.numero === numero) return passagem;
    }
    return null;
  }
}
