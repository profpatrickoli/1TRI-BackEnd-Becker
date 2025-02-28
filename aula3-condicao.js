// CONDIÇÃO
/* se (condição) { 
    código aqui 
} se não {
    código aqui }
*/
let idade = 20
let possuiCNH = false
if(idade >= 18 && possuiCNH == true) {
    console.log("Você pode dirigir!")
} else {
    console.log("Ande de ônibus ou Uber!")
}

/* TABELA VERDADE:
Para operador E:    |    operador OU:
V V = V             |   V V = V
V F = F             |   V F = V
F V = F             |   F V = V
F F = F             |   F F = F
*/