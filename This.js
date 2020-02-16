var x ={
    prop: 35,
    f: function (){
        return this.prop; //this es x y prop es la prop de x.
    },

    a: () => {
        return x.prop;   //En esta arrow ya no utilizamos this porque esta fuera del scope.
    }
}
// console.log(a.f());

const y = Object.create(x) //las constantes si permiten que un primitivo no cambie, pero en un objeto 
    y.b=3;                     //mientras no se cambie la dirección en memoria, si puede cambair de valor.

//Anadir funciones
x.arrfunc = () => console.log("Hola Arrow Function");

x.func = function(){
    console.log("Hola función normal")
}
x.arrfunc();
x.func();

//Iterar sobre un objeto (Hacer suma)
var x ={
    valor1: 35,
    valor2: 50,
    valor3: 20
}
console.log(Object.keys(x));

// function sumar(obj){
//     return Object.keys(obj).reduce(((current, x) => current + obj[x]),0)
// }
// console.log(sumar(Object.keys(x)));

//Función sumar con arreglos
function sumar(arr){
    return arr.reduce(((current, x) => current + x),0)
}
const valore = Object.keys(x).map((prop) => x[prop])
console.log(sumar(valores));

//Función suamr en arreglos
if(!Array.property.hasOwnProperty("adding")){
    Object.defineProperty(Array.prototype,"adding",{
        value: function(){
            return this.reduce((current, x) => current + x, 0)
        }
    })
};