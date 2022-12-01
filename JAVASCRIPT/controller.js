fetchConditions();
function fetchConditions() {
  let randomWeather = model.weather[getRandom(model.weather.length)];
  let randomSeason = model.season[getRandom(model.season.length)];
  model.currentCondition.push(randomWeather);
  model.currentCondition.push(randomSeason);
}
function getRandom(currentRequest) {
  //velg et array, i bruk funksjonen som index med array.lenght som parameter.
  //Du har nå tilfeldig ting fra arrayet;)
  //example: model.clothing[getRandom(model.clothing.length)] <=vil gi et tilfeldig klesplagg fra clothing
  randomNumber = Math.floor(Math.random() * currentRequest);
  return randomNumber;
}

function fetchClothes() {
  //finn for hver category som møter conditions og legg til i model.tempCategories[]
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
  //TODO html burde bli en div med onclick for å kjøre plaggbytte når flere ting er tilgjengelig
  let html = ``;
  let rndNum = 0;
  for (let i = 0; i < model.tempCategories.length; i++) {
    for (let j = 0; j < model.tempCategories[i].length; j++) {
      if (model.tempCategories[i][j]) {
        rndNum = getRandom(model.tempCategories[i].length);
        html += model.tempCategories[i][rndNum].img;
      }
    }
  }
  return html;
}
