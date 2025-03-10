// LISTAS 
// índice da lista sempre começa em 0
let esportes = ["volei", "badminton", "ping-pong", "futsal", "xadrez", "uno", "damas"]
let valores = [10, 50, 4, 0, 2, 30, 10]
// Mostrando os esportes e valores
contador = 0;
while(contador < esportes.length){
    let c2 = contador + 1
    console.log(c2 + " - " + esportes[contador] + " R$ " +  valores[contador])
    contador = contador + 1;
}

// Adicionando um novo item a lista:
esportes.push("queimada");
console.log(esportes);

// Remover item de uma lista: 
esportes.pop();
console.log(esportes);

// Remover um item específico da lista:
// (0, 1) A partir do índice 0, remove 1 item
esportes.splice(0,1);
console.log(esportes);

// Realizar uma operação em todos os elementos:
let valoresAtualizados = valores.map((valor) => valor - (valor*0.10));
console.log(valoresAtualizados)







