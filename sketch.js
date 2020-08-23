var PLAY = 1;
var END = 0;
var START=2;
var gameState = PLAY;

var home,homeImage
//var back,backImage
var police,policeImage
var ambulance,ambulanceImage
var bloodbank,bloodbankImage
var childhelpline,childhelplineImage
var railalert,railalertImage
var womenhelpline2,womenhelpline2Image
var corona,coronaImage
var coronanumber,coronanumberImage
var findme,findmeImage

function preload() {
  homeImage=loadImage("images (4).jpeg")
 // backImage=loadImage("kissing-face-with-closed-eyes-emojis--emoji-73261.png")
  policeImage=loadImage("policetwo (2).png")
  ambulanceImage=loadImage("ambulance (1).png")
  bloodbankImage=loadImage("bloodbank (1).png")
  childhelplineImage=loadImage("childhelpline (1).png")
  railalertImage=loadImage("railalert (1).png")
  womenhelpline2Image=loadImage("womenhelpline2 (1).png")
  coronaImage=loadImage("stock-vector-coronavirus-icon-with-red-prohibit-sign-ncov-novel-coronavirus-bacteria-no-infection-and-1648329244.png")
 coronanumberImage=loadImage("Covid helpline.png")
 findmeImage=loadImage("find me (1).png")
}
function setup() {
 createCanvas(400, 400);

 
this.button = createButton("ALL EMERGENCY NUMBERS ");
this.hello=createButton("GET LOCATION ")
this.back=createButton("BACK")
home=createSprite(200,200)
home.addImage("firstscreen",homeImage)
home.scale=2.1



police=createSprite(191,26,40,40)
police.addImage("police",policeImage)
police.scale=0.6

ambulance=createSprite(191,83,40,40)
ambulance.addImage("ambulance",ambulanceImage)
ambulance.scale=0.6

bloodbank=createSprite(191,136,40,40)
bloodbank.addImage("bloodbank",bloodbankImage)
bloodbank.scale=0.6

childhelpline=createSprite(190,190,40,40)
childhelpline.addImage("childhelpline",childhelplineImage)
childhelpline.scale=0.6

railalert=createSprite(217,246,40,40)
railalert.addImage("railalert",railalertImage)
railalert.scale=0.6

womenhelpline2=createSprite(191,296,40,40)
womenhelpline2.addImage("womenhelpline2", womenhelpline2Image)
womenhelpline2.scale=0.6

corona=createSprite(73,359,40,40)
corona.addImage("corona",coronaImage)
corona.scale=0.2

//back=createSprite(183,357,40,40)
//back.addImage("back",backImage)

coronanumber=createSprite(300,350,40,40)
coronanumber.addImage("coronanumber",coronanumberImage)
coronanumber.scale=0.5

findme=createSprite(219,26,40,40)
findme.addImage("findme",findmeImage)
findme.scale=1.5

} 

function draw() {
  background("red")

  this.button.position(180,350,50,50)
  this.hello.position(20,350,100,50)
  this.back.position(183,380,40,40)

  if (gameState===PLAY){
    this.back.hide()

    back.visible=false
    police.visible=false
    ambulance.visible=false
    bloodbank.visible=false
    childhelpline.visible=false
    railalert.visible=false
    corona.visible=false
    womenhelpline2.visible=false
    coronanumber.visible=false
    this.button.mousePressed(()=>{
      gameState=START
    })
    this.hello.mousePressed(()=>{
      gameState=END
    })
    
  }


  if(gameState===START){
    this.back.show()
    this.button.hide()
    this.hello.hide()

   back.visible=true
   home.visible=false
   police.visible=true
   ambulance.visible=true
   bloodbank.visible=true
   childhelpline.visible=true
   railalert.visible=true
   womenhelpline2.visible=true
   corona.visible=true
   coronanumber.visible=true
   findme.visible=false

   background("white")

  

   this.back.mousePressed(()=> {
    this.button.show()
    this.hello.show()

      home.visible=true
      gameState=PLAY
      home.changeImage("firstscreen",homeImage)
      background("white")
      findme.visible=true
    })
  }

  

  if(gameState===END){
    this.back.show()
    this.button.hide()
    this.hello.hide()

    home.visible=false
    back.visible=true

    findme.visible=false

    background("black")

    this.back.mousePressed(()=> {
      this.button.show()
    this.hello.show()
    
      gameState=PLAY
      home.changeImage("firstscreen",homeImage)
      background("white")
      home.visible=true

      findme.visible=true
    })
  }

  drawSprites()
  text(mouseX+","+mouseY,250,335)
}


