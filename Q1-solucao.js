let numeros = [9, 3, 288, 15, 21, 100];
let soma = 0;
for(let n = 0; n < numeros.length; n++){
    if(numeros[n] >= 1 && numeros[n] < 500){
        
        if ((numeros[n] % 2 !== 0 && numeros[n] % 3 === 0)) {
            soma += numeros[n];   
        }
    }
     
   
}
document.write('Soma: ', soma);














