//código do carro

let xCs = [495, 495, 495, 495, 495, 495];
let yCs = [40, 96, 150, 210, 270, 318];
let vCs = [2, 2.5, 3.2, 5, 3.3, 2.3];
let cC = 50;
let hC = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCs[i], yCs[i], cC, hC);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCs[i] -= vCs[i];
  }
}

function voltaInicio(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCs[i])){
      xCs[i] = 495;
    }
  }
}

function passouTodaATela(xC){
  return xC < - 30;
}