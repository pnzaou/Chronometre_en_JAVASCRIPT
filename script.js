const mes_spans = document.querySelectorAll('span')
const bouton_debut = document.querySelector('#start')
const bouton_fin = document.querySelector('#stop')
const bouton_reset = document.querySelector('#reset')
let ms = 0, sec = 0, min = 0, h = 0, interval

onload = function(){
    mes_spans[0].innerText = "0 h"
    mes_spans[1].innerText = "0 min"
    mes_spans[2].innerText = "0 s"
    mes_spans[3].innerText = "0 ms"
    bouton_reset.setAttribute('style', 'background-color:#d2d2d2;')
}

bouton_debut.onclick = debut
bouton_fin.onclick = pause
bouton_reset.onclick = reset

function incrementation(){
    ms += 1
    if(ms === 10){
        ms = 1
        sec += 1
    }
    if(sec === 60){
        sec = 0
        min += 1
    }
    if(min === 60){
        min = 0
        h += 1
    }

    mes_spans[0].innerText = `${h} h`
    mes_spans[1].innerText = `${min} min`
    mes_spans[2].innerText = `${sec} s`
    mes_spans[3].innerText = `${ms} s`    
}

function debut(){
    interval = setInterval(incrementation, 100)
    bouton_debut.disabled = true
    bouton_debut.setAttribute('style', 'background-color:#d2d2d2;')
    bouton_reset.disabled = false
    bouton_reset.setAttribute('style', 'background-color:#50C7C7;')
}

function pause(){
    clearInterval(interval)
    bouton_debut.disabled = false
    bouton_debut.setAttribute('style', 'background-color:#50C7C7;')
}

function reset(){
    clearInterval(interval)
    mes_spans[0].innerText = "0 h"
    mes_spans[1].innerText = "0 min"
    mes_spans[2].innerText = "0 s"
    mes_spans[3].innerText = "0 ms"
    bouton_debut.disabled = false
    bouton_debut.setAttribute('style', 'background-color:#50C7C7;')
    bouton_reset.disabled = true
    bouton_reset.setAttribute('style', 'background-color:#d2d2d2;')
    ms = 0, sec = 0, min = 0, h = 0
}