fetchConditions();
function fetchConditions() {
  //velger tilfeldig vær og sesong når du oppdaterer siden.
  //du kan nå rote rundt i hele appen uten at været endrer seg i hvert bilde.
  let randomWeather = model.weather[getRandom(model.weather.length)];
  let randomSeason = model.season[getRandom(model.season.length)];
  model.currentCondition.push(randomWeather);
  model.currentCondition.push(randomSeason);
}
function getRandom(currentRequest) {
  //velg et array, bruk funksjonen som index med array.lenght som parameter.
  //Du har nå tilfeldig ting fra arrayet;)
  //example: model.clothing[getRandom(model.clothing.length)] <=vil gi et tilfeldig klesplagg fra clothing
  randomNumber = Math.floor(Math.random() * currentRequest);
  return randomNumber;
}

function fetchClothes() {
  //finn for hver category som møter conditions og legg til i model.tempCategories
  let weatherCondition = model.currentCondition[0].type;
  let seasonCondition = model.currentCondition[1].type;
  let currentCategory = "";
  console.log("været er", weatherCondition, "sesongen er", seasonCondition);
  for (find of model.clothing) {
    for (let i = 0; i < model.categories.length; i++) {
      currentCategory = model.categories[i];
      if (find.category == currentCategory) {
        if (
          find.weather.includes(weatherCondition) &&
          find.season.includes(seasonCondition)
        ) {
          model.tempCategories[i].push(find);
        }
      }
    }
  }
  console.log(model.tempCategories);
}
function sortClothes() {
  //Om flere plagg i en kategori passer til samme vær og sesong,
  //så spytter denne funksjonen ut bare ett av dem
  //TODO html burde bli en div med onclick for å kjøre plaggbytte når flere ting er tilgjengelig
  let html = ``;
  for (let i = 0; i < model.tempCategories.length; i++) {
    for (let j = 0; j < model.tempCategories[i].length; j++) {
      if (model.tempCategories[i][j]) {
        let singleItem =
          model.tempCategories[i][getRandom(model.tempCategories[i].length)];
        model.currentCondition.push(singleItem);
        html += singleItem.img;
      }
    }
  }
  return html;
}
function fillWardrobe(seasonSelection) {
  //legger til klær kun i riktig sesong i rett liste.
  //currentWardrobe må tømmes først for å ikke skrive alle sesongene på en gang.
  model.currentWardrobe = [[],[],[],[],];
  for (i = 0; i < model.clothing.length; i++) {
    if (model.clothing[i].season.includes(model.season[seasonSelection].type)) {
      model.currentWardrobe[seasonSelection].push(model.clothing[i]);
    }
  }
  wardrobeScreen();
}
