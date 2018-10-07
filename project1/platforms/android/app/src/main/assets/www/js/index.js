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
var days=[];
var dayCount=1;

var BackGround = document.createElement('img');  
BackGround.src = 'img/background.jpeg';
var TO_RADIANS = Math.PI/180; 
b_context.font = "30px Arial";

//var firework = new Particle(200,300);


var update = function(){
  if (!stop) {
      b_context.clearRect(0,0,window.innerWidth,window.innerHeight);
      b_context.drawImage(BackGround,0,0,b_canvas.width,b_canvas.height);


      b_context.save();
      b_context.font = "150px Arial";
      b_context.globalAlpha=0.3;
      b_context.fillStyle = "black";
      b_context.textAlign = "center";
      b_context.fillText("Day 1", b_canvas.width/2, b_canvas.height/2); 
      b_context.restore();


      cowManager.update(enemyManager.enemies);
      //bullets collide with more than one enemy at per frame
      //because of each bullet being checked with every enemy on screen
      enemyManager.update(player.myBullets,cowManager.cows);
      player.update();
      
      window.requestAnimFrame(update, document.body);
  };
   	
  // background(51);
  // firework.update();
  // firework.show();
   

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

    var aCount=10;
    var aHealth=20;
    var dChance=10;
    var aChance=20;
    for (var i =0;i<10; i++) {
      
      days.push(new day(aCount,aHealth,dChance,aChance));
      aCount+=5;
      aHealth+=2;
      dChance+=1;
      aChance+=2;

    }
    
}
    
};
app.initialize();