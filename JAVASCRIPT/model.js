const model = {
    view: document.getElementById('app'),

    clothing: [
        //TODO legg til mange plagg med forskjellige kriterier, gjerne 2 eller 3 alternativer per
        //kategori for hver sesong med forskjellige sesong- og værkriterier.
      {
        //plaggets navn
        name: '',
        //TODO finn noen bilder. Helst i samme artstyle, men ikke nødvendig
        img: '',
        //feet, legs, shirt, jacket, gloves, head
        category: '',
        //sesong den kan brukes
        season: [],
        //anbefalt for type vær. sunny, cloudy, windy, rainy
        weather: [],
      },
    ],

    //TODO legg til en haug med weathers. Bruk litt (IKKE MYE!) tid på https://developer.yr.no/
    //for å finne ut hvor vanskelig det er å pulle reelle data. Randomizer funker for test uansett. 
    weather: [],
    
    //det er kjedelig å vente på riktig årstid, så enten randomizer eller ha en knapp til å velge
    season: ['spring', 'summer', 'fall', 'winter',]
}