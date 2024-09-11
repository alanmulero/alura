// Contar número de palavras repetidas em um texto.


const resultado = {};  // object[propriedade] = valor. Para apresentar o resultado.

// To do:
/*
1 - Criar um Array de palavras.
2 - Criar as ocorrências das palavras.
3 - Quebrar os parágrafos.
4 - Disponibilizar resultado em um object
*/

    


// Criando uma função mais abrangente, ponto de entrada.
// Vai ser a unica função dentro do readFile.
export function contaPalavras(texto){
    const paragrafo = extraiParagrafos(texto);
    const contagem = paragrafo.flatMap(paragrafo =>{
        if(!paragrafo) return [];
        return verificaEContaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem); // Apresentando texto formatado.

}

// Refatorando quebraParagrafos()
function extraiParagrafos(texto){
    return  texto.toLowerCase().split('\n'); 

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
console.log('Programa chegou ao fim.');

