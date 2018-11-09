function setup() {
  createCanvas(400, 400);
}


var currentScene;

var drawScene1 =function(){
    currentScene = 1;
    background(200, 175, 175);
   
};

var drawScene5 =function(){
    currentScene = 5;
    background(150, 150, 175);
};

var drawScene2 = function(){
    currentScene = 2;
background(199, 40, 199);

};


var drawScene3 = function(){
    currentScene = 3;
background(0, 51, 255);


};

var drawScene4 = function(){
    currentScene = 4;
background(255, 255, 255);


};

drawScene1();

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

