var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

   block1= createSprite(0,580,360,30)
   block1.shapeColor="Blue"

   block2= createSprite(295,580,200,30)
   block2.shapeColor="Green"

   block3= createSprite(515,580,200,30)
   block3.shapeColor="Yellow"

   block4= createSprite(740,580,200,30)
   block4.shapeColor="Pink"

   ball= createSprite(random(20,750),100,40,40)
   ball.shapeColor= "White"
   ball.velocityX= 7
   ball.velocityY= 8


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges= createEdgeSprites()
   ball.bounceOff(edges)

   if(block1.isTouching(ball) && ball.bounceOff(block1))
   { ball.shapeColor = "blue"; music.play(); }

   if(block2.isTouching(ball) && ball.bounceOff(block2))
   { ball.shapeColor = "Green"; music.play(); }
   
   if(block3.isTouching(ball) && ball.bounceOff(block3))
   { ball.shapeColor = "Yellow"; music.play(); }

   if(block4.isTouching(ball) && ball.bounceOff(block4))
   { ball.shapeColor = "Pink"; music.play(); }


   drawSprites()


    //add condition to check if box touching surface and make it box
}
