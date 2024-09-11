import fs from 'fs'; // Manipulação de arquivos
// Importando minha função para tratamento de erro.
//const trataErro = require('./erros/funcoesErro') Método antigo de importação, nativo do Node.
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
const caminho = process.argv; // Montando um Array de processos do terminal
const link = caminho[2];
fs.readFile('arquivos/texto-web.txt','utf-8',(error,texto) => {
    if(error) throw error;
    try{
        if(error) throw error;
    contaPalavras(texto);}
    catch(error){
        console.log(trataErro(error));
        

    }});


