fetchConditions();
function fetchConditions(){
    let randomWeather = model.weather[getRandom(model.weather.length)];
    let randomSeason = model.season[getRandom(model.season.length)];
    model.currentCondition.push(randomWeather);
    model.currentCondition.push(randomSeason);
}
function getRandom(currentRequest) {
  randomNumber = Math.floor(Math.random() * currentRequest);
  console.log("randomnumber er", randomNumber);
  return randomNumber;
}
function fetchClothes() {
  //TODO finn for hver category som har eget tempArrays og se hva funker
  let weatherCondition = model.currentCondition[0].type;
  let seasonCondition = model.currentCondition[1].type;
  console.log("været er",weatherCondition,"sesongen er",seasonCondition);
  for (find of model.clothing) {
    console.log("dette plagget kan brukes når det er",find.weather,"og det er", find.season)
    //TODO lage array med all categories så kan loope med navn og index
    if (find.category == "legs") {
      if (find.weather.includes(weatherCondition) && find.season.includes(seasonCondition)) {
        model.tempArrays[1].legs.push(find);
        console.log("valgt plagg er", model.tempArrays[1].legs);
      }
    }
  }
}