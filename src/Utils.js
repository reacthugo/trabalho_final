export function ConvertToMoneyNumber(numero) {
    let numeroFormat = numero.toFixed(2).split('.');
    numeroFormat[0] = numeroFormat[0].split(/(?=(?:...)*$)/).join('.');
    return numeroFormat.join(',');
};