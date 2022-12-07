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
  //velger random klær etter forholdene
  let clothes = "";
  let html = `
  <h1>Suit Yourself!</h1>
  `;
  //disse funksjonene kalles ikke om jeg vil bytte enkeltplagg
  if (!model.changeCurrent) {
    model.currentOutfit = [];
    fetchClothes();
    sortClothes();
  }
  //når enkeltplagg er byttet kan vi kjøre funksjonene over
  if (model.changeCommenced) {
    model.changeCurrent = false;
    model.changeCommenced = false;
  }
  for (let i = 0; i < model.currentOutfit.length; i++) {
    clothes += `<img 
    class = "clothing"
    onmouseover="this.style = 'background-color: green; cursor: pointer;'"
    onmouseout="this.style.backgroundColor = 'transparent'"
    onclick="changeArticle(${i})"
    src="${model.currentOutfit[i].img}">`;
  }
  html += /*html*/ `
      <div class="screen">
        ${clothes}
        ${model.changeCurrent ? model.currentChange :
          '<button onclick="suitUpScreen()">Reselect all</button>'}
        <button onclick="startScreen()">Back</button>
      </div>
        `;
  model.view.innerHTML = html;
  console.log("temp cat", model.tempCategories);
}
function wardrobeScreen() {
  //her skal du trykke på knapper for å se klær du kan bruke i hver sesong
  let html = "";
  html = /*html*/ `
  <h1>Suit Yourself!</h1>
    <div class="screen">
    ${buttonFill()}
    <button onclick="startScreen()">Back</button>
  </div>  
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
            <img class = "clothing" src="${model.currentWardrobe[i][j].img}">
            `;
      }
    }
    html += /*html*/ `
      <div> ${fillButton} </div>
      `;
  }
  return html;
}
function changeArticle(selection) {
  //henter ut alle tilgjengelige klær etter forhold så kan bytte ut i suit up
  let html = "";
  let clothing = "";
  for (let i = 0; i < model.tempCategories[selection].length; i++) {
    clothing += /*html*/ `
    <img class = "clothing" 
    onmouseover="this.style = 'background-color: green; cursor: pointer;'"
    onmouseout="this.style.backgroundColor = 'transparent'"
    onclick = "commenceChange( ${selection}, ${i} )" 
    src= "${model.tempCategories[selection][i].img}">
    `;
  }
  html += /*html*/ `
  <div class="subSelection">¨
    ${clothing}
  </div>
  `;
  model.currentChange = html;
  model.changeCurrent = true;
  suitUpScreen();
}
function commenceChange(category, replacement) {
  //bytter ut suit up-plagg og sier at de er byttet så vi kan randomisere igjen
  model.currentOutfit[category] = model.tempCategories[category][replacement];
  model.changeCommenced = true;
  model.currentChange = "";
  suitUpScreen();
  console.log(category, replacement);
}
