import { LimparTela } from "../Contatos.js";
import { Voltar } from "../dep/dependencias.js";
import { contatos } from "../dep/salvar.js";

export function listarContatos() {
  LimparTela()
  console.log("=".repeat(25) + " LISTA ATUAL " + "=".repeat(25)) // SAIIDA
  contatos.forEach((contato) => {
    console.log(`ID: ${contato.ID} | Nome: ${contato.Nome} | Telefone: ${contato.Numero} | Email: ${contato.Email}`);
  }); // SAIIDA
  console.log(`Contatos Atuais: ${contatos.length}` + "\n" + "=".repeat(63)) // SAIIDA
  Voltar()
}

export function listarContatos2() {
  LimparTela()
  console.log("=".repeat(25) + " LISTA ATUAL " + "=".repeat(25)) // SAIIDA
  contatos.forEach((contato) => {
    console.log(`ID: ${contato.ID} | Nome: ${contato.Nome} | Telefone: ${contato.Numero} | Email: ${contato.Email}`); // SAIIDA
  });
  console.log(`Contatos Atuais: ${contatos.length}` + "\n" + "=".repeat(63)) // SAIIDA
}