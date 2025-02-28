let av1 = 2.0;
let av2 = 5.0;
let recup1 = 8.0;
let recup2 = 10.0;
let nota1;
let nota2;
let media;

/*
if(recup1 > av1) {
    nota1 = recup1
} else {
    nota1 = av1
}
if(recup2 > av2) {
    nota2 = recup2
} else {
    nota2 = av2
}
*/
// variável = condição ? verdadeiro : falso
nota1 = recup1 > av1 ? recup1 : av1
nota2 = recup2 > av2 ? recup2 : av2
console.log(nota1 + " - " + nota2)
media = (nota1 + nota2) /2
/*
if(media >= 6.0){
    console.log("Aluno aprovado, com nota " + media)
} else {
    console.log("Aluno reprovado, com nota " + media)
}
*/
console.log(media>=6 ? "Aluno aprovado, com nota " + media : "Aluno reprovado, com nota " + media)
/* A escola adota uma recuperação para cada avaliação, 
que substitui a nota do aluno caso seja maior que 
sua nota anterior.
Dada as seguintes notas, calcule a média simples 
do aluno e diga se ele está aprovado ou reprovado, 
levando em consideração a substituição de notas. */