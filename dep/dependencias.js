import PromptSync from "prompt-sync";
import { Menu } from "../Contatos.js";
export const prompt = PromptSync({ sigint: true });

export function Voltar(){
    prompt("Aperte ENTER para Voltar ao MENU...");
    Menu()
}

export function FormatarTelefone(numero){
    const digitos = numero.replace(/\D/g, '');
    if (digitos.length === 11) {
            return `(${digitos.substring(0, 2)}) ${digitos.substring(2, 7)}-${digitos.substring(7)}`;
        }
        else if (digitos.length === 10) {
            return `(${digitos.substring(0, 2)}) ${digitos.substring(2, 6)}-${digitos.substring(6)}`;
        }
        return numero;
}