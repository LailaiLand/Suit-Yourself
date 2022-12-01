const model = {
  view: document.getElementById("app"),

  clothing: [
    //TODO legg til mange plagg med forskjellige kriterier, gjerne 2 eller 3 alternativer per
    //kategori for hver sesong med forskjellige sesong- og værkriterier.
    // {
    //   name: '',
    //   img: '',
    //   category: '',
    //   season: [],
    //   weather: [],
    // },
    {
      //plaggets navn
      name: "Jeans",
      //TODO finn noen bilder. Helst i samme artstyle, men ikke nødvendig
      img: "bilde av jeans",
      //feet, legs, shirt, jacket, gloves, head
      category: "legs",
      //sesong den kan brukes
      season: ["spring", "fall"],
      //anbefalt for type vær. sunny, cloudy, windy, rainy
      weather: ["sunny", "cloudy", "windy"],
    },
    {
      name: "Jeans med stilongs",
      img: "bilde av jeans med stilongs",
      category: "legs",
      season: ["winter"],
      weather: ["sunny", "cloudy", "windy"],
    },
    {
      name: "Jeanshorts",
      img: "bilde av jeanshorts",
      category: "legs",
      season: ["summer"],
      weather: ["sunny", "cloudy", "windy"],
    },
    {
      name: "Regnbukse",
      img: "bilde av regnbukse",
      category: "legs",
      season: ["spring", "summer", "fall"],
      weather: ["rainy"],
    },
    {
      name: "Snowboardbukse",
      img: "bilde av snowboardbukse",
      category: "legs",
      season: ["winter"],
      weather: ["rainy"],
    },
  ],

  //TODO legg til en haug med weathers. Bruk litt (IKKE MYE!) tid på https://developer.yr.no/
  //for å finne ut hvor vanskelig det er å pulle reelle data. Randomizer funker for test uansett.
  weather: [
    {
      type: "sunny",
      img: "bilde av sol",
    },
    {
      type: "cloudy",
      img: "bilde av sky",
    },
    {
      type: "windy",
      img: "bilde av vind",
    },
    {
      type: "rainy",
      img: "bilde av regn",
    },
  ],

  //det er kjedelig å vente på riktig årstid, så enten randomizer eller ha en knapp til å velge
  season: [
    {
      type: "spring",
      img: "bilde av vår",
    },
    {
      type: "summer",
      img: "bilde av sommer",
    },
    {
      type: "fall",
      img: "bilde av høst",
    },
    {
      type: "winter",
      img: "bilde av vinter",
    },
  ],
  categories: ["feet", "legs", "shirt", "jacket", "head", "hands"],
  tempCategories: [[], [], [], [], [], []],
  currentOutfit: [],
  currentCondition: [],
};
