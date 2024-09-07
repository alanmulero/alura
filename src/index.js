// Contar número de palavras repetidas em um texto.
const fs = require('fs'); // Manipulação de arquivos
const caminho = process.argv; // Montando um Array de processos do terminal
const link = caminho[2];
const resultado = {};  // object[propriedade] = valor; Para apresentar o resultado.

// To do:
/*
1 - Criar um Array de palavras.
2 - Criar as ocorrência das palavras.
3 - Quebrar os paragrafos.
4 - Disponibilizae resultado em um object
*/
fs.readFile(link,'utf-8',(error,texto) => {
    // chamando outa funçao
    quebraEmParagrafo(texto);
    
});
// Quebrando em Paragrafos.
function quebraEmParagrafo(texto){
    const paragrafo = texto.toLowerCase().split('\n'); // Retornando um Array com paragrafos separados.
    // Filtrando strings fazias.
    const contagem = paragrafo.flatMap(paragrafo =>{
        if(!paragrafo) return [];
        return verificaEContaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem); // Apresentando texto formatado.
}

//Suprimindo caracteres especiais:
function limpaPalavras(palavra){
    // Metodo de string para substituir palavras.
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

// Criando uma funçaõ para verificar palavras duplicadas.
function verificaEContaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    listaPalavras.forEach((element,index) => {
        if (element.length >= 3){
        const palavraLimpa = limpaPalavras(element);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;}
    });
    return resultado;
    
}