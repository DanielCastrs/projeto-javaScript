import leia from "readline-sync";

export function main() {
  let opcao: number;
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

    //Inserir opção
    console.log("Entre com a opção desejada: ");
    opcao = leia.questionInt("");

    //Caso a opção seja cancelar operação de primeira
    if (opcao == 6) {
      console.log("\nFretBus Agradece sua preferencia, volte sempre");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\nCompra de Passagem");
        break;
      case 2:
        console.log("\nConsultar passagem");
        break;
      case 3:
        console.log("Atualizar Dados");
        break;
      case 4:
        console.log("Cancelar Compra");
        break;
      case 5:
        console.log("Visualizar acentos disponiveis");
        break;
      case 6:
        console.log("Cancelar Operação");
        break;
      default:
        console.log("Opção invalida");
        break;
    }
  }
}

main();
