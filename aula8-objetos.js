let nomeLanches = ["x-burguer", "x-salada", "x-tudo"];
let precos      = [     50   ,     64    ,    320  ];
let ingredientes = [
    ["pão", "queijo", "hambúrguer"],
    ["pão", "queijo", "hambúrguer", "alface"],
    ["pão", "queijo", "hambúrguer", "alface", "tudo"]
]
// Array bidimensional:
let cardapio = [nomeLanches, precos, ingredientes];

console.log("Lanche: " + cardapio[0][0] + " - Preço:" + cardapio[1][0]);
console.log("Ingredientes: "+ cardapio[2][0])

// OBJETOS
let lanches = [
    {
        nome: "x-burguer",
        preco: 50,
        ingredientes: ["pão", "queijo", "hambúrguer"]
    },
    {
        nome: "x-salada",
        preco: 64,
        ingredientes: ["pão", "queijo", "hambúrguer", "salada"]
    },
    {
        nome: "x-tudo",
        preco: 320,
        ingredientes: ["pão", "queijo", "hambúrguer", "salada", "tudo"]
    }
]
console.log("Nome: " + lanches[0].nome + " - Preço: " + lanches[0].preco);
console.log("Ingredientes: " + lanches[0].ingredientes);
// node nome_arquivo.js










