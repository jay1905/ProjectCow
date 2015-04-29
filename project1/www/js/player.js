//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");


var player = new (function(){  
	
	
	
	this.imagePlayer = new Image();
	this.imagePlayer.src = 'img/farmer.png';
	this.playerSizeX=window.innerWidth/20*2;
	this.playerSizeY=window.innerHeight/20*4;
	this.playerPositionX=window.innerWidth/20*18;
	this.playerPositionY=window.innerHeight/20*11;
	this.playerCentreX=this.playerPositionX+this.playerSizeX/2;
	this.playerCentreY=this.playerPositionY+this.playerSizeY/2;
	this.myBullets=[];
 
	 
	this.update=function(){

		this.draw();
 		for(this.i=0;this.i<this.myBullets.length;this.i++){
			this.myBullets[this.i].update();
			this.checkBulletDead(this.i);
		}	

	 };
	this.draw = function(){  

	    b_context.drawImage(this.imagePlayer,this.playerPositionX,this.playerPositionY,this.playerSizeX,this.playerSizeY);

	};  
	this.shoot=function(pointX,pointY){

		this.myBullets.push(new bullet(pointX,pointY,this.playerCentreX,this.playerCentreY));
		
	};
	this.checkBulletDead=function(num){

			if(this.myBullets[num].destroy==true){
				delete this.myBullets[num];
				this.myBullets.splice(num,1);
			}

	};



});		
	

