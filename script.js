// Lista dos times da primeira divisão (nomes das imagens devem ser iguais aos nomes dos times)
const times = [
    "Flamengo", "Palmeiras", "São Paulo", "Corinthians", 
    "Grêmio", "Internacional", "Atlético Mineiro", "Cruzeiro", "Athletico-Paranaense", "Vasco da Gama",
    "Fluminense", "Botafogo", "Bahia", "Fortaleza",
];
const timesContainer = document.getElementById('times-container');

// Função para carregar as imagens dos times na parte superior da página
function carregarImagensDosTimes() {
    times.forEach(time => {
        const img = document.createElement('img');
        img.src = `imagens/${time.toLowerCase().replace(/\s+/g, '-')}.png`; // Exemplo: "vasco-da-gama.png"
        img.alt = `Bandeira do ${time}`;
        timesContainer.appendChild(img);
    });
}

carregarImagensDosTimes();

// Perguntas e regras de decisão
const perguntas = [
    { pergunta: "Seu time ganhou a Libertadores nos últimos  5 anos?", sim: ["Flamengo", "Palmeiras", "Fluminense"], nao: [] },
    { pergunta: "Seu time é de São Paulo?", sim: ["São Paulo", "Palmeiras", "Corinthians"], nao: [] },
    { pergunta: "Seu time já foi rebaixado?", sim: ["Bahia","Athletico-Paranaense", "Fluminense", "Cruzeiro", "Corinthians", "Vasco da Gama", "Internacional", "Grêmio", "Botafogo", "Atlético Mineiro", "Fortaleza"], nao: [] },
    { pergunta: "Seu time tem 4 ou mais títulos do Brasileirão?", sim: ["Flamengo", "Palmeiras", "Corinthians", "São Paulo", "Vasco da Gama"], nao: [] },
    { pergunta: "Seu time é conhecido por ter uma camisa tricolor?", sim: ["Fluminense", "São Paulo", "Bahia", "Grêmio", "Fortaleza"], nao: [] },
    { pergunta: "Seu time é do Rio de Janeiro?", sim: ["Flamengo", "Fluminense", "Vasco da Gama", "Botafogo"], nao: [] },
    { pergunta: "Seu time tem um estádio próprio?", sim: ["Palmeiras","Athletico-Paranaense", "São Paulo", "Atlético Mineiro", "Corinthians", "Vasco da Gama", "Grêmio", "Botafogo", "Internacional"], nao: [] },
    { pergunta: "Seu time é de Minas?", sim: ["Atlético Mineiro", "Cruzeiro"], nao: [] },
    { pergunta: "Seu time tem um mascote que é um leão?", sim: ["Fortaleza"], nao: [] },
    { pergunta: "Seu time completou 100 em 2024 ?", sim: ["Athletico-Paranaense"], nao: [] },
    { pergunta: "Seu time é conhecido por revelar muitos jogadores da base?", sim: ["São Paulo", "Fluminense"], nao: [] },
    { pergunta: "Seu time está na primeira divisão atualmente?", sim: ["Flamengo", "Palmeiras", "São Paulo", "Corinthians", "Grêmio", "Internacional", "Atlético Mineiro", "Cruzeiro", "Vasco da Gama", "Fluminense", "Botafogo", "Bahia", "Fortaleza"], nao: [] },
    { pergunta: "Seu time tem a maior torcida do Brasil?", sim: ["Flamengo"], nao: [] },
];

// Elementos da página
const perguntaEl = document.getElementById("pergunta");
const resultadoEl = document.getElementById("resultado");
const bandeiraEl = document.getElementById("bandeira"); // Imagem da bandeira
const perguntaContainer = document.getElementById("pergunta-container");
const resultadoContainer = document.getElementById("resultado-container");
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const botaoRecomecar = document.getElementById("recomecar");

let timesFiltrados = [...times];
let contadorPerguntas = 0;

// Função que faz as perguntas
function fazerPergunta() {
    if (contadorPerguntas < perguntas.length && timesFiltrados.length > 1) {
        const perguntaAtual = perguntas[contadorPerguntas];
        perguntaEl.textContent = perguntaAtual.pergunta;
    } else {
        exibirResultado();
    }
}

