import { LimparTela } from "../Contatos.js";
import { contatos, DBMASTER, salvarDados } from "../dep/salvar.js";
import { eUmNumero, FormatarTelefone, prompt, Voltar } from "../dep/dependencias.js";

export function AdicionarContato() {
  console.log("=== Adicione um Contato ===");

  const Nome = prompt("Qual o nome do contato?: "); // Armazena o nome do contato digitado pelo usuário.

  if (Nome.trim() === '') {
    console.log("Você não inseriu um nome. Por favor, tente novamente.");
    Voltar();
    return;
  }

  if (eUmNumero(Nome)) {
    console.log("Você inseriu um número para o nome. Deseja salvar mesmo assim?");
    let verificar1 = prompt("(s/n): ");
    verificar1 = verificar1.toLowerCase();
    
    if (verificar1 !== "s" && verificar1 !== "sim") { //Armazena a resposta do usuário (s/n) quando um nome inserido parece ser um número.
      console.log("Operação cancelada.");
      Voltar();
      return;r
    }
  }
  
  const Numero = prompt("Qual o numero do contato? (10 ou 11 NUMEROS): "); //Armazena o número de telefone do contato.
  if (isNaN(Numero) || Numero.length < 10 || Numero.length > 11) {
    LimparTela()
    console.log("Voce Inseriu um numero INVALIDO...") // SAIDA
    Voltar()
    return;
  }
  const TelefoneFormatado = FormatarTelefone(Numero); //Guarda o número de telefone após a formatação, como (XX) XXXXX-XXXX.
  
  const Email = prompt("Qual o e-mail do contato?: "); //Armazena o e-mail do contato.

  const contato = { //    Objeto temporário que armazena todas as informações de um contato antes de ser adicionado à lista global.
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