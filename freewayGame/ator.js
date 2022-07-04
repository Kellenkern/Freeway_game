//código do ator
let xA = 85;
let yA = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xA, yA, 30, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yA -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yA += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i+=1){
    colisao = collideRectCircle(xCs[i], yCs[i], cC, hC,xA, yA, 15)
    if (colisao){
      voltaAInicio();
      somColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAInicio(){
  yA=366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yA < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yA < 366;
}