import { LimparTela } from "../Contatos.js";
import { Voltar } from "../dep/dependencias.js";
import { contatos } from "../dep/salvar.js";

export function listarContatos() {
  LimparTela()
  console.log("=".repeat(25) + " LISTA ATUAL " + "=".repeat(25))
  contatos.forEach((contato) => {
    console.log(`ID: ${contato.ID} | Nome: ${contato.Nome} | Telefone: ${contato.Numero} | Email: ${contato.Email}`);
  });
  console.log(`Contatos Atuais: ${contatos.length}` + "\n" + "=".repeat(63))
  Voltar()
}

export function listarContatosDeletar() {
  LimparTela()
  console.log("=".repeat(25) + " LISTA ATUAL " + "=".repeat(25))
  contatos.forEach((contato) => {
    console.log(`ID: ${contato.ID} | Nome: ${contato.Nome} | Telefone: ${contato.Numero} | Email: ${contato.Email}`);
  });
  console.log(`Contatos Atuais: ${contatos.length}` + "\n" + "=".repeat(63))
}