var x ={
    valor1: 35,
    valor2: 50,
    valor3: 20
}
const newArray = Object.keys(x).filter(y => typeof x[y] == "number").map((y) => x[y]);
console.log(newArray);

//Validación con usuarios
const user = {
    name: "",
    email:"",
    login: function(){
        alert(`Hi ${this.name}`);
    },
    logout: function(){
        alert(`Bye ${this.name}`)
    }
};
// let admin = Object.create(user); //Crear un nuevo objeto admin en base a user.
//     admin.sales = 5000;
//     admin.checkSales = function(){
//         alert(`You sold$${this.sales}`);
//     }

// let customer = Object.create(user);
//     customer.balance = 500;
//     customer.checkBalance = function(){
//         alert(`You have $${this.balance}`)
//   
//  }
//console.log(customer.checkBalance());

//////////////////////////////////////////////////////////////////////////////////////////////
//Fabrica de customers
let Customer = function(name, email = "usuario@gmail.com"){
const customer = Object.create(user);
customer.name = name || "Usuario",
customer.email = email,
customer.balance = 500,
customer.checkBalance = function(){
    alert(`You have $${this.balance}`)
}
return customer;
}
const a= new Customer("Mariana","mar@gmail.com")
console.log(a);
