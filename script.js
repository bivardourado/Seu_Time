// Lista dos times
const times = [
    "Atlético Mineiro", "Bahia", "Botafogo", "Ceará", "Corinthians",
    "Cruzeiro", "Flamengo", "Fluminense", "Fortaleza", "Grêmio",
    "Internacional", "Juventude", "Mirassol", "Palmeiras", "Red Bull Bragantino",
    "Santos", "São Paulo", "Sport", "Vasco da Gama", "Vitória"
];

// Sites oficiais dos times
const timesSites = {
    "Atlético Mineiro": "https://www.atletico.com.br",
    "Bahia": "https://www.esporteclubebahia.com.br",
    "Botafogo": "https://www.botafogo.com.br",
    "Ceará": "https://www.cearasc.com",
    "Corinthians": "https://www.corinthians.com.br",
    "Cruzeiro": "https://cruzeiro.com.br",
    "Flamengo": "https://www.flamengo.com.br",
    "Fluminense": "https://www.fluminense.com.br",
    "Fortaleza": "https://www.fortalezaec.net",
    "Grêmio": "https://gremio.net",
    "Internacional": "https://internacional.com.br",
    "Juventude": "https://www.juventude.com.br",
    "Mirassol": "https://www.mirassolfc.com.br",
    "Palmeiras": "https://www.palmeiras.com.br",
    "Red Bull Bragantino": "https://www.redbullbragantino.com.br",
    "Santos": "https://www.santosfc.com.br",
    "São Paulo": "https://www.saopaulofc.net",
    "Sport": "https://www.sportrecife.com.br",
    "Vasco da Gama": "https://www.vasco.com.br",
    "Vitória": "https://www.ecvitoria.com.br"
};

// Perguntas do jogo
const perguntas = [
    {
        pergunta: "O time é do estado de São Paulo?",
        sim: ["Corinthians", "Mirassol", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo"],
        nao: ["Atlético Mineiro", "Bahia", "Botafogo", "Ceará", "Cruzeiro", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Sport", "Vasco da Gama", "Vitória"]
    },
    {
        pergunta: "O time é do estado do Rio de Janeiro?",
        sim: ["Botafogo", "Flamengo", "Fluminense", "Vasco da Gama"],
        nao: ["Atlético Mineiro", "Bahia", "Ceará", "Corinthians", "Cruzeiro", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Mirassol", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Sport", "Vitória"]
    },
    {
        pergunta: "O time é do estado de Minas Gerais?",
        sim: ["Atlético Mineiro", "Cruzeiro"],
        nao: ["Bahia", "Botafogo", "Ceará", "Corinthians", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Mirassol", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Sport", "Vasco da Gama", "Vitória"]
    },
    {
        pergunta: "O time é do estado do Rio Grande do Sul?",
        sim: ["Grêmio", "Internacional", "Juventude"],
        nao: ["Atlético Mineiro", "Bahia", "Botafogo", "Ceará", "Corinthians", "Cruzeiro", "Flamengo", "Fluminense", "Fortaleza", "Mirassol", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Sport", "Vasco da Gama", "Vitória"]
    },
    {
        pergunta: "O time é do estado da Bahia?",
        sim: ["Bahia", "Vitória"],
        nao: ["Atlético Mineiro", "Botafogo", "Ceará", "Corinthians", "Cruzeiro", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Mirassol", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Sport", "Vasco da Gama"]
    },
    {
        pergunta: "O time é do estado do Ceará?",
        sim: ["Ceará", "Fortaleza"],
        nao: ["Atlético Mineiro", "Bahia", "Botafogo", "Corinthians", "Cruzeiro", "Flamengo", "Fluminense", "Grêmio", "Internacional", "Juventude", "Mirassol", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Sport", "Vasco da Gama", "Vitória"]
    },
    {
        pergunta: "O time é do estado de Pernambuco?",
        sim: ["Sport"],
        nao: ["Atlético Mineiro", "Bahia", "Botafogo", "Ceará", "Corinthians", "Cruzeiro", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Mirassol", "Palmeiras", "Red Bull Bragantino", "Santos", "São Paulo", "Vasco da Gama", "Vitória"]
    }
];

let timesRestantes = [...times];
let perguntaAtualIndex = 0;

const perguntaElement = document.getElementById("pergunta");
const simButton = document.getElementById("sim");
const naoButton = document.getElementById("nao");
const resultadoElement = document.getElementById("resultado");
const bandeiraElement = document.getElementById("bandeira");
const recomecarButton = document.getElementById("recomecar");
const perguntaContainer = document.getElementById("pergunta-container");
const resultadoContainer = document.getElementById("resultado-container");
const swiperWrapper = document.querySelector(".swiper-wrapper");

// Inicializa o Swiper
const swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});

// Função para carregar as imagens dos times no carrossel
function carregarImagensDosTimes() {
    swiperWrapper.innerHTML = ""; // Limpa o carrossel
    times.forEach(time => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        const img = document.createElement("img");
        img.src = `./imagens/${time.toLowerCase().replace(/ /g, "-")}.png`;
        img.alt = time;
        img.title = time; // Adiciona o nome do time como título para tooltip
        img.onclick = () => {
            const siteUrl = timesSites[time];
            if (siteUrl) {
                window.open(siteUrl, "_blank");
            } else {
                alert(`Site oficial do ${time} não disponível.`);
            }
        };
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
    });
    swiper.update(); // Atualiza o Swiper após adicionar os slides
}

// Função para fazer a próxima pergunta
function fazerPergunta() {
    if (timesRestantes.length === 1) {
        exibirResultado(timesRestantes[0]);
        return;
    }

    if (perguntaAtualIndex < perguntas.length) {
        const perguntaObj = perguntas[perguntaAtualIndex];
        perguntaElement.textContent = perguntaObj.pergunta;
        perguntaContainer.style.display = "block";
        resultadoContainer.style.display = "none";
    } else {
        exibirResultado(null); // Não foi possível adivinhar
    }
}

// Função para responder à pergunta
function responder(resposta) {
    const perguntaObj = perguntas[perguntaAtualIndex];
    let timesFiltrados = [];

    if (resposta === "sim") {
        timesFiltrados = timesRestantes.filter(time => perguntaObj.sim.includes(time));
    } else {
        timesFiltrados = timesRestantes.filter(time => perguntaObj.nao.includes(time));
    }

    timesRestantes = timesFiltrados;
    perguntaAtualIndex++;
    fazerPergunta();
}

// Função para exibir o resultado
function exibirResultado(timeAdivinhado) {
    perguntaContainer.style.display = "none";
    resultadoContainer.style.display = "block";

    if (timeAdivinhado) {
        resultadoElement.textContent = `O seu time é o ${timeAdivinhado}!`;
        bandeiraElement.src = `./imagens/${timeAdivinhado.toLowerCase().replace(/ /g, "-")}.png`;
        bandeiraElement.alt = timeAdivinhado;
        bandeiraElement.style.display = "block";
    } else {
        resultadoElement.textContent = `Não foi possível adivinhar o seu time. Times restantes: ${timesRestantes.join(", ")}.`;
        bandeiraElement.style.display = "none";
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    timesRestantes = [...times];
    perguntaAtualIndex = 0;
    carregarImagensDosTimes();
    fazerPergunta();
}

// Event Listeners
simButton.addEventListener("click", () => responder("sim"));
naoButton.addEventListener("click", () => responder("nao"));
recomecarButton.addEventListener("click", reiniciarJogo);

// Iniciar o jogo
carregarImagensDosTimes();
fazerPergunta();
