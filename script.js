// Carne = 400g por pessoa / + de 6h = 650g
// Cerveja = 1200ml por pessoa / + de 6h = 2000ml
// Refrigerante/água = 1000ml por pessoa / +de 6h =1500ml

// Crianças contam metade

let inputAdulto = document.getElementById("adulto")
let inputCrianca = document.getElementById("crianca")
let inputTempo = document.getElementById("tempo")

// console.log(inputAdulto.value, inputCrianca.value, inputTempo.value)

let resultado = document.getElementById("resultado")

function calcular(){
    // console.log("calculando")

    let adultos = inputAdulto.value
    let criancas = inputCrianca.value
    let tempo = inputTempo.value

    let qtdeTotCarne = carnePp(tempo) * adultos + (carnePp(tempo)/ 2 * criancas)
    console.log(qtdeTotCarne)
}

function carnePp(tempo){
    let carne = 400
    if (tempo >= 6){
        return 650
    } else {
        return 400
    }
}
    

