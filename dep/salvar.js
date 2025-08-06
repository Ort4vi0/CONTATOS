import fs from 'fs';
export let contatos = [];
export const DBMASTER = "contatos.json";

export function Contatos(novosContatos) {
    contatos = novosContatos;
}

export function salvarDados(nomeArquivo, dados, callback) {
    const jsonString = JSON.stringify(dados, null, 2);
    fs.writeFile(nomeArquivo, jsonString, (err) => {
      if (err) {
        console.log(`Erro ao salvar o arquivo '${nomeArquivo}':`, err);
      } else {
        //console.log(`Dados de '${nomeArquivo}' salvos com sucesso!`);
      }
      if (callback) callback();
    });
  }

export function carregarDados(nomeArquivo, callback) {
    fs.readFile(nomeArquivo, "utf8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.log(
            `Arquivo '${nomeArquivo}' não encontrado. Iniciando com uma lista vazia.`
          ); // SAIDA
          callback([]);
        } else {
          console.log(`Erro ao carregar o arquivo '${nomeArquivo}':`, err);
          callback([]); // SAIDA
        }
        return;
      }

      try {
        const dados = JSON.parse(data);
        console.log(`Dados de '${nomeArquivo}' carregados com sucesso.`);
        callback(dados);
      } catch (parseErr) {
        console.log(
          `Erro ao analisar o JSON do arquivo '${nomeArquivo}':`,
          parseErr // SAIDA
        );
        callback([]);
      }
    });
  }