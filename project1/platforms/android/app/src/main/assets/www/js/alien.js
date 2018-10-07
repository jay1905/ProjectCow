//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");

 
function alien(){  

	
	this.angle=2;
	this.health=2;
	this.size = 1;
	this.cowNumber;
	this.boxX;
	this.boxY;

	this.abducting=false;
	this.arived=false;
	this.tractorBeam=false;
	this.turn = true;
	this.moveTurn = true;	
	this.alive = true;
	this.spawn= true;
	this.rest=false;
	this.targeting=false;
	this.hasCow = false;
	this.escaped=false;
	
	this.imageAlien = new Image();
	this.imageAlien.src = 'img/alien.png';
	this.imageAlien.style.opacity=0.3;
	this.imageBeam= document.createElement("IMG");
	this.imageBeam.src= 'img/beam.png';
	
	 
	

	this.alienSizeX=window.innerWidth/20*this.size;
	this.alienSizeY=window.innerHeight/20*this.size;
	this.alienPositionX=window.innerWidth/20*(Math.random()*21);
	this.alienPositionY=window.innerHeight/20*2-100;
	this.restHeight=window.innerHeight/20*0.5;
	this.targetHeight = window.innerHeight/20*4

	
 
	 this.update=function(){
	 	this.boxX=this.alienPositionX-this.alienSizeX/2;
	 	this.boxY=this.alienPositionY-this.alienSizeY/2;
	 	this.draw();
	 	if(this.spawn){
	 		this.decend();
	 		this.hover();

	 	}
	 	else if(this.rest){

	 		this.hover();
	 		this.moveToTargetPos();
	 	}
	 	else if(this.targeting){

		 	if(this.health>0){
			 	this.hover();
			 	if (!this.abducting) {
			 		this.move();
			 	}
		 	}
		 	else{
		 		//activate death annimation
		 		this.alive=false;
		 	}
	 	}
	 	else if(this.hasCow){
	 		this.escape();
	 	}
	 	//if health above 0 do normal if below stop moving and collision and do death annimation
	 	//DO enemy dieing
	 	//menu 
	 };

	this.escape=function(){
		this.alienPositionX+=5; 
		this.alienPositionY-= 5;

		if(this.alienPositionX>window.innerWidth+100&&this.alienPositionY<-100){
			this.escaped=true;
		}

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
			if(this.alienPositionY<cow.cowPositionY-200){
				this.alienPositionY+=1;
			}
			else{
				this.tractorBeam=true;
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


	 	if(this.tractorBeam){
	 		
	 		
	 		b_context.drawImage(this.imageBeam, -(this.alienSizeX/2), this.alienSizeY/2,this.alienSizeX,this.alienSizeY+100);
	 	}
	 		 //Red rectangle
	      // b_context.beginPath();
	      // b_context.lineWidth="1";
	      // b_context.strokeStyle="red";
	      // b_context.rect(-(this.alienSizeX/2),-(this.alienSizeY/2),this.alienSizeX,this.alienSizeY); 
	      // b_context.stroke();
		
	 	b_context.restore(); 
	};  
	this.moveToTargetPos = function(){

		this.alienSizeX=window.innerWidth/20*this.size;
		this.alienSizeY=window.innerHeight/20*this.size;

		if(this.size<4){
			this.size+=0.05;
		}
		if(this.alienPositionY<this.targetHeight){
			this.alienPositionY+=2;
		}
		else{
			this.targeting=true;
			this.rest=false;
			
		}

	};
	this.decend= function(){
		if (this.alienPositionY<this.restHeight) {
			this.alienPositionY+=1;
		}
		else{
			
			this.spawn=false;
			this.rest=true;
		}

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
	

