let intervalo = [23, 14, 5, 15, 50, 10, 6, 100, 63, 77, 42, 34, 27, 30, 52, 99, 82];
let conta = 0;
let conta1 = 0;
let conta2 = 0;
let conta3 = 0;
for (let n = 0; n < intervalo.length && intervalo[n] >= 0; n++){
    
    if (intervalo[n] >= 0 && intervalo[n] <= 25) {
        conta++;  
    } 
    if (intervalo[n] >= 26 && intervalo[n] <= 50) {
        conta1++;  
    } 
    if (intervalo[n] >= 51 && intervalo[n] <= 75) {
        conta2++;  
    } 
    if (intervalo[n] >= 76 && intervalo[n] <= 100) {
        conta3++;  
    } 
}
document.write('numeros do intervalo 0 - 25: ', conta, `<br>`);
document.write('numeros do intervalo 26 - 50: ', conta1, `<br>`);
document.write('numeros do intervalo 51 - 75: ', conta2, `<br>`);
document.write('numeros do intervalo 75 - 100: ', conta3);