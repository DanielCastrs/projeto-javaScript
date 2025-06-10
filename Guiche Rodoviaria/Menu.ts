import leia from "readline-sync";
import { Ida } from "./src/model/Ida";
import { Volta } from "./src/model/volta";
import { PassagemController } from "./src/controller/PassagemController";

// const passagem: Ida = new Ida(1, "Daniel", 123, 987366959);
// passagem.visualizar();

export function main() {
  //Instancia da classe PassagemController
  let passagens: PassagemController = new PassagemController();
  //variaveis auxiliar
  let opcao, numero, cpf, contato, credito, destino: number;
  let nome: string;

  //Visualização do menu
  while (true) {
    console.log("*****************************************************");
    console.log("                MENU GUICHE RODOVIARIO               ");
    console.log("*****************************************************");
    console.log("            1 - Comprar Passagem                     ");
    console.log("            2 - Consultar Passagem                   ");
    console.log("            3 - Atualizar Dados                      ");
    console.log("            4 - Cancelar Compra                      ");
    console.log("            5 - Visualizar acentos disponiveis       ");
    console.log("            6 - Cancelar Operação                    ");
    console.log("*****************************************************");

    //Inserir opção
    console.log("Entre com a opção desejada: ");
    opcao = leia.questionInt("");

    //Caso a opção seja cancelar operação de primeira
    if (opcao == 6) {
      console.log("\nFretBus Agradece sua preferencia, volte sempre");
      sobre();
      process.exit(0);
    }
    let val = false;
    switch (opcao) {
      case 1:
        console.log("\nCompra de Passagem");
        do {
          destino = leia.questionInt(
            "Digite 1 para Ida(praia Grande)\nou\n2 para Volta(Itaquera)"
          );
          if (destino == 1 || destino == 2) {
            val = false;
          } else {
            val = true;
          }
        } while (val);
        switch (destino) {
          case 1:
            console.log("ida");
            nome = leia.question("insira seu nome");
            cpf = leia.questionInt("insira seu CPF sem caracter especial.");
            contato = leia.questionInt(
              "insira seu Telefone sem caracter especial."
            );
            passagens.comprarPass(
              new Ida(passagens.gerarNumero(), nome, cpf, contato)
            );
            break;
          case 2:
            console.log("Volta");
            nome = leia.question("insira seu nome: ");
            cpf = leia.questionInt("insira seu CPF sem caracter especial: ");
            contato = leia.questionInt(
              "insira seu Telefone sem caracter especial: "
            );
            passagens.comprarPass(
              new Volta(passagens.gerarNumero(), nome, cpf, contato)
            );
            break;
          default:
            console.log("Opção invalida");
            break;
        }
        break;
      case 2:
        console.log("\n\nConsultar dados da Passagem - por número\n\n");
        console.log("Digite o número da Passagem");
        numero = leia.questionInt("");
        passagens.consultarPass(numero);
        break;
      case 3:
        console.log("Atualizar Dados");
        break;
      case 4:
        console.log("Cancelar Compra");
        break;
      case 5:
        console.log("Visualizar acentos disponiveis");
        do {
          destino = leia.questionInt(
            "Digite 1 para Ida(praia Grande)\nou\n2 para Volta(Itaquera)"
          );
          if (destino == 1 || destino == 2) {
            val = false;
          } else {
            val = true;
          }
        } while (val);
        switch (destino) {
          case 1:
            console.log("ida");
            passagens.disponivel();
            break;
          case 2:
            console.log("Volta");
            passagens.disponivel();
            break;
          default:
            console.log("Opção invalida");
            break;
        }
        break;
      default:
        console.log("Opção invalida");
        break;
    }
  }
}
/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Daniel Castro de Souza");
  console.log("Generation Brasil - generation@generation.org");
  console.log("https://github.com/DanielCastrs");
  console.log("*****************************************************");
}
main();
