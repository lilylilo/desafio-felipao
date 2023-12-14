let nomeDoHeroi = "Lily";
let quantidadeXP = 5000;

let nivel;

if (quantidadeXP < 1000) {
    nivel = ("Ferro");
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
    nivel = ("Bronze");
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
    nivel = ("Prata");
} else if (quantidadeXP >= 6001 && quantidadeXP <= 7000) {
    nivel = ("Ouro");
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
    nivel = ("Platina");
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
    nivel = ("Ascendente");
} else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
    nivel = ("Imortal");
} else if (quantidadeXP >= 10001) {
    nivel = ("Radiante");
} else {
    nivel = ("Algo deu erro, digite novamente.");
}

console.log("O Herói de nome " + nomeDoHeroi, "está no nível de " + nivel);