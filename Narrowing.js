"use strict";
function Validador(CPF) {
    if (typeof (CPF) === 'number') {
        console.log('O dado precisa ser tratado!');
    }
    else {
        console.log('O dado está Ok!');
    }
}
const CPFA = '789.456.123-45';
const CPFB = 78945612345;
Validador(CPFA);
Validador(CPFB);
