//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");
var touchable = 'createTouch' in document;

 
var alien = new (function(){  

	
	this.angle=2;
	this.turn = true;
	this.moveTurn = true;	
	
	
	this.imageAlien = new Image();
	this.imageAlien.src = 'img/alien.png';
	this.alienSizeX=window.innerWidth/20*4;
	this.alienSizeY=window.innerHeight/20*4;
	this.alienPositionX=window.innerWidth/20*10;
	this.alienPositionY=window.innerHeight/20*2;
 
	 
	this.draw = function(){  

 		this.hover();
 		this.move();
 		b_context.save(); 
	 	b_context.translate(this.alienPositionX, this.alienPositionY);
	 	b_context.rotate(this.angle * TO_RADIANS);
	 	b_context.drawImage(this.imageAlien, -(this.alienSizeX/2), -(this.alienSizeY/2),this.alienSizeX,this.alienSizeY);
	 	b_context.restore(); 
		

	};  
	this.hover=function(){

		if(this.angle>=10&&this.turn==true) {
			this.turn=false;
		}else if(this.angle<=0&& this.turn==false){
			this.turn=true;
		}if(this.turn==true){
			this.angle+=0.3;
		}else if(this.turn==false){
			this.angle-=0.3;
		}
	

	};
	this.move=function(){

		if(this.alienPositionX>window.innerWidth-100) {
			this.moveTurn=false;
		}else if(this.alienPositionX<100){
			this.moveTurn=true;
		}if(this.moveTurn==true) {
			this.alienPositionX+=5;
		}else if(this.moveTurn==false) {
			this.alienPositionX-=5;
		}

	};

});		
	

