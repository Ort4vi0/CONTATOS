let contatos = [
    {
        id: 1, nome: 'Alice', telefone: '1234-5678', email:
            'alice@example.com'
    },
    {
        id: 2, nome: 'Bob', telefone: '8765-4321', email:
            'bob@example.com'
    },
    {
        id: 3, nome: 'Carol', telefone: '5678-1234', email:
            'carol@example.com'
    }
];// Cria uma variavel chamada contatos onde armazena uma ARAY(lista) com OBJETOS DENTRO onde cada objeto tem seu ID, NOME, TELEFONE e EMAIL de algumas pessoas


function listarContatos() {
contatos.forEach(contato => 
    { console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);}); // Pode ser considerado uma saida
} // Função onde usando o ForEach crua uma variavel temporaria denoiminada contato percorrendo a array contatos, listando cada um dos objetos (os contatos em si) formatando as informações para melhor exibição

listarContatos(); // Inicia a Funcao listarContatos (funcoes só iniciam se chamadas no codigo)