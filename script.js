// Lista dos times
const times = [
    "Flamengo", "Palmeiras", "São Paulo", "Corinthians", 
    "Grêmio", "Internacional", "Atlético Mineiro", "Cruzeiro", 
    "Athletico-Paranaense", "Vasco da Gama", "Fluminense", 
    "Botafogo", "Bahia", "Fortaleza", "Criciúma", "Bragantino", 
    "Juventude", "Cuiabá", "Atlético de Goiás", "Vitoria"
];

// Sites oficiais dos times
const timesSites = {
    "Flamengo": "https://www.flamengo.com.br",
    "Palmeiras": "https://www.palmeiras.com.br",
    "São Paulo": "https://www.saopaulofc.net",
    "Corinthians": "https://www.corinthians.com.br",
    "Grêmio": "https://gremio.net",
    "Internacional": "https://internacional.com.br",
    "Atlético Mineiro": "https://atletico.com.br",
    "Cruzeiro": "https://cruzeiro.com.br",
    "Athletico-Paranaense": "https://www.athletico.com.br",
    "Vasco da Gama": "https://vasco.com.br",
    "Fluminense": "https://www.fluminense.com.br",
    "Botafogo": "https://www.botafogo.com.br",
    "Bahia": "https://www.esporteclubebahia.com.br",
    "Fortaleza": "https://www.fortalezaec.net",
    "Criciúma": "https://criciumaec.com.br",
    "Bragantino": "https://www.redbullbragantino.com.br",
    "Juventude": "https://www.instagram.com/ecjuventude/",
    "Cuiabá": "https://cuiabaesporteclube.com.br",
    "Atlético de Goiás": "https://atleticogoianiense.com.br",
    "Vitoria": "https://ecvitoria.com.br"
};

// Perguntas e regras de decisão
const perguntas = [
    { pergunta: "Seu time ganhou a Libertadores nos últimos 5 anos?", sim: ["Flamengo", "Palmeiras", "Fluminense"], nao: [] },
    { pergunta: "Seu time é de São Paulo?", sim: ["São Paulo", "Palmeiras", "Corinthians", "Bragantino"], nao: [] },
    { pergunta: "Sua mascote é um peixe", sim: ["Cuiabá" ], nao: [] },
    { pergunta: "Seu time já foi rebaixado?", sim: [ "Vitoria", "Bahia", "Athletico-Paranaense", "Fluminense", "Cruzeiro", "Corinthians", "Vasco da Gama", "Internacional", "Grêmio", "Botafogo", "Atlético Mineiro", "Fortaleza", "Criciúma", "Juventude", "Bragantino", "Atlético de Goiás"], nao: [] },
    { pergunta: "Seu time tem 4 ou mais títulos do Brasileirão?", sim: ["Cruzeiro","Flamengo", "Palmeiras", "Corinthians", "São Paulo", "Vasco da Gama"], nao: [] },
    { pergunta: "Seu time é conhecido por ter uma camisa tricolor?", sim: ["Fluminense", "São Paulo", "Bahia", "Grêmio", "Fortaleza"], nao: [] },
    { pergunta: "Seu time é do Rio de Janeiro?", sim: ["Flamengo", "Fluminense", "Vasco da Gama", "Botafogo"], nao: [] },
    { pergunta: "Seu time tem um estádio próprio?", sim: [ "Vitoria","Palmeiras","Cuiabá","Juventude","Atlético de Goiás", "Athletico-Paranaense", "São Paulo", "Atlético Mineiro", "Corinthians", "Vasco da Gama", "Grêmio", "Botafogo","Criciúma", "Internacional"], nao: [] },
    { pergunta: "Seu time é de Minas?", sim: ["Atlético Mineiro", "Cruzeiro"], nao: [] },
    { pergunta: "Seu time é Baiano?", sim: ["Vitoria"], nao: [] },
    { pergunta: "Seu time tem um mascote que é um leão?", sim: ["Fortaleza"], nao: [] },
    { pergunta: "Seu time completou 100 anos em 2024?", sim: ["Athletico-Paranaense"], nao: [] },
    { pergunta: "Seu time está na primeira divisão atualmente?", sim:  [ "Flamengo", "Palmeiras", "São Paulo", "Corinthians",  "Grêmio", "Internacional", "Atlético Mineiro", "Cruzeiro",  "Athletico-Paranaense", "Vasco da Gama", "Fluminense",  "Botafogo", "Bahia", "Fortaleza", "Criciúma", "Bragantino",  "Juventude", "Cuiabá", "Atlético de Goiás"], nao: [] },
    { pergunta: "Seu time tem a maior torcida do Brasil?", sim: ["Flamengo"], nao: [] },
    { pergunta: "Seu time é de Santa Catarina?", sim: ["Criciúma"], nao: [] },
    { pergunta: "Seu time tem um mascote que é um Bragantino?", sim: ["Bragantino"], nao: [] },
    { pergunta: "Seu time é conhecido por suas cores verde e branco?", sim: ["Juventude"], nao: [] },
    { pergunta: "É uma das maiores forças do Centro-Oeste", sim: ["Cuiabá", "Atlético de Goiás"], nao: [] },
];

// Elementos da página
const timesContainer = document.getElementById('times-container');
const perguntaEl = document.getElementById("pergunta");
const resultadoEl = document.getElementById("resultado");  
const bandeiraEl = document.getElementById("bandeira");
const perguntaContainer = document.getElementById("pergunta-container");
const resultadoContainer = document.getElementById("resultado-container");
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const botaoRecomecar = document.getElementById("recomecar");

