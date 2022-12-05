//TODO legg til CSS.
//TODO finn ut hvordan kan hente verdi av .img inni apostroffer i img tag
startScreen();
function startScreen() {
  model.currentWardrobe = [[], [], [], []];
  let html = "";
  let randomWeather = model.currentCondition[0];
  let randomSeason = model.currentCondition[1];
  html += /*html*/ `
    <h1>Suit Yourself!</h1>
    <div>${randomWeather.img}</div>
    <div>${randomSeason.img}</div>
    <button onclick="suitUpScreen()">Suit Up!</button> <br>
    <button onclick="wardrobeScreen()">Wardrobe</button>
    `;
  model.view.innerHTML = html;
}
function suitUpScreen() {
  //TODO legge til onclick så kan velge hele tempCategory plagget ligger på
  //så kan bytte med noe annet som passer conditions
  //TODO legg klær inn i egen div med class så kan CSS-e dem
  model.currentOutfit = [];
  let html = `
    <h1>Suit Yourself!</h1>
    `;
  fetchClothes();
  sortClothes();
  for (let i = 0; i < model.currentOutfit.length; i++) {
    html += `<img src="${model.currentOutfit[i].img}">`;
  }
  html += /*html*/ `
      <button onclick="suitUpScreen()">Reselect all</button>
      <button onclick="startScreen()">Back</button>
        `;
  model.view.innerHTML = html;
}
function wardrobeScreen() {
  //her skal du trykke på knapper for å se klær du kan bruke i hver sesong
  let html = "";
  html = /*html*/ `
  <h1>Suit Yourself!</h1>
  `;
  html += buttonFill();
  html += /*html*/ `
  <button onclick="startScreen()">Back</button>
    `;
  model.view.innerHTML = html;
}
function buttonFill() {
  //denne henter knappene du kan trykke på for å vise klær
  let fillButton = "";
  let html = "";
  for (i = 0; i < model.season.length; i++) {
    fillButton = "";
    html += /*html*/ `
          <button onclick="fillWardrobe(${i})">${model.season[i].type} clothes</button>
          `;
    if (model.currentWardrobe[i]) {
      for (j = 0; j < model.currentWardrobe[i].length; j++) {
        fillButton += `
            <img src="${model.currentWardrobe[i][j].img}">
            `;
      }
    }
    html += /*html*/ `
      <div> ${fillButton} </div>
      `;
  }
  return html;
}
