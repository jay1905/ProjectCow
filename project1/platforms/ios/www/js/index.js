//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");
b_canvas.addEventListener("touchstart",doTouchStart,false);
b_canvas.addEventListener("mousedown", doMouseDown, false);

window.requestAnimFrame = (function(){
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(/* function */ callback, /* DOMElement */ element){
window.setTimeout(callback, 1000 / 60);
};
})();


b_canvas.width  = window.innerWidth;
b_canvas.height = window.innerHeight;

var player; 
var enemyManager;
var cowManager;
var BackGround = document.createElement('img');  
BackGround.src = 'img/background.jpeg';
var TO_RADIANS = Math.PI/180; 
b_context.font = "30px Arial";



    // var explosion = document.createElement('img');  
    // explosion.src= 'img/buletExplosion.png'
    // var frames=31;
    // var actualFrame=0;
    // var frameCount=0;
    // var frameWidth=66.5;
    // var frameHeight=66.5;
    // var edgex = 66*6;
    // var frameStepY=0;
    // var frameStepX=0;

var update = function(){
  
  b_context.clearRect(0,0,window.innerWidth,window.innerHeight);
  b_context.drawImage(BackGround,0,0,b_canvas.width,b_canvas.height);
  cowManager.update();
  //bullets collide with more than one enemy at per frame
  //because of each bullet being checked with every enemy on screen
  enemyManager.update(player.myBullets);
  player.update();
   	
   	
  // b_context.drawImage(explosion, frameWidth* frameStepX,frameHeight*frameStepY ,  frameWidth,  frameHeight,200,200,  frameWidth,  frameHeight); 
  //  if (actualFrame > frames) {  
  //     frameStepX = 0;
  //     frameStepY=0;  
  //     actualFrame=0;
  //   } 
  //   else {  
  //     if(frameCount==30){
  //       frameStepX++;  
  //       frameCount=0;
  //       actualFrame++;
  //       if (frameWidth*frameStepX>=edgex){
  //         frameStepY+=1;
  //         frameStepX=0;
  //       }
  //     }

  //   }  
  //   frameCount++;
  //  	 b_context.fillText("edgex = "+edgex,10,50);
  //  	 b_context.fillText("frameStepX = " +frameStepX,10,80);
  //     b_context.fillText("frame = " +frameStepY,10,110);
   
   

  b_context.beginPath();
  b_context.strokeStyle = 'red';
  for (var i = 0; i < 21; i++) {
  	 	b_context.moveTo(0,window.innerHeight/20*i);
  		b_context.lineTo(window.innerWidth,window.innerHeight/20*i);
  		b_context.moveTo(window.innerWidth/20*i,0);
  		b_context.lineTo(window.innerWidth/20*i,window.innerHeight);
  };
  b_context.stroke();


window.requestAnimFrame(update, document.body);
};



function doTouchStart(event){

    event.preventDefault();
    canvas_x = event.targetTouches[0].pageX;
  canvas_y = event.targetTouches[0].pageY;
  
    player.shoot(canvas_x,canvas_y);
}
function doMouseDown(event){

  x=event.pageX;
  y=event.pageY;

  player.shoot(x,y);

}

var app = {
    // Application Constructor
    initialize: function() {
       

		  window.requestAnimFrame(update, document.body);
    }
    
};
app.initialize();