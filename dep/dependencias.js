import PromptSync from "prompt-sync";
import { Menu } from "../Contatos.js";
export const prompt = PromptSync({ sigint: true });

export function Voltar(){
    prompt("Aperte ENTER para Voltar ao MENU...");
    Menu()
}