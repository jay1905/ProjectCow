//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");
var touchable = 'createTouch' in document;


function bullet(pointX,pointY,playerX,playerY){  
	
	
   
   this.endX=pointX;
   this.endY=pointY;
   this.startX = playerX;
   this.startY = playerY;
   this.dirX=this.endX-this.startX;
   this.dirY=this.endY-this.startY;
   this.radius = 2;
   this.speed=30;

   this.norm = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY);

   // normalize vector
   this.dirX /= this.norm;
   this.dirY /= this.norm;

	 
	this.draw = function(){  

	  
	  b_context.beginPath();
      b_context.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI, false);
      b_context.fillStyle = 'red';
      b_context.fill();
      b_context.lineWidth = 1;
      b_context.strokeStyle = '#003300';
      b_context.stroke();
	};  
   this.update= function(){

      this.startX+=this.dirX*this.speed;
      this.startY+=this.dirY*this.speed;
      
   };
  
}	
	

