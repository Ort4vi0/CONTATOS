import { LimparTela } from "../Contatos.js";
import { prompt, Voltar } from "../dep/dependencias.js";
import { Contatos, contatos, DBMASTER, salvarDados } from "../dep/salvar.js";
import { listarContatos2 } from "./listar.js";

export function RemoverContato() {
  LimparTela();
  if (contatos.length <= 0) {
    console.log("Não há contatos a serem removidos"); // SAIDA
    Voltar();
  } else {
    listarContatos2();
    const INPIDDELETE = prompt("Digte o ID do Contato que deseja remover: "); //ENTRADA
    const idParaDeletar = parseInt(INPIDDELETE, 10);
    if (isNaN(idParaDeletar)) {
      console.log("Por favor, digite um ID válido."); // SAIDA
      Voltar();
    }
    const TamanhoInicio = contatos.length
    const novosContatos = contatos.filter((contato) => contato.ID !== idParaDeletar)
    Contatos(novosContatos);
    if(contatos.length < TamanhoInicio){
        LimparTela()
        console.log(`Contato de ID ${idParaDeletar} deletado com sucesso`) // SAIDA
    } else {
        LimparTela()
        console.log("Contato não encontrado") // SAIDA
    }
    salvarDados(DBMASTER, contatos, () =>{
        Voltar()
    })
  }
}
