# Jogo de "Adivinhação "do Time de Futebol !

Este projeto é um jogo interativo que tenta adivinhar qual time de futebol da primeira divisão brasileira o usuário está pensando, com base em uma série de perguntas. As imagens dos times são exibidas na parte superior da página, e o jogo utiliza uma série de perguntas para filtrar as opções e chegar a um resultado.

## Estrutura do Projeto

- **times**: Uma lista dos times da primeira divisão brasileira, onde cada time possui uma imagem correspondente na pasta `imagens`. Os nomes das imagens devem seguir o padrão `nome-do-time.png` (exemplo: `vasco-da-gama.png`).

- **perguntas**: Um array de objetos que contém as perguntas a serem feitas ao usuário. Cada objeto possui a pergunta e os times associados às respostas "sim" e "não".

## Funções Principais

- **carregarImagensDosTimes**: Esta função é responsável por carregar as imagens dos times e exibi-las no contêiner da página.

- **fazerPergunta**: Controla a lógica do jogo, exibindo as perguntas uma a uma até que um resultado seja alcançado ou não haja mais perguntas.

- **responder**: Trata as respostas do usuário (sim/não) e filtra a lista de times de acordo com as respostas.

- **exibirResultado**: Exibe o resultado final do jogo, mostrando qual time foi adivinhado ou uma lista de times possíveis.

- **reiniciarJogo**: Reseta o estado do jogo, permitindo que o usuário comece novamente.

## Elementos da Página

- **pergunta**: Elemento onde a pergunta atual é exibida.
- **resultado**: Elemento onde o resultado final é exibido.
- **bandeira**: Imagem da bandeira do time adivinhado.
- **contêineres**: Para perguntas e resultados, controlando a visibilidade.

## Como Usar

1. Abra o arquivo `index.html` em um navegador.
2. Responda às perguntas clicando nos botões "Sim" ou "Não".
3. O jogo tentará adivinhar o time com base nas suas respostas.
4. Se desejar, clique em "Recomeçar" para jogar novamente.

## Requisitos

- Este projeto deve ser executado em um ambiente que suporte HTML, CSS e JavaScript.
