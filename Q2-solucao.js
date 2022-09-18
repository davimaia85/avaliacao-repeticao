let altura = [1.85, 1.99, 1.46, 1.67, 1.34, 1.87, 0.99, 1.12, 1.74, 1.77, 1.85, 2.03, 2.08, 1.76, 1.57];
let n;
let maior = 0;
let menor = 3;
for(n = 0; n < altura.length; n++){
    if( altura[n] > maior){
        maior = altura[n];
    }
    if( altura[n] < menor){
        menor = altura[n];
    }
}

document.write('Maior altura do grupo: ', maior, `<br>`);
document.write('Menor altura do grupo: ', menor);