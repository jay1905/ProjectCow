//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");

 
function alien(){  

	
	this.angle=2;
	this.turn = true;
	this.moveTurn = true;	
	this.alive = true;
	this.health=20;

	this.abducting=false;
	this.cowNumber;
	this.arived=false;
	
	this.imageAlien = new Image();
	this.imageAlien.src = 'img/alien.png';
	this.alienSizeX=window.innerWidth/20*4;
	this.alienSizeY=window.innerHeight/20*4;
	this.alienPositionX=window.innerWidth/20*(Math.random()*21);
	this.alienPositionY=window.innerHeight/20*2;
	this.boxX;
	this.boxY;
 
	 this.update=function(){
	 	this.boxX=this.alienPositionX-this.alienSizeX/2;
	 	this.boxY=this.alienPositionY-this.alienSizeY/2;
	 	if(this.health>0){
		 	this.hover();
		 	if (!this.abducting) {
		 		this.move();
		 	}
		 	
	 		this.draw();
	 	}
	 	else{
	 		//activate death annimation
	 		this.alive=false;
	 	}
	 	//if health above 0 do normal if below stop moving and collision and do death annimation
	 	//sunday 11th
	 	//DO enemy dieing
	 	//menu 
	 };
	this.abduct=function(cow){
		if(!this.arived){
			this.speed = (this.alienPositionX-cow.cowPositionX)/100;
			this.alienPositionX+= this.speed*-5;
			
			if(this.speed<1&& this.speed>-1){
				this.speed=1;
			}
			
			this.distance= this.alienPositionX-cow.cowPositionX;
			if(this.distance<1&& this.distance>-1){
				this.arived=true;
			}
		}
		else{
			
			this.alienPositionX=cow.cowPositionX;	
			if(this.alienPositionY<cow.cowPositionY-300){
				this.alienPositionY+=1;
			}

		}
	};
	this.applyDamage=function(amount){

		this.health-=amount;
	};
	this.draw = function(){  
 		b_context.save(); 
	 	b_context.translate(this.alienPositionX, this.alienPositionY);
	 	b_context.rotate(this.angle * TO_RADIANS);
	 	b_context.drawImage(this.imageAlien, -(this.alienSizeX/2), -(this.alienSizeY/2),this.alienSizeX,this.alienSizeY);

	 		 // Red rectangle
	      // b_context.beginPath();
	      // b_context.lineWidth="1";
	      // b_context.strokeStyle="red";
	      // b_context.rect(-(this.alienSizeX/2),-(this.alienSizeY/2),this.alienSizeX,this.alienSizeY); 
	      // b_context.stroke();
		
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

}	
	

