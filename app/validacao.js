// validações, é numero? ultrapassa os limites maximos e minimos? Acertou o numero? Errou mas esta no range? dica é maior ou menor?

function validandoNumero(chute){
    
    if (chute == "game over"){
        document.body.innerHTML = `<div><h1>Game Over!</h1></div>
        `
    }
    console.log(chute)
    
    const numero = +chute
    if(seNaoENumero(numero)){
    elementoChute.innerHTML += `<div> Valor inválido!</div>`
    return
    }
    if(numeroForaDoRange(numero)){ 
    elementoChute.innerHTML += `<div> Valor inválido: Diga um numero entre ${menorValor} e ${maiorValor}.</div>` 
    return
    }if(numero === numeroSecreto){
        document.body.innerHTML = ` <div><h2> Você acertou!</h2>
        <h3>O número secreto é ${numero}</h3>
        </div>

        <button id="reiniciar" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`

    }

}


function seNaoENumero(valor){

    return Number.isNaN(valor)
}
function numeroForaDoRange(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", (evento)=>{
   
   console.log(evento.target.id)
    if(evento.target.id == "reiniciar"){
        window.location.reload()
    }
})