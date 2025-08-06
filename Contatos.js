import { listarContatos } from "./funcoes/listar.js";
import { AdicionarContato } from "./funcoes/adicionar.js";
import { RemoverContato } from "./funcoes/remover.js";
import { AtualizarContato } from "./funcoes/editar.js";
import { prompt } from "./dep/dependencias.js";
import { carregarDados, DBMASTER, Contatos } from "./dep/salvar.js";
export function LimparTela() {
  console.clear();
}
export function Menu() {
  LimparTela();
  console.log("==== BEM VINDO(A) AO GERENCIAMENTO DE CONTATOS ==="); // SAIDA
  console.log(
    "Escolha uma das opcoes abaixo:\n 1 - Adicionar Contato\n 2 - Listar Contato(s)\n 3 - Remover Contato(s)\n 4 - Atualizar contato(s)\n 0 - Encerrar"
  ); // SAIDA
  const Escolha1 = prompt("> "); // ENTRADA
  const Escolha = Escolha1.trim()
  switch (Escolha) {
    case "1":
      LimparTela();
      AdicionarContato();
      break;
    case "2":
      listarContatos();
      break;
    case "3":
      RemoverContato()
      break;
    case "4":
      AtualizarContato()
      break;
    case "0":
      process.exit()
    default:
      console.log("Digite uma opção válida"); // SAIDA
      return Menu();
  }
}

export function Iniciar() {
  console.log("Iniciando o sistema..."); // SAIDA
  carregarDados(DBMASTER, (torneiodata) => {
    Contatos(torneiodata);
    Menu();
  });
}

Iniciar()