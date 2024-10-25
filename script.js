const times = [
    "Flamengo", "Palmeiras", "São Paulo", "Corinthians", 
    "Grêmio", "Internacional", "Atlético Mineiro", "Cruzeiro", 
    "Athletico-Paranaense", "Vasco da Gama", "Fluminense", 
    "Botafogo", "Bahia", "Fortaleza", "Criciúma", "Bragantino", 
    "Juventude", "Cuiabá", "Atlético de Goiás", "Vitoria",
    "Coritiba"
];

const timesContainer = document.getElementById('times-container');

// Função para gerar dinamicamente os slides do carrossel
function carregarEscudosDosTimes() {
    const swiperWrapper = document.querySelector('.swiper-wrapper'); // Seleciona a área de slides

    times.forEach(time => {
        // Cria o elemento de slide para cada time
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        // Cria a imagem do escudo do time
        const img = document.createElement('img');
        img.src = `imagens/${time.toLowerCase().replace(/\s+/g, '-')}.png`;
        img.alt = `Escudo do ${time}`;

        // Adiciona a imagem ao slide e o slide ao carrossel
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
    });
}


// Iniciar o carrossel Swiper
function iniciarCarrossel() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 10,  // Exibe 10 times por vez
        spaceBetween: 1,     // Espaçamento entre os escudos
        loop: true,          // Ativa o loop contínuo
        autoplay: {
            delay: 0,        // Define que não há atraso entre os slides
            disableOnInteraction: false, // Continua rodando após interação
        },
        speed: 700,         // Define a velocidade de transição (tempo total para passar os slides)
        loopedSlides: 20,    // Define o número de slides no loop (pode ser ajustado conforme necessário)
    });
}


// Carregar os escudos e inicializar o carrossel ao carregar a página
window.onload = function() {
    carregarEscudosDosTimes();
    iniciarCarrossel();
};

// Perguntas e regras de decisão
const perguntas = [
    { pergunta: "Seu time ganhou a Libertadores nos últimos 5 anos?", sim: ["Flamengo", "Palmeiras", "Fluminense"], nao: [] },
    { pergunta: "Seu time é de São Paulo?", sim: ["São Paulo", "Palmeiras", "Corinthians", "Bragantino"], nao: [] },
    { pergunta: "Sua mascote é um peixe", sim: ["Cuiabá" ], nao: [] },
    { pergunta: "Seu time já foi rebaixado?", sim: [ "Vitoria", "Bahia", "Athletico-Paranaense", "Fluminense", "Cruzeiro", "Corinthians", "Vasco da Gama", "Internacional", "Grêmio", "Botafogo", "Atlético Mineiro", "Fortaleza", "Criciúma", "Juventude", "Bragantino", "Atlético de Goiás", "Coritiba"], nao: [] },
    { pergunta: "Seu time tem 4 ou mais títulos do Brasileirão?", sim: ["Cruzeiro","Flamengo", "Palmeiras", "Corinthians", "São Paulo", "Vasco da Gama"], nao: [] },
    { pergunta: "Seu time é conhecido por ter uma camisa tricolor?", sim: ["Fluminense", "São Paulo", "Bahia", "Grêmio", "Fortaleza"], nao: [] },
    { pergunta: "Seu time é do Rio de Janeiro?", sim: ["Flamengo", "Fluminense", "Vasco da Gama", "Botafogo"], nao: [] },
    { pergunta: "Seu time tem um estádio próprio?", sim: [ "Vitoria","Palmeiras","Cuiabá","Juventude","Atlético de Goiás", "Athletico-Paranaense", "São Paulo", "Atlético Mineiro", "Corinthians", "Vasco da Gama", "Grêmio", "Botafogo","Criciúma", "Internacional", "Coritiba"], nao: [] },
    { pergunta: "Seu time é de Minas?", sim: ["Atlético Mineiro", "Cruzeiro"], nao: [] },
    { pergunta: "Seu time é Baiano?", sim: ["Vitoria"], nao: [] },
    { pergunta: "Seu time tem um mascote que é um leão?", sim: ["Fortaleza"], nao: [] },
    { pergunta: "Seu time completou 100 anos em 2024?", sim: ["Athletico-Paranaense"], nao: [] },
    { pergunta: "Seu time está na primeira divisão atualmente?", sim:  [ "Flamengo", "Palmeiras", "São Paulo", "Corinthians",  "Grêmio", "Internacional", "Atlético Mineiro", "Cruzeiro",  "Athletico-Paranaense", "Vasco da Gama", "Fluminense",  "Botafogo", "Bahia", "Fortaleza", "Criciúma", "Bragantino",  "Juventude", "Cuiabá", "Atlético de Goiás"], nao: [] },
    { pergunta: "Seu time tem a maior torcida do Brasil?", sim: ["Flamengo"], nao: [] },
    { pergunta: "Seu time é de Santa Catarina?", sim: ["Criciúma"], nao: [] },
    { pergunta: "Seu time tem um mascote que é um Bragantino?", sim: ["Bragantino"], nao: [] },
    { pergunta: "Seu time é conhecido por suas cores verde e branco?", sim: ["Juventude", "Coritiba"], nao: [] },
    { pergunta: "É uma das maiores forças do Centro-Oeste", sim: ["Cuiabá", "Atlético de Goiás"], nao: [] },
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
          // Mostrar o botão "Recomeçar"
          botaoRecomecar.classList.remove("hidden");
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
          // Mostrar o botão "Recomeçar"
          botaoRecomecar.classList.remove("hidden");
        perguntaFinal.remove();
        thumbContainer.remove();
    });
}

// Inicia o jogo
fazerPergunta();
 // Esconder o botão de recomeçar
 botaoRecomecar.classList.add("hidden"); // Adicione a classe "hidden" novamente

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
    botaoRecomecar.classList.add("hidden");
    location.reload();
}

// Adiciona eventos aos botões
botaoSim.addEventListener("click", () => responder('sim'));
botaoNao.addEventListener("click", () => responder('nao'));
botaoRecomecar.addEventListener("click", reiniciarJogo);
