var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg=loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg=loadAnimation("Jake1.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
  var path=createSprite(200,200);
  path.addImage(pathImg);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY=5;
path.scale=0.5;

//crie um sprite de menino
var boy=createSprite(200,300);
//adicione uma animação de corrida para ele
boy.addAnimation(boyImg);
boy.scale=0.08;
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
