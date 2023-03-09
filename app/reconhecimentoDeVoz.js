window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition ()
const elementoChute = document.querySelector('#chute')
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener("result", (evento) => {
    const chute = evento.results[0][0].transcript
    exibeChuteTela(chute)
    validandoNumero(chute)
    
    
})

function exibeChuteTela (entrada){
    
    elementoChute.innerHTML = `
    <div>Você disse:</div>
        <span class="box">${entrada}</span>`
}

recognition.addEventListener('end', ()=> {
    recognition.start()
})