//BOOLEAN.JS
let estudantes = true;
let estudiosos = false;
let valor = 0;
if(estudantes){
    console.log("Tem direito a meia entrada!");
} else {
    console.log("Pague inteira!");
}
/* OPERADORES JAVASCRIPT
Operador de igualdade:
Compara apenas o valor */
console.log(true == 1); // -> true
console.log(false == 0); // -> true
console.log("1" == 1); // -> true
// Operador de igualdade estrita:
// Compara valor e tipo do dado 
console.log(true === 1); // -> false
console.log(false === 0); // -> false
console.log("1" === 1); // -> false
