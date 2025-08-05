import { LimparTela } from "../Contatos.js";
import { prompt, Voltar } from "../dep/dependencias.js";
import { Contatos, contatos, DBMASTER, salvarDados } from "../dep/salvar.js";
import { listarContatosDeletar } from "./listar.js";

export function RemoverContato() {
  LimparTela();
  if (contatos.length <= 0) {
    console.log("Não há contatos a serem removidos");
    prompt("Pressione ENTER para Retornar...");
    Voltar();
  } else {
    listarContatosDeletar();
    const INPIDDELETE = prompt("Digte o ID do Contato que deseja remover: ");
    const idParaDeletar = parseInt(INPIDDELETE, 10);
    if (isNaN(idParaDeletar)) {
      console.log("Por favor, digite um ID válido.");
      Voltar();
    }
    const TamanhoInicio = contatos.length
    const novosContatos = contatos.filter((contato) => contato.ID !== idParaDeletar)
    Contatos(novosContatos);
    if(contatos.length < TamanhoInicio){
        LimparTela()
        console.log(`Contato de ID ${idParaDeletar} deletado com sucesso`)
    } else {
        LimparTela()
        console.log("Contato não encontrado")
    }
    salvarDados(DBMASTER, contatos, () =>{
        Voltar()
    })
  }
}
