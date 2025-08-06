import { LimparTela } from "../Contatos.js";
import { contatos, DBMASTER, salvarDados } from "../dep/salvar.js";
import { eUmNumero, FormatarTelefone, prompt, Voltar } from "../dep/dependencias.js";

export function AdicionarContato() {
  console.log("=== Adicione um Contato ===");

  const Nome = prompt("Qual o nome do contato?: ");

  if (Nome.trim() === '') {
    console.log("Você não inseriu um nome. Por favor, tente novamente.");
    Voltar();
    return;
  }

  if (eUmNumero(Nome)) {
    console.log("Você inseriu um número para o nome. Deseja salvar mesmo assim?");
    let verificar1 = prompt("(s/n): ");
    verificar1 = verificar1.toLowerCase();
    
    if (verificar1 !== "s" && verificar1 !== "sim") {
      console.log("Operação cancelada.");
      Voltar();
      return;r
    }
  }
  
  const Numero = prompt("Qual o numero do contato? (10 ou 11 NUMEROS): ");
  if (isNaN(Numero) || Numero.length < 10 || Numero.length > 11) {
    LimparTela()
    console.log("Voce Inseriu um numero INVALIDO...") // SAIDA
    Voltar()
    return;
  }
  const TelefoneFormatado = FormatarTelefone(Numero);
  
  const Email = prompt("Qual o e-mail do contato?: ");

  const contato = {
    ID: contatos.length + 1,
    Nome: Nome,
    Numero: TelefoneFormatado,
    Email: Email,
  };

  contatos.push(contato);

  salvarDados(DBMASTER, contatos, () => {
    LimparTela();
    console.log("Contato salvo com sucesso!");
    console.log("=".repeat(60));
    console.log(`Informações: Nome: ${Nome} | Numero: ${TelefoneFormatado} | Email: ${Email}`);
    console.log("=".repeat(60));
    Voltar();
  });
}