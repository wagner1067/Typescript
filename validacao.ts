/* let validador :'autenticado'| null;

validador= 'autenticado'


if ( validador === 'autenticado'){
    console.log ('Você está liberado')
}else {
    console.log ('Você não possui permissão')
} */

//Null e Undefiened

let validador :'autenticado'| undefined


if ( validador === 'autenticado'){
    console.log ('Você está liberado')
}else {
    console.log (typeof(validador))
    console.log (validador)
}