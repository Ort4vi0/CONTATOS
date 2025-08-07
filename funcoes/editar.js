import { LimparTela } from "../Contatos.js";
import { prompt, FormatarTelefone, Voltar } from "../dep/dependencias.js";
import { contatos, DBMASTER, salvarDados } from "../dep/salvar.js";
import { listarContatos2 } from "./listar.js";

export function AtualizarContato() {
    if (contatos.length <= 0) {
        LimparTela()
        console.log("Nenhum contato está cadastrado!!"); // SAIDA
        Voltar();
        return;
    }

    listarContatos2()
    let INPEDIT = prompt("Qual contato deseja EDITAR?: ") //ENTRADA //Armazena o ID do contato que o usuário deseja editar, como uma string.
    INPEDIT = parseInt(INPEDIT, 10)
    const indice = INPEDIT - 1 //O índice na lista de contatos que corresponde ao ID inserido.
    if (isNaN(INPEDIT) || indice < 0 || indice > contatos.length) {
        console.log("Foi inserido um ID invalido..") // SAIDA
        Voltar();
        return;
    } else {
        const FiltroContato = contatos[indice] // objeto do contato selecionado para edição.

        const NovoNome = prompt(`Insira um novo NOME para o CONTATO (ou deixe em branco para manter) Nome Atual: ${FiltroContato.Nome} | Novo Nome: `) //ENTRADA // O novo nome digitado pelo usuário.
        const NovoNumero = prompt(`Digite um novo NUMERO para o CONTATO (ou deixe em branco para manter) Numero Atual: ${FiltroContato.Numero} | Novo Numero: `) //ENTRADA //O novo número de telefone digitado pelo usuário.
        const NovoEmail = prompt(`Digite um nono EMAIL para o CONTATO (ou deixe em branco para manter) Email Atual:${FiltroContato.Email} | Novo Email: `) //ENTRADA //O novo e-mail digitado pelo usuário.

        if (NovoNome.trim() !== '') {
            FiltroContato.Nome = NovoNome;
        }
        if (NovoNumero.trim() !== '') {
            FiltroContato.Numero = FormatarTelefone(NovoNumero);
        }
        if (NovoEmail.trim() !== '') {
            FiltroContato.Email = NovoEmail;
        }

        const Confirmar2 = prompt("Deseja Salvar a edicao?: (s/n)") //ENTRADA //A resposta inicial do usuário (s/n) para confirmar a edição.
        const Confirmar = Confirmar2.toLowerCase() //A resposta de confirmação após ser convertida para letras minúsculas.
        if(Confirmar == "s" || Confirmar == "sim"){
            SalvarEdicao()
        } else {
            console.log("Edicao CANCELADA") // SAIDA
            Voltar()
            return;
        }
        
        function SalvarEdicao(){
            salvarDados(DBMASTER, contatos, () => {
            LimparTela();
            console.log("Contato atualizado com sucesso!"); // SAIDA
            console.log("----------------------------"); // SAIDA
            console.log(`Nome: ${FiltroContato.Nome}`); // SAIDA
            console.log(`Número: ${FiltroContato.Numero}`); // SAIDA
            console.log(`Email: ${FiltroContato.Email}`); // SAIDA
            console.log("----------------------------"); // SAIDA
            Voltar()
            })
        }
    }

}