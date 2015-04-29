//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");
var touchable = 'createTouch' in document;


var player = new (function(){  
	
	
	
	this.imagePlayer = new Image();
	this.imagePlayer.src = 'img/farmer.png';
	this.playerSizeX=window.innerWidth/20*2;
	this.playerSizeY=window.innerHeight/20*4;
	this.playerPositionX=window.innerWidth/20*18;
	this.playerPositionY=window.innerHeight/20*11;
	this.myBullets=[];
 
	 
	this.update=function(){

		this.draw();


	 };
	this.draw = function(){  

	    b_context.drawImage(this.imagePlayer,this.playerPositionX,this.playerPositionY,this.playerSizeX,this.playerSizeY);

	    for(this.i=0;this.i<this.myBullets.length;this.i++){
			this.myBullets[this.i].update();
			this.myBullets[this.i].draw();
		}	

	};  
	this.shoot=function(pointX,pointY){

		this.myBullets.push(new bullet(pointX,pointY,this.playerPositionX,this.playerPositionY));
		
	};



});		
	

