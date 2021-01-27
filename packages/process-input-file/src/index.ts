import { mongo } from './config';

function start() {
  console.info('🚀: microservice started');

  // mongoose:   fazer um loop de busca no banco por files não processados
  // mongoose:   pegar o caminho do file no sistema
  // jsonstream: ler o file gradualmente
  // mongoose:   criar phrases a partir dos conteudos do arquivo
  // mongoose:   atualizar o documento do file indicando que foi processado
}

start();
