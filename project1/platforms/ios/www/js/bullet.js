//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");


function bullet(pointX,pointY,playerX,playerY){  
	
	
   this.imageBullet = new Image();
   this.imageBullet.src = 'img/bullet.png';
   this.endX=pointX;
   this.endY=pointY;
   this.currentX = playerX;
   this.currentY = playerY;
   this.dirX=this.endX-this.currentX;
   this.dirY=this.endY-this.currentY;
   this.bulletSizeX=window.innerWidth/20*0.5;
   this.bulletSizeY=window.innerHeight/20*0.5;
   this.boxX;
   this.boxY;
   this.radius = 2;
   this.speed=30;
   this.destroy=false;
   this.damage= 3+Math.floor(Math.random()*9);
   this.norm = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY);
   // normalize vector
   this.dirX /= this.norm;
   this.dirY /= this.norm;
   this.animateExplosion=false;

	this.update= function(){
      if(this.animateExplosion==false){
            this.currentX+=this.dirX*this.speed;
            this.currentY+=this.dirY*this.speed;
            this.boxX=this.currentX-this.bulletSizeX/2;
            this.boxY=this.currentY-this.bulletSizeY/2
            this.draw();
            this.checkOutside();
      }
      else{
         this.drawExplosion();

      }
   };
	this.draw = function(){  
         b_context.save(); 
         b_context.translate(this.currentX, this.currentY);
         //b_context.rotate(this.angle * TO_RADIANS);
         b_context.drawImage(this.imageBullet, -(this.bulletSizeX/2), -(this.bulletSizeY/2),this.bulletSizeX,this.bulletSizeY);
        
          // Red rectangle
         // b_context.beginPath();
         // b_context.lineWidth="1";
         // b_context.strokeStyle="red";
         // b_context.rect( -(this.bulletSizeX/2),-(this.bulletSizeY/2),this.bulletSizeX,this.bulletSizeY); 
         // b_context.stroke();

         b_context.restore(); 

	};  
   this.collide=function(){
      this.explosion = document.createElement('img');  
      this.explosion.src= 'img/buletExplosion.png'
      this.frames=31;
      this.actualFrame=0;
      this.frameCount=0;
      this.frameWidth=66.5;
      this.frameHeight=66.5;
      this.edgex = 66*6;
      this.frameStepY=0;
      this.frameStepX=0;
      this.animateExplosion=true;
      this.animationSpeed=1;
   };
   this.drawExplosion=function(){
         b_context.save(); 
         b_context.translate(this.currentX, this.currentY);
         b_context.drawImage(this.explosion, this.frameWidth* this.frameStepX,this.frameHeight*this.frameStepY ,  this.frameWidth,  
                              this.frameHeight,-(this.frameWidth/2),-(this.frameHeight/2),  this.frameWidth,  this.frameHeight); 
         b_context.restore(); 

            if (this.actualFrame > this.frames) {  
               this.frameStepX = 0;
               this.frameStepY=0;  
               this.actualFrame=0;
               this.destroy=true;
             } 
             else {  
               if(this.frameCount== this.animationSpeed){
                  this.frameStepX++;  
                  this.frameCount=0;
                  this.actualFrame++;
                  if(this.frameWidth*this.frameStepX>=this.edgex){
                         this.frameStepY+=1;
                         this.frameStepX=0;
                  }
               }

             }  
             this.frameCount++;

   };
   this.checkOutside=function(){

      if(this.currentX<0||this.currentX>window.innerWidth||this.currentY<0||this.currentY>window.innerHeight){
            this.destroy=true;
      }

   };
  
}