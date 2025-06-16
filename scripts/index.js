const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");

searchBar.addEventListener("input", () => {
  while (searchResults.hasChildNodes()) searchResults.removeChild(searchResults.firstChild);
  if (searchBar.value != "") {
    let found = tarotCards.filter(c => c.name.toLocaleLowerCase().includes(searchBar.value.toLocaleLowerCase()));
    found.forEach((c) => {
      const result = document.createElement("div");
      result.textContent = c.name;
      result.addEventListener("click", () => {
        viewCard(c.name);
      });
      searchResults.append(result);
      if (found) searchResults.classList.remove('hidden');
    });
  } else {
    searchResults.classList.add('hidden');
  }
});

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  searchResults.classList.add('hidden');
  searchBar.value = "";
  if (menu.classList.contains("hidden")) {
    menuButton.innerHTML = `<img class="icon" src="icons/menu.svg">`;
  } else {
    menuButton.innerHTML = `<img class="icon" src="icons/x.svg">`;
  }
});

const mainDiv = document.createElement("div");
mainDiv.className = "main";

if (theme == 0) {
  createSection("arcanosMaiores", "Arcanos Maiores", mainDiv);

  const menoresLabel = document.createElement("div");
  menoresLabel.id = "arcanosMenoresLabel";
  menoresLabel.className = "label";
  menoresLabel.textContent = "Arcanos Menores";

  const menoresContainer = document.createElement("div");
  menoresContainer.id = "arcanosMenoresContainer";

  const naipes = [{
    id: "naipeCopas",
    label: "Copas"
  },
  {
    id: "naipeOuros",
    label: "Ouros"
  },
  {
    id: "naipeEspadas",
    label: "Espadas"
  },
  {
    id: "naipePaus",
    label: "Paus"
  },
  ];

  naipes.forEach(({
    id,
    label
  }) => {
    createSection(id, label, menoresContainer);
  });

  mainDiv.appendChild(menoresLabel);
  mainDiv.appendChild(menoresContainer);
  document.body.appendChild(mainDiv);

  enableToggle("arcanosMaioresLabel", "arcanosMaiores");

  naipes.forEach(({
    id
  }) => {
    enableToggle(id + "Label", id);
  });

  enableToggle("arcanosMenoresLabel", "arcanosMenoresContainer");

  populateCards("arcanosMaiores", arcanosMaiores);
  populateCards("naipeCopas", naipeCopas);
  populateCards("naipeOuros", naipeOuros);
  populateCards("naipeEspadas", naipeEspadas);
  populateCards("naipePaus", naipePaus);
} else {
  createSection("lenormandCards", "Baralho Lenormand", mainDiv);

  document.body.appendChild(mainDiv);

  enableToggle("lenormandCardsLabel", "lenormandCards");

  populateCards("lenormandCards", lenormandCards);
}

function populateCards(containerId, cards) {
  const container = document.getElementById(containerId);
  cards.forEach(card => {
    container.appendChild(newCard(card));
  });
}

function newCard(cardObj) {
  const div = document.createElement("div");
  div.className = "card-container";

  const img = document.createElement("img");
  img.src = `images/${localStorage.getItem("deck")}/${cardObj.name}.jpg`;
  img.alt = cardObj.name;
  img.className = "card small";
  img.onclick = () => viewCard(cardObj.name);

  const label = document.createElement("div");
  label.className = "card-title";
  label.textContent = cardObj.name;

  div.appendChild(img);
  div.appendChild(label);
  return div;
}

function createSection(id, label, parent) {
  const title = document.createElement("div");
  title.id = `${id}Label`;
  title.className = "label";
  title.textContent = label;

  const content = document.createElement("div");
  content.id = id;
  content.className = "content";

  parent.appendChild(title);
  parent.appendChild(content);
}

function enableToggle(labelId, contentId) {
  const label = document.getElementById(labelId);
  const content = document.getElementById(contentId);

  const savedState = localStorage.getItem(contentId);
  if (savedState === "hidden") {
    content.classList.add("hidden");
    label.classList.add("closed");
  }

  if (label && content) {
    label.addEventListener("click", () => {
      const isHidden = content.classList.toggle("hidden");
      label.classList.toggle("closed", isHidden);
      localStorage.setItem(contentId, isHidden ? "hidden" : "visible");
    });
  }
}

const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") == 0) {
    localStorage.setItem("theme", 1);
  }
  else {
    localStorage.setItem("theme", 0);
  }
  window.location.reload();
})