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
var stop=false;
var player; 
var enemyManager;
var cowManager;
var BackGround = document.createElement('img');  
BackGround.src = 'img/background.jpeg';
var TO_RADIANS = Math.PI/180; 
b_context.font = "30px Arial";


var update = function(){
  if (!stop) {
      b_context.clearRect(0,0,window.innerWidth,window.innerHeight);
      b_context.drawImage(BackGround,0,0,b_canvas.width,b_canvas.height);
      cowManager.update();
      //bullets collide with more than one enemy at per frame
      //because of each bullet being checked with every enemy on screen
      enemyManager.update(player.myBullets);
      player.update();
      window.requestAnimFrame(update, document.body);
  };
   	
  
   

  // b_context.beginPath();
  // b_context.strokeStyle = 'red';
  // for (var i = 0; i < 21; i++) {
  // 	 	b_context.moveTo(0,window.innerHeight/20*i);
  // 		b_context.lineTo(window.innerWidth,window.innerHeight/20*i);
  // 		b_context.moveTo(window.innerWidth/20*i,0);
  // 		b_context.lineTo(window.innerWidth/20*i,window.innerHeight);
  // };
  // b_context.stroke();



};

$('.play').click(function() {
  $('#menu').hide();
  $('#hud').show();
  stop=false;
  update();

  
});
$('.exit').click(function() {
  $('#menu').show();
  $('#hud').hide();
  stop=true;
  
});

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
       
    $('#main').show();
    $('#menu').addClass('main');
    $('#hud').hide();

    
		  //window.requestAnimFrame(update, document.body);
    }
    
};
app.initialize();