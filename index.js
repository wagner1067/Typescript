"use strict";
/*const nome:string = 'wagner'
const numero:number = 10

console.log(numero)
console.log (nome)*/
const user1 = {
    name: 'Wagner',
    email: 'barra-waf@hortao',
    password: 1234
};
const user2 = {
    name: 'Gabriele',
    email: 'gabi@hortao',
    password: 1234
};
console.log(user2.password);
var x;
x = 7;
console.log(x);
x = 'wagner';
console.log(x);
// Enum
var Tamanho;
(function (Tamanho) {
    Tamanho["P"] = "pequena";
    Tamanho["M"] = "M\u00E9dia";
    Tamanho["G"] = "Grande";
})(Tamanho || (Tamanho = {}));
const Camiseta = {
    Nome: 'Camisa branca',
    tamanho: Tamanho.M
};
console.log(Camiseta.tamanho);
