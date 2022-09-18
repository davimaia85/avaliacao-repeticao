
let numero = [1, -5, 6, 9, -10, -14, 26, -7, 8, 32, 44, 0];
let soma = 0;
let nPositivos = 0;
let nNegativos = 0;
let conta = 0;
for (let n = 0; n < numero.length; n++){//percorrer o array
    soma = soma + numero[n]; // soma += numero[n]
    if (numero[n] >= 0) {
        conta++;
        nPositivos = conta; 
    }
}
nNegativos = numero.length - nPositivos;
document.write("media: ", (soma/numero.length).toFixed(4), `<br>`);
document.write("qtd positivos: ", nPositivos, `<br>`);
document.write("qtd negativos: ", numero.length - nPositivos, `<br>`);
document.write("percentual positivos:  ", ((nPositivos/numero.length)*100).toFixed(2),'%', `<br>`);
document.write("percentual negativos:  ", ((nNegativos/numero.length)*100).toFixed(2), '%');
