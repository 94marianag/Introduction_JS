const Factura = {
    sucursal: "Oblatos",
    vendedor: "Pedro",
    precioTotal: function(){ //Funcion de sumar
        return this.articulos.
        map((x) => x.precio * x.cantidad).reduce(current, x => current + x, 0);
    },       
    liquidar: function(balance){
        return balance - this.precioTotal();
    },
    mostrarTotal: function(){
        return `$${this.precioTotal().toFixed(2)}`;
    }
};

const Electronico = function(obj){
    return{
        id: obj.id || 0,
        nombre: obj.name || "",
        precio: obj.precio || 200,
        cantidad: obj.cantidad || 0
    }
}

//Objeto FacturaComestibles
const Comestible = function(obj){
    return{
        id: obj.id || 0,
        nombre: obj.name || "",
        precio: obj.precio || 200,
        cantidad: obj.cantidad || 0,
        calidad: obj.calidad || 0,
        frescura: obj.frescura || 0
    }
}

//Funcion para generar valores random para Electronicos
const getItemsElec = function(cantidad){
    const array = [];
    for(let i = 0 ; i < cantidad; i++){
        array.push(new Electronico({
            id: i + 1,
            name: `FacElec${i + 1}`,
            precio: parseFloat((Math.random() * (200 - 1) + 1).toFixed(2),2),
            cantidad: parseInt((Math.random() * (20 - 1) + 1))
        })
    );
}
    return array;
};
//console.log(getItemsElec(5));

//Funcion para generar valores random para Comestibles
const getItemsComes = function(cantidad){
    const array = [];
    for(let i = 0 ; i < cantidad; i++){
        array.push(new Comestible({
            id: i + 1,
            name: `FacElec${i + 1}`,
            precio: parseFloat((Math.random() * (200 - 1) + 1).toFixed(2),2),
            cantidad: parseInt((Math.random() * (20 - 1) + 1)),
            calidad: parseInt((Math.random() * (5 - 1) + 1)),
            frescura: parseInt((Math.random() * (5 - 1) + 1))
        })
    );
}
    return array;
};
//console.log(getItemsComes(5));


const FacturaElectronicos = function(id, nombre){
    let item = Object.create(Factura);
        item.id = id;
        item.nombre = nombre;
        item.articulos = getItemsElec(10);
return item;
};


const FacturaComestibles = function(id, nombre){
    let item = Object.create(Factura);
    item.id = id;
    item.nombre = nombre;
    item.articulos = getItemsComes(10);
    //Indice de calidad
    item.indiceCalidad = function (){
       const x = this.articulos.reduce(
           (current, y) => {
           return (current = {
            frescura: current.frescura + y.frescura,
            calidad: current.calidad + y.calidad
           });
        }, 
        {frescura: 0, calidad: 0}
    );
    return Math.ceil((x.frescura + x.calidad) / 2 )/ this.articulos.length;
    }
return item;
};
const facturaEneroElec = new FacturaElectronicos(1, "Enero");
const facturaEneroComes = new FacturaComestibles(1, "Enero");
console.log(facturaEneroComes.indiceCalidad());