// Variáveis de controle
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

// Função para carregar os escudos dos times no carrossel
function carregarEscudosDosTimes() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    times.forEach(time => {
        // Cria o elemento de slide
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        // Cria o link
        const link = document.createElement('a');
        link.href = timesSites[time];
        link.target = "_blank"; // Abre em nova aba
        link.rel = "noopener noreferrer"; // Boas práticas de segurança

        // Cria a imagem
        const img = document.createElement('img');
        img.src = `imagens/${time.toLowerCase().replace(/\s+/g, '-')}.png`;
        img.alt = `Escudo do ${time}`;
        img.style.cursor = 'pointer';

        // Monta a estrutura
        link.appendChild(img);
        slide.appendChild(link);
        swiperWrapper.appendChild(slide);
    });
}

// Função para iniciar o carrossel
function iniciarCarrossel() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 10,  // Exibe 10 times por vez
        spaceBetween: 1,     // Espaçamento entre os escudos
        loop: true,          // Ativa o loop contínuo
        autoplay: {
            delay: 0,        // Define que não há atraso entre os slides
            disableOnInteraction: false, // Continua rodando após interação
        },
        speed: 2000,         // Define a velocidade de transição (tempo total para passar os slides)
        loopedSlides: 20,    // Define o número de slides no loop (pode ser ajustado conforme necessário)
    });
}
// Carregar os escudos e inicializar o carrossel ao carregar a página
window.onload = function() {
    carregarEscudosDosTimes();
    iniciarCarrossel();
};

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

// Função para exibir o resultado
function exibirResultado() {
    if (timesFiltrados.length === 1) {
        const time = timesFiltrados[0];
        resultadoEl.textContent = `Seu time é: ${time}!`;
        bandeiraEl.src = `imagens/${time.toLowerCase().replace(/\s+/g, '-')}.png`;
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

    // Adiciona a pergunta final
    const perguntaFinal = document.createElement("p");
    perguntaFinal.textContent = "Gostou do joguinho? Responda!";
    
    const thumbContainer = document.createElement("div");
    thumbContainer.classList.add("thumb-container");

    const iconeSim = document.createElement("i");
    iconeSim.classList.add("fas", "fa-thumbs-up", "thumb-icon", "positivo");
    
    const iconeNao = document.createElement("i");
    iconeNao.classList.add("fas", "fa-thumbs-down", "thumb-icon", "negativo");

    thumbContainer.appendChild(iconeSim);
    thumbContainer.appendChild(iconeNao);

    resultadoContainer.appendChild(perguntaFinal);
    resultadoContainer.appendChild(thumbContainer);

    // Eventos para os ícones de feedback
    iconeSim.addEventListener("click", () => {
        const pixCode = '00020126580014BR.GOV.BCB.PIX0136f1179021-16fb-400f-a95c-e2d73180f77652040000530398654049.905802BR5925Paulo Bivar Dourado Barre6009SAO PAULO62140510nt4StWtUDk6304C750';
        resultadoEl.innerHTML = `Então faça um Pix copiando o código ou lendo o Qrcode com seu para me estimular a criar novos projetos.`;

        const pixContainer = document.createElement('div');
        pixContainer.classList.add('pix-container');

        const copiarButton = document.createElement('button');
        copiarButton.textContent = "Copiar Código do Pix";
        copiarButton.classList.add("button-copiar-pix");
        copiarButton.onclick = function() {
            navigator.clipboard.writeText(pixCode)
                .then(() => alert('Código do Pix copiado para a área de transferência!'))
                .catch(err => console.error('Erro ao copiar o código: ', err));
        };

        const imgPix = document.createElement('img');
        imgPix.src = './imagens/qrcode.png';
        imgPix.alt = "Código Pix";
        imgPix.classList.add("qr-code-image");

        pixContainer.appendChild(copiarButton);
        pixContainer.appendChild(imgPix);
        resultadoEl.appendChild(pixContainer);
        bandeiraEl.classList.add("hidden");
        botaoRecomecar.classList.remove("hidden");

        // Adicionar botão de compartilhar
        const compartilharEl = document.createElement("button");
        compartilharEl.id = "compartilhar";
        compartilharEl.textContent = "Compartilhe o site, por favor";
        compartilharEl.classList.remove("hidden");

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

    iconeNao.addEventListener("click", () => {
        resultadoEl.textContent = "Que pena que você não gostou!";
        bandeiraEl.classList.add("hidden");
        botaoRecomecar.classList.remove("hidden");
        perguntaFinal.remove();
        thumbContainer.remove();
    });
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    timesFiltrados = [...times];
    contadorPerguntas = 0;
    resultadoEl.textContent = "";
    bandeiraEl.src = "";
    bandeiraEl.classList.add("hidden");
    resultadoContainer.classList.add("hidden");
    perguntaContainer.classList.remove("hidden");

    const compartilharEl = document.getElementById("compartilhar");
    if (compartilharEl) {
        compartilharEl.remove();
    }
    botaoRecomecar.classList.add("hidden");
    location.reload();
}

// Inicialização quando a página carrega
window.onload = function() {
    carregarEscudosDosTimes();
    iniciarCarrossel();
    fazerPergunta();
    botaoRecomecar.classList.add("hidden");

};

// Eventos dos botões
botaoSim.addEventListener("click", () => responder('sim'));
botaoNao.addEventListener("click", () => responder('nao'));
botaoRecomecar.addEventListener("click", reiniciarJogo);