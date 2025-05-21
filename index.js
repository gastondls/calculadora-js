function calcular(operador) {
    const oper1 =parseFloat(document.getElementById('operando1').value);
    const oper2 =parseFloat(document.getElementById('operando2').value);
    let resultado = 0;

    if (isNaN(oper1) || isNaN(oper2)) {
    resultado = 'Ingrese números válidos';
    } else {
    switch (operador) {
    case '+':
        resultado = oper1 + oper2;
        break;
    case '-':
        resultado = oper1 - oper2;
        break;
    case '*':
        resultado = oper1 * oper2;
        break;
    case '/':
        resultado = oper2 !== 0 ? oper1 / oper2 : 'No se puede dividir por 0';
        break;
    }
}
document.getElementById('resultado').textContent = resultado;
}