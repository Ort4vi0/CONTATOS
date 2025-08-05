import { LimparTela } from "../Contatos.js";
import { prompt, FormatarTelefone, Voltar } from "../dep/dependencias.js";
import { contatos, DBMASTER, salvarDados } from "../dep/salvar.js";
import { listarContatos2 } from "./listar.js";

export function AtualizarContato() {
    if (contatos.length <= 0) {
        LimparTela()
        console.log("Nenhum contato está cadastrado!!");
        Voltar();
        return;
    }

    listarContatos2()
    let INPEDIT = prompt("Qual contato deseja EDITAR?: ")
    INPEDIT = parseInt(INPEDIT, 10)
    const indice = INPEDIT - 1
    if (isNaN(INPEDIT) || indice < 0 || indice > contatos.length) {
        console.log("Foi inserido um ID invalido..")
        Voltar();
        return;
    } else {
        const FiltroContato = contatos[indice]

        const NovoNome = prompt(`Insira um novo NOME para o CONTATO (ou deixe em branco para manter) Nome Atual: ${FiltroContato.Nome} | Novo Nome: `)
        const NovoNumero = prompt(`Digite um novo NUMERO para o CONTATO (ou deixe em branco para manter) Numero Atual: ${FiltroContato.Numero} | Novo Numero: `)
        const NovoEmail = prompt(`Digite um nono EMAIL para o CONTATO (ou deixe em branco para manter) Email Atual:${FiltroContato.Email} | Novo Email: `)

        if (NovoNome.trim() !== '') {
            FiltroContato.Nome = NovoNome;
        }
        if (NovoNumero.trim() !== '') {
            FiltroContato.Numero = FormatarTelefone(NovoNumero);
        }
        if (NovoEmail.trim() !== '') {
            FiltroContato.Email = NovoEmail;
        }

        const Confirmar = prompt("Deseja Salvar a edicao?: (s/n)")

        if(Confirmar == "s" || Confirmar == "sim"){
            SalvarEdicao()
        } else {
            console.log("Edicao CANCELADA")
            Voltar()
            return;
        }
        
        function SalvarEdicao(){
            salvarDados(DBMASTER, contatos, () => {
            LimparTela();
            console.log("Contato atualizado com sucesso!");
            console.log("----------------------------");
            console.log(`Nome: ${FiltroContato.Nome}`);
            console.log(`Número: ${FiltroContato.Numero}`);
            console.log(`Email: ${FiltroContato.Email}`);
            console.log("----------------------------");
            Voltar()
            })
        }
    }

}