// Função para tratar as respostas
function responder(resposta) {
    const perguntaAtual = perguntas[contadorPerguntas];

    if (resposta === 'sim') {
        timesFiltrados = timesFiltrados.filter(time => perguntaAtual.sim.includes(time));
    } else if (resposta === 'nao') {
        timesFiltrados = timesFiltrados.filter(time => !perguntaAtual.sim.includes(time));
    }

    contadorPerguntas++;
    fazerPergunta();
}

// Função para exibir o resultado e a bandeira
function exibirResultado() {
    if (timesFiltrados.length === 1) {
        const time = timesFiltrados[0];
        resultadoEl.textContent = `Seu time é: ${time}!`;
        bandeiraEl.src = `imagens/${time.toLowerCase().replace(/\s+/g, '-')}.png`; // Usa o nome do time para buscar a imagem
        bandeiraEl.classList.remove("hidden");
    } else if (timesFiltrados.length > 1) {
        resultadoEl.textContent = `Não consegui adivinhar exatamente, mas pode ser um destes times: ${timesFiltrados.join(", ")}`;
        bandeiraEl.classList.add("hidden");
    } else {
        resultadoEl.textContent = "Não consegui encontrar o seu time.";
        bandeiraEl.classList.add("hidden");
    }
    perguntaContainer.classList.add("hidden");
    resultadoContainer.classList.remove("hidden");

    // Adicionar a lógica para a pergunta final (se gostou do jogo)
    const perguntaFinal = document.createElement("p");
    perguntaFinal.textContent = "Gostou do joguinho? Responda!";
    
    const thumbContainer = document.createElement("div");
    thumbContainer.classList.add("thumb-container");

    const iconeSim = document.createElement("i");
    iconeSim.classList.add("fas", "fa-thumbs-up", "thumb-icon", "positivo"); // Ícone de polegar para cima (positivo)
    
    const iconeNao = document.createElement("i");
    iconeNao.classList.add("fas", "fa-thumbs-down", "thumb-icon", "negativo"); // Ícone de polegar para baixo (negativo)

    thumbContainer.appendChild(iconeSim);
    thumbContainer.appendChild(iconeNao);

    resultadoContainer.appendChild(perguntaFinal);
    resultadoContainer.appendChild(thumbContainer);

    // Evento para o ícone "Sim"
    iconeSim.addEventListener("click", () => {
        resultadoEl.textContent = "Então faça um Pix de R$ 5,00 para me estimular a criar novos projetos. Meu Pix é: 87 9 9969 5655.";
        
       // Adicionar opção de compartilhar o site
const compartilharEl = document.createElement("button");
compartilharEl.id = "compartilhar"; // Adicione o ID para aplicar os estilos
compartilharEl.textContent = "Compartilhe o site, por favor";
compartilharEl.classList.remove("hidden"); // Remova a classe "hidden" se você a estiver usando para ocultar

compartilharEl.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: 'Adivinhe seu time!',
            text: 'Descubra qual é o seu time do coração!',
            url: 'https://bivardourado.github.io/Seu_Time/',
        }).then(() => {
            console.log('Compartilhado com sucesso!');
        }).catch((error) => {
            console.error('Erro ao compartilhar:', error);
        });
    } else {
        alert('Seu navegador não suporta compartilhamento.');
    }
});

resultadoContainer.appendChild(compartilharEl);

        perguntaFinal.remove();
        thumbContainer.remove();
    });

    // Evento para o ícone "Não"
    iconeNao.addEventListener("click", () => {
        resultadoEl.textContent = "Que pena que você não gostou!";
        bandeiraEl.classList.add("hidden");
        perguntaFinal.remove();
        thumbContainer.remove();
    });
}

// Inicia o jogo
fazerPergunta();

// Função para reiniciar o jogo
// Função para reiniciar o jogo
function reiniciarJogo() {
    timesFiltrados = [...times];
    contadorPerguntas = 0;
    resultadoEl.textContent = "";
    bandeiraEl.src = ""; // Reseta a imagem da bandeira
    bandeiraEl.classList.add("hidden");
    resultadoContainer.classList.add("hidden");
    perguntaContainer.classList.remove("hidden");

    // Remova o botão de compartilhar, se existir
    const compartilharEl = document.getElementById("compartilhar");
    if (compartilharEl) {
        compartilharEl.remove(); // Remove o botão do DOM
    }

    fazerPergunta();
}


// Adiciona eventos aos botões
botaoSim.addEventListener("click", () => responder('sim'));
botaoNao.addEventListener("click", () => responder('nao'));
botaoRecomecar.addEventListener("click", reiniciarJogo);
