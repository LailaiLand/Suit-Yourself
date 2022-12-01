//TODO legg til CSS.
startScreen();
function startScreen(){
    let html = '';
    let randomWeather = model.currentCondition[0];
    let randomSeason = model.currentCondition[1];
    html += /*html*/`
    <h1>Suit Yourself!</h1>
    <div>${randomWeather.img}</div>
    <div>${randomSeason.img}</div>
    <button onclick="suitUpScreen()">Suit Up!</button> <br>
    <button onclick="wardrobeScreen()">Wardrobe</button>
    `;

    model.view.innerHTML = html;
};
function suitUpScreen(){
   //TODO legge til onclick i sortClothes så kan velge hele tempCategory plagget ligger på
   //så kan bytte med noe annet som passer conditions
    let html = `
    <h1>Suit Yourself!</h1>
    `;
    fetchClothes();
    html += sortClothes();

    model.view.innerHTML = html;
}
function wardrobeScreen(){
    //TODO lage fillWardrobe som har argument for å hente sesong fra madel.season
    //loop ghennom clothing og legg bilder av klær i div med fillindex som id
    let html = /*html*/`
    <h1>Suit Yourself!</h1>
    <button onclick="fillWardrobe(0)">Spring clothes</button>
    <div id="fill0"></div>
    <button onclick="fillWardrobe(1)">Summer clothes</button>
    <div id="fill1"></div>
    <button onclick="fillWardrobe(2)">Fall clothes</button>
    <div id="fill2"></div>
    <button onclick="fillWardrobe(3)">Winter clothes</button>
    <div id="fill3"></div>
    `
}

