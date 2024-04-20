/*
//String


let nomeUsuario = "José"

console.log(nomeUsuario)
console.log('Hello World, "xD"')
console.log(`Welcome, professor(a), ${nomeUsuario}`)
nomeUsuario = prompt("Digite o seu nome: ")
console.log(`seu nome é : ${nomeUsuario}`)

//Number

let idade = 29

console.log(`seu nome é : ${nomeUsuario} e sua idade é ${idade}`)
idade = prompt ("Digite sua idade:")
console.log(`seu nome é : ${nomeUsuario} e sua idade é ${idade}`)

let peso = 101.5

peso = prompt( "Digite seu peso: ")
console.log (`seu nome é : ${nomeUsuario} e sua idade é ${idade} e seu peso é ${peso}kg`)

//boolean

let condicaoVerdadeira = true
let condicaoFalsa = false

console.log(condicaoVerdadeira, condicaoFalsa)
*/

// OPERADORES ARITIMÉTICOS
/*
let soma 
soma = 25 + 10
console.log(`O Resultado é ${soma}`)

let subtracao
subtracao=25 - 10
console.log(`O Resultado é ${subtracao}`)

let multiplicacao
multiplicacao=10 * 15
console.log(`O Resultado é ${multiplicacao}`)

let divisao
divisao=15 / 10
console.log(`O Resultado é ${divisao}`)

let restante
restante= 25 % 10
console.log(`O Resultado é ${restante}`)
*/
// ESTRUTURAS CONDICIONAIS

/*
let numero ;
numero = prompt ("Digite um numero :")
    if((numero % 2) == 0){
        console.log("O Numero é PAR");
     }
    else{
    console.log("O Numero é ÍMPAR");
}


let idade ;
idade = prompt("Digite sua idade: ")
    if (idade >= 18 ){
        console.log("O Usuário é maior de idade");
}
    else{
        console.log ("O Usuário é menor de idade");
}

//OPERADORES LOGICOS
if(idade <12 ){
    console.log("Você é uma criança");
    }
else if (idade >= 18 && idade <= 40 ){
    console.log("Você é um JOVEM!");
}   
else{
    console.log("Você é um VELHO");
} 

let numero2 = 34;
if(numero2 > 20 || numero2 < 30){
    console.log (numero2);
}

let valor = true;
console.log(!valor);

//VETORES
//NUMBER
let variavel="20";
console.log(Number(variavel));
// ARRAY
let array = [1,2,3];
console.log(array[0]);
console.log(array[2]);
console.log(array[1]);

*/
// FOR ( REPETIÇÃO)

for(let i = 0; i < 5 ; i = i + 1){
    console.log(i);
}

let i = 0

while (i <10){
    console.log(i)
    i = i +1
}
// FUNCTION

function soma(numero1, numero3){
    let somaNumeros;
    somaNumeros= numero1 + numero3;
    return somaNumeros;

}