let num = [10, 20, 30, 45, 50, 33, 47, 36, 38, 24, 49, 67];
let par = 0;
let impar = 0;
let soma = 0;
let somaPar = 0;

for (let n = 0; n < num.length && num[n] > 0; n++){
    soma += num[n]; 
    if (num[n] % 2 == 0) {
        par++;
        somaPar += num[n]; 
    }else{
        impar++;
    }
    
}
document.write('media dos valores pares: ', (somaPar/par).toFixed(3), `<br>`);
document.write('media dos valores: ', (soma/num.length).toFixed(3), `<br>`);
document.write('quantidade de valores pares: ', par, `<br>`);
document.write('quantidade de valores impares: ', impar);
