const maiorValor = 1000
const menorValor = 1
const numeroSecreto= gerarNumeroAleatorio()

function gerarNumeroAleatorio (){
    return parseInt(Math.random()*maiorValor +1)
}
console.log(numeroSecreto)

const maior = document.querySelector('#maior-valor')
maior.innerHTML = maiorValor
const menor = document.querySelector('#menor-valor')
menor.innerHTML = menorValor
