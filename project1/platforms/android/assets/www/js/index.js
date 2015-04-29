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

var game_width =window.innerWidth;
var game_height = window.innerHeight; 


b_canvas.width  = window.innerWidth;
b_canvas.height = window.innerHeight;

var player; cow; alien;



var BackGround = document.createElement('img');  
BackGround.src = 'img/background.jpeg';
var TO_RADIANS = Math.PI/180; 


b_context.font = "30px Arial";


var count=0;
var update = function(){
  
  b_context.clearRect(0,0,window.innerWidth,window.innerHeight);

  	b_context.drawImage(BackGround,0,0,b_canvas.width,b_canvas.height);
  	alien.draw();
   	player.update();
   	cow.draw();
   	
   	b_context.fillText(""+count,10,100);
   	count+=1;

   
   	// b_context.fillText("height = "+window.innerHeight,10,50);
   	// b_context.fillText("width = " +window.innerWidth,10,80);
   
   

	// b_context.beginPath();
	// b_context.strokeStyle = 'red';
	// for (var i = 0; i < 21; i++) {
	// 	 	b_context.moveTo(0,window.innerHeight/20*i);
	// 		b_context.lineTo(window.innerWidth,window.innerHeight/20*i);
	// 		b_context.moveTo(window.innerWidth/20*i,0);
	// 		b_context.lineTo(window.innerWidth/20*i,window.innerHeight);
	// };
	// b_context.stroke();


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
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
    }
};
app.initialize();