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
   
    let adultos = inputAdulto.value
    let criancas = inputCrianca.value
    let tempo = inputTempo.value

    let qtdeTotCarne = carnePp(tempo) * adultos + (carnePp(tempo)/ 2 * criancas)

    let qtdeTotCerveja = cervejaPp(tempo) * adultos

    let qtdeTotBebida = refrigerantePp(tempo) * adultos + (refrigerantePp(tempo)/ 2 * criancas)

    resultado.innerHTML = `<p>${qtdeTotCarne/1000}kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdeTotCerveja/355)} latas de cerveja.</p>`
    resultado.innerHTML += `<p>${qtdeTotBebida/1000}l de bebidas.</p>`
}

function carnePp(tempo){
    if (tempo >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejaPp(tempo){
    if (tempo >= 6){
        return 2000
    } else {
        return 1200
    }
}

function refrigerantePp(tempo){
    if (tempo >= 6){
        return 1500
    } else {
        return 1000
    }
}
