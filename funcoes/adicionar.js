import { LimparTela } from "../Contatos.js";
import { contatos, DBMASTER, salvarDados } from "../dep/salvar.js";
import { FormatarTelefone, prompt, Voltar } from "../dep/dependencias.js";

export function AdicionarContato() {
  console.log("=== Adicione um Contato ===");
  const Nome = prompt("Qual o nome do contato?: ");
  const Numero = prompt("Qual o numero do contato? (10 ou 11 NUMEROS): ");
  if (isNaN(Numero) || Numero.length < 10 || Numero.length > 11) {
    LimparTela()
    console.log("Voce Inseriu um numero INVALIDO...")
    Voltar()
    return;
  } else {
    const TelefoneFormatado = FormatarTelefone(Numero)
    const Email = prompt("Qual o e-mail do contato?: ");
    const contato = {
      ID: contatos.length + 1,
      Nome: Nome,
      Numero: TelefoneFormatado,
      Email: Email,
    };
    console.log("=".repeat(60))
    contatos.push(contato);
    salvarDados(DBMASTER, contatos, () => {
      //console.log("Contato salvo com sucesso!!");
      console.log(`Informações: Nome: ${Nome} Numero: ${TelefoneFormatado} Email: ${Email}\n` + "=".repeat(60));
      Voltar()
    });
  }
}
