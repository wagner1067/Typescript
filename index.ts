/*const nome:string = 'wagner'
const numero:number = 10

console.log(numero)
console.log (nome)*/


//Dados Primitivos

/*const texto:string = 'Olá Mundo!'
const nome:string = 'Bem-vindo,Wagner!' Se Quiser somar so mudar para Number e tirar o ''

var saudacao = texto + nome 

console.log (saudacao)*/

//Dados Primitivos

/* const texto:number = 1.7
const nome:number = 1

var saudacao = texto + nome 

console.log (saudacao)
console.log (typeof(saudacao))

var boleano: boolean = false
boleano = true

console.log (boleano) */


//Arrays e Tuplas 
/* const pares:number[] = [2, 4, 6, 8, 10]

const linguagens: readonly string[] = ['html', 'css', 'js', 'react']

/* linguagens.push('typescript')
linguagens.push('Java') */

/* console.log(linguagens)

var tupla:[string, number, boolean] = ['Aqui vai um texto!', 10, true]
tupla.push('nova variárel')

console.log(tupla)
console.log (typeof(tupla))  */


///////////////////
//Objetos

/* const user:{nome:string, email:string, senha:number} = {
    nome:'Wagner',
    email:'barra-waf@hortaoa.com',
    senha:1234

}
user.nome= 'DNC'

console.log(user.nome) */

///////////
//type alias e Interfacer
// se quiser colocar algo não opcional so colocar a (?)
// se quiser mudar para o type para Interface

interface Usuario {
    name: string,
    email: string,
    password?: number,
}

const user1: Usuario = {
    name:'Wagner',
    email:'barra-waf@hortao',
    password: 1234
}


const user2: Usuario = {
    name:'Gabriele',
    email:'gabi@hortao',
    password: 1234
}



console.log (user2.password)

//Any, union type 
type typeId = string | number

var x: unknown

x= 7
console.log (x)

x= 'wagner'
console.log(x)

// Enum

enum Tamanho {
    P= 'pequena',
    M= 'Média',
    G= 'Grande'
}

const Camiseta = {
    Nome: 'Camisa branca',
    tamanho: Tamanho.M
}

console.log(Camiseta.tamanho)