import { Passagem } from "../model/Passagem";

export interface PassagemRepository {
  //CRUD
  comprarPass(passagem: Passagem): void;
  consultarPass(numero: number): void;
  atualizarDados(passagem: Passagem): void;
  cancelarPass(numero: number): void;
  disponivel(): void;
}
