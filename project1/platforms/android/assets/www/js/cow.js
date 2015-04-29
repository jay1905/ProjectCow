//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");
var touchable = 'createTouch' in document;


var cow = new (function(){  
	
	
	this.angle=2;
	this.turn = true;
	this.moveTurn = true;	
	
	this.imageCow = new Image();
	this.imageCow.src = 'img/cow.png';
	this.cowSizeX=window.innerWidth/20*2.5;
	this.cowSizeY=window.innerHeight/20*2.5;
	this.cowPositionX=window.innerWidth/20*6;
	this.cowPositionY=window.innerHeight/20*12;
 
 
	 
	this.draw = function(){  

	    this.walk();
 		b_context.save(); 
	 	b_context.translate(this.cowPositionX, this.cowPositionY);
	 	b_context.rotate(this.angle * TO_RADIANS);
	 	b_context.drawImage(this.imageCow, -(this.cowSizeX/2), -(this.cowSizeY/2),this.cowSizeX,this.cowSizeY);
	 	b_context.restore(); 
	};  
	this.walk=function(){

		if(this.angle>=10&&this.turn==true) {
			this.turn=false;
		}else if(this.angle<=0&& this.turn==false){
			this.turn=true;
		}if(this.turn==true){
			this.angle+=0.3;
		}else if(this.turn==false){
			this.angle-=0.3;
		}
		if(this.cowPositionX>window.innerWidth-100) {
			this.moveTurn=false;
		}else if(this.cowPositionX<100){
			this.moveTurn=true;
		}if(this.moveTurn==true) {
			this.cowPositionX+=2;
		}else if(this.moveTurn==false) {
			this.cowPositionX-=2;
		}

	};
	


});		
	

