//TODO legg til CSS.
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
  //TODO legge til onclick i sortClothes så kan velge hele tempCategory plagget ligger på
  //så kan bytte med noe annet som passer conditions
  let html = `
    <h1>Suit Yourself!</h1>
    `;
  fetchClothes();
  html += sortClothes();
  html += /*html*/ `
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
        fillButton += /*html*/ `
            ${model.currentWardrobe[i][j].img}
            `;
      }
    }
    html += /*html*/ `
      <div> ${fillButton} </div>
      `;
  }
  return html;
}
