// Criando funções para tratamento de erros.
// Preciso exportar essa função. No Fim do arquivo chamar o module.exports

export default function trataErros(erro){
    if(erro.code === 'ENOENT') {
        throw new Error('Arquivo ou diretório não encontrado.');
    }else {
        return 'Erro não tratado.'
    }
}    

