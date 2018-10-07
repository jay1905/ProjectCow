//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");

function cow(){  
	
	////////////////////
	this.angle=2;
	this.turn = true;
	////////////////////
	this.bob =10;
	this.bobCount=0;
	this.bobUpDown=true;
	this.bobMove=0.5;
	this.alienNum;
	this.cowfullSize=2.5;
	this.cowSize = 2.5;
	////////////////////
	this.moveTurn = true;
	this.abductded=false;
	this.startAbducting=false;
	this.targeted=false;
	this.taken=false;
	this.safe =false;
	///////////////////////
	this.imageCow = new Image();
	this.imageCow.src = 'img/cow.png';
	this.cowSizeX=window.innerWidth/20*this.cowSize;
	this.cowSizeY=window.innerHeight/20*this.cowSize;
	this.cowPositionX=window.innerWidth/20*(Math.random()*21);
	this.cowPositionY=window.innerHeight/20*(11+(Math.random()*7));
	this.cowOrigionalYPos;
 	/////////////////////////////////////////////
 
	 this.update=function(aliens){
	 	if (!this.startAbducting) {
	 		this.walk();
	 		this.cowOrigionalYPos=this.cowPositionY;
	 	}
	 	else{

	 		if(!this.safe){
	 			this.beingAbducted(aliens);
	 		}
	 		else{
	 			this.saved();
	 		}
	 	}
	 	if(!this.abductded){
	 		this.draw();
	 	}
	};
	this.draw = function(){  

 		b_context.save(); 
	 	b_context.translate(this.cowPositionX, this.cowPositionY);
	 	b_context.rotate(this.angle * TO_RADIANS);
	 	b_context.drawImage(this.imageCow, -(this.cowSizeX/2), -(this.cowSizeY/2),this.cowSizeX,this.cowSizeY);
	 	b_context.restore(); 
	};  
	this.saved = function(){

		if (this.cowPositionY<this.cowOrigionalYPos) {

			this.cowPositionY+=5;

			if(this.cowSize<this.cowfullSize){

				this.cowSizeX=window.innerWidth/20*this.cowSize;
				this.cowSizeY=window.innerHeight/20*this.cowSize;
				this.cowSize+=0.05;
					
			}

		}
		else{
			this.startAbducting=false;
			this.safe=false;
		}

	};
	this.beingAbducted = function(aliens){
	 	for (this.i = 0; this.i < aliens.length; this.i++) {
	 		if(aliens[this.i].cowNumber == this.alienNum){
	 			if (this.cowPositionY>aliens[this.i].alienPositionY) {
	 				this.cowPositionY-=1;

	 				this.cowSizeX=window.innerWidth/20*this.cowSize;
					this.cowSizeY=window.innerHeight/20*this.cowSize;
					this.cowSize-=0.01;
					
	 			}
	 			else{
	 				this.abductded=true;
	 			}
	 		}
	 	}
	};

	this.walk=function(){
		////////////////////rotating motion
		if(this.angle>=10&&this.turn==true) {
			this.turn=false;
		}else if(this.angle<=0&& this.turn==false){
			this.turn=true;
		}if(this.turn==true){
			this.angle+=0.3;
		}else if(this.turn==false){
			this.angle-=0.3;
		}
		/////////////////moving from side to side
		if(this.cowPositionX>window.innerWidth-100) {
			this.moveTurn=false;
		}else if(this.cowPositionX<100){
			this.moveTurn=true;
		}if(this.moveTurn==true) {
			this.cowPositionX+=2;
		}else if(this.moveTurn==false) {
			this.cowPositionX-=2;
		}
		////////////////bobbing up and down
		if (this.bobUpDown) {
			this.cowPositionY+=this.bobMove;
		}else {
			this.cowPositionY-=this.bobMove;
		}
		if (this.bobCount<this.bob) {
			this.bobCount+=1;
		}else {
			this.bobCount=0;
			if (this.bobUpDown) {
				this.bobUpDown=false;
			}else{
				this.bobUpDown=true;
			}
		}
		////////////////////////////
	};
	


}		
	

