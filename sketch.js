

var img;

var currentScene = 1;


function setup() {
  createCanvas(400, 400);
  img = loadImage("https://github.com/NeighborhoodDeficiency/Community-game-James-John-Daniel/raw/master/pictures/Startscreen.jpeg"); 
}
function draw(){

var drawScene1 =function(){
    currentScene = 1;
    background(200, 175, 175);
   image(img, 100, 100);

};

var drawScene2 = function(){
    currentScene = 2;
background(0, 0, 0);
	textSize(18);
	fill(250,0,0)
	text("Game Options",125,50);
//make button function with prototypes yes,no ,check if yesno

var optionButton = function(r,g,x,y){
fill(this.r,this.g,0);
rect(this.x,this.y,30,10);



};









};
var drawScene3 = function(){
    currentScene = 3;
background(0, 51, 255);

};

var drawScene4 = function(){
    currentScene = 4;
background(255, 255, 255);
};
var drawScene5 =function(){
    currentScene = 5;
    background(150, 150, 175);
};
  
if(currentScene ===1){
drawScene1();
}

mouseClicked=function(){
    if(currentScene === 1){
      drawScene2();  
    }
    else if(currentScene === 5){
     drawScene1();  
    }
     else if(currentScene === 2){
     drawScene3();  
    }
     else if(currentScene === 3){
     drawScene4 ();
     
     }
     else if(currentScene === 4){
     drawScene5 ();
     
     }
};


}
