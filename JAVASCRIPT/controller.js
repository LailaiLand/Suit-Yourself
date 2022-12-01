fetchConditions();
function fetchConditions() {
  let randomWeather = model.weather[getRandom(model.weather.length)];
  let randomSeason = model.season[getRandom(model.season.length)];
  model.currentCondition.push(randomWeather);
  model.currentCondition.push(randomSeason);
}
function getRandom(currentRequest) {
  randomNumber = Math.floor(Math.random() * currentRequest);
  return randomNumber;
}

function fetchClothes() {
  //TODO finn for hver category som har eget tempArrays og se hva funker
  let weatherCondition = model.currentCondition[0].type;
  let seasonCondition = model.currentCondition[1].type;
  let currentCategory = "";
  console.log("været er", weatherCondition, "sesongen er", seasonCondition);
  for (find of model.clothing) {
    for (let i = 0; i < model.categories.length; i++) {
      currentCategory = model.categories[i];
      // console.log("index er", i);
      // console.log("kategori er", currentCategory);
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
  console.log(model.tempCategories)
}
function getCategory(index) {
  let myDamnCategory = model.categories[index];
  console.log(myDamnCategory);
  return myDamnCategory;
}
