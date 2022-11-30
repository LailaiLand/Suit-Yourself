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
    //TODO pushe alt kompatibelt fra hver kategori i tempArrays, randomisere hver tempArrays og hente ut 1,
    // skrive random in i HTML, pushe hele lista med valgt til currentOutfit tempArrays for bruk i changeArticle()
    let html = `
    <h1>Suit Yourself!</h1>
    `;
    fetchClothes();
    // sortClothes();
    model.view.innerHTML = html;
}

