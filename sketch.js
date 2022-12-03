var path,menininho, leftBoundary,rightBoundary;
var pathImg,menininhoImg;
var i;


function preload(){
pathImg = loadImage("path.png");
menininhoImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

 path=createSprite(200,200)
 path.addImage(pathImg)
 path.velocityY = 2
 path.scale=1.2
// Movendo o fundo 




//Criando menino que corre 
menininho = createSprite(200,200)
menininho.addAnimation("menininho",menininhoImg)
menininho.scale = 0.04


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false;

//Crie Boundary direito 

}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
menininho.x = World.mouseX

edges= createEdgeSprites();
menininho.collide(edges[3]);
menininho.collide(leftBoundary)
menininho.collide(rightBoundary)

 //Reiniciar o fundo
 if (path.y > 400) {
    path.y = height/2
 }



 drawSprites();

 }




