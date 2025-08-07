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
    const INPIDDELETE = prompt("Digte o ID do Contato que deseja remover: "); //ENTRADA //Armazena o ID do contato a ser removido, como uma string.
    const idParaDeletar = parseInt(INPIDDELETE, 10); // O ID do contato após a conversão para número inteiro.
    if (isNaN(idParaDeletar)) {
      console.log("Por favor, digite um ID válido."); // SAIDA
      Voltar();
    }
    const TamanhoInicio = contatos.length //O número de contatos na lista antes da remoção, usado para verificar se a operação foi bem-sucedida.
    const novosContatos = contatos.filter((contato) => contato.ID !== idParaDeletar) //Uma nova lista de contatos que exclui o item com o ID a ser deletado.
    const VDELETE2 = prompt(`Deseja mesmo deletar o contato de ID: ${INPIDDELETE}? (s/n)`) // ENTRADA //Uma nova lista de contatos que exclui o item com o ID a ser deletado.
    const VDELETE = VDELETE2.toLowerCase() //A resposta de confirmação após ser convertida para letras minúsculas.
    if(VDELETE == "s" || VDELETE == "sim"){
      Contatos(novosContatos)
    } else {
      console.log("Remoção ABORTADA") // SAIDA
      Voltar()
    }
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
