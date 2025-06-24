const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let reversedChance = randomBetween(25, 50);
if (theme == 1) reversedChance = 0;

const gameContainer = document.getElementById("game-container");
const gameGrid = document.getElementById("game-grid");
const gameCards = shuffle(tarotCards.slice());
let actualGame = [];

const firstTime = localStorage.getItem("firstTime") ? JSON.parse(localStorage.getItem("firstTime")) : true;
const dialogContainer = document.getElementById("dialog-container");
if (firstTime) {
    dialogContainer.classList.remove("hidden");
}

const okButton = document.getElementById("ok-button");
okButton.addEventListener("click", () => {
    dialogContainer.classList.add("hidden");
    localStorage.setItem("firstTime", false);
});

gameCards.forEach((card) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper');
    if (theme == 1) {
        wrapper.style.aspectRatio = "1 / 1.5";
    }

    wrapper.innerHTML = `
    <div class="card-inner">
      <div class="card-back">
        <img src="images/${localStorage.getItem("deck")}/cardBack.jpg">
      </div>
      <div class="card-front">
        <img src="images/${localStorage.getItem("deck")}/${card.name}.jpg">
      </div>
    </div>`;

    card.reversed = Math.random() < reversedChance / 100;
    card.isSelected = false;

    wrapper.addEventListener('click', () => {
        if (!card.isSelected) {
            actualGame.push({ name: card.name, reversed: card.reversed });
            card.isSelected = true;
            if (drawButton.classList.contains("hidden")) drawButton.classList.remove("hidden");
        }
        wrapper.classList.add('flipped');
        if (card.reversed) {
            wrapper.classList.add('reversed');
        }
    });

    gameGrid.appendChild(wrapper);
});

const sliderContainer = document.getElementById("slider-container");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");

let currentSlide = 0;

function showCard(index) {
    sliderContainer.innerHTML = "";
    generateCardView(sliderContainer, actualGame[index].name, actualGame[index].reversed, false);
}

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        showCard(currentSlide);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentSlide < actualGame.length - 1) {
        currentSlide++;
        showCard(currentSlide);
    }
});

const message = document.getElementById("instruction-message");
const slider = document.getElementById("slider");

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => {
    location.reload();
});

const copyPromptButton = document.getElementById("copy-prompt-button");
copyPromptButton.addEventListener("click", () => {
    let message = `
Interprete para mim essa tiragem de tarô que acabei de fazer no aplicativo Arcana:
- Contexto: [Especifique aqui o contexto da sua tiragem, sobre o que perguntava, sobre a situação, etc...]
- Cartas tiradas: `;
    actualGame.forEach(carta => {
        message += `${carta.name}(${carta.reversed ? 'Invertida' : 'Em pé'}), `;
    });
    message = message.slice(0, message.length - 2);
    message += ".";
    copyTextToClipboard(message);
});

const drawButton = document.getElementById("draw-button");
drawButton.addEventListener("click", () => {
    if (actualGame.length > 0) {
        message.textContent = actualGame.length == 1 ? `Essa é a carta que você tirou:` : `Essas são as ${actualGame.length} cartas que você tirou:`;
        gameGrid.classList.add("hidden");
        slider.classList.remove("hidden");
        drawButton.classList.add("hidden");
        restartButton.classList.remove("hidden");
        copyPromptButton.classList.remove("hidden");
        showCard(currentSlide);
        gameContainer.scrollTo(0, 0);
    }
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function copyTextToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Prompt copiado com sucesso!");
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
}