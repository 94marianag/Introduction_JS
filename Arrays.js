const array = [
    {
    name: "Mariana",
    tel: "33134859", 
    gender: "Female", 
    location: "Gdl",
    },

    {
    name: "Nallely",
    tel: "334580",
    gender: "Female",
    location: "Campeche",
    },

    {
    name: "Fer",
    tel: "559032",
    gender: "Female",
    location: "Gdl",
    },

    {
    name: "Paco",
    tel: "219908",
    gender: "Male",
    location: "Guzman",
    },

    {
    name: "Lucia",
    tel: "249873",
    gender: "Female",
    location: "Tonala",
    }
];
//Función de Ordenamiento
const sorting = (data) => {
    data.sort((a, b) => {
    return a.name > b.name ? -1 : a.name < b.name ? -1 : 0;
    })
};

//Función de filtrado
const filtering = (data, prop, value, data1, prop1, value1) => {
    return data.filter(x => x[prop] === value) && data1.filter(y => y[prop1] === value1)
}

//Función de agrupación
const grouping = (data, prop) => {
   return data.reduce((current, x) => {
       if(!current[x[prop]]) {
         current[x[prop]] = [];
       }
       current[x[prop]].push(x);
       return current;
    },   {})
}

//Función Mapeo
const mappingColors = (data) => {
    return data.map(x => {
            return {...x, color: x.gender === "Male" ? "Red" : "Green"}        
    });
};

sorting(array);
const finalArray = grouping(mappingColors(filtering(array, "location", "Gdl", "name", "Mariana")), "gender");
console.log(finalArray);