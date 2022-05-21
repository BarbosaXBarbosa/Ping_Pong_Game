//raquete
let xRaquete = 7;
let yRaquete = 200;
let widthRaquete = 10;
let heightRaquete = 50;


//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//movimentobolinha
let movimentoxBolinha = 5;
let movimentoyBolinha = 5;


//raqueteAdversaria
let xRaquete2 = 583;
let yRaquete2 = 200;
let velocidadeYAdversario;

let collided = false;

//placar jogo
let myPoint = 0;
let opponentPoint = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload()
{
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  //bolinha
  mostraBolinha();
  movimentarBolinha();
  verificaColisaoBorda();
  
  //raquete
  mostraRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  collisionRectBall(xRaquete, yRaquete); 
  
  //raquete2
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaRaqueteAdversaria();
  collisionRectBall(xRaquete2, yRaquete2); 
  
  //scoreboard
  showScoreboard();
  score();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}


function movimentarBolinha(){
  xBolinha += movimentoxBolinha;
  yBolinha += movimentoyBolinha;
}

function verificaColisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0) {
    movimentoxBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    movimentoyBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, widthRaquete, heightRaquete);
}
  
function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 6;
  } 
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 6;
  }
}

//Check if ball collides with paddle (Library p5.collide2d)
function collisionRectBall(x, y) 
{
  collided = collideRectCircle(x, y, widthRaquete, heightRaquete, xBolinha, yBolinha, raio);
  if (collided) {
    movimentoxBolinha *= -1;
    raquetada.play();  
  }
}

function movimentaRaqueteAdversaria()
{
  velocidadeYAdversario = yBolinha -yRaquete2 - widthRaquete / 2 -30;
  yRaquete2 += velocidadeYAdversario;
}

function showScoreboard()
{
  fill (255);
  textAlign(CENTER);
  textSize(16);
  text(myPoint, 270, 26);
  text(opponentPoint, 330, 26);
}

//Increase scoreboard on hit
 function score() 
 {
  if(xBolinha  > 589) {
    myPoint ++;
    ponto.play();
  }
  if(xBolinha - raio < 001) {
    opponentPoint ++;
    ponto.play();
  } 
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
