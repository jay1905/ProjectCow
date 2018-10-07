


var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");

function Particle(x,y){
	this.posX=x;
	this.posY=y;
	this.radius=1;
	this.lifeSpan = 1;
	this.r =Math.floor(Math.random()*255);
	this.g=Math.floor(Math.random()*255 );

	
   this.dirX=(Math.random()*2)-1;
   this.dirY=(Math.random()*2)-1;

   this.speed=1*(Math.random()*5);
   this.destroy=false;
   this.norm = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY);
   // normalize vector
   this.dirX /= this.norm;
   this.dirY /= this.norm;


	this.applyForce = function(force){
		this.posX+=this.dirX*this.speed;
        this.posY+=this.dirY*this.speed;
        this.speed= this.speed*0.8;
	}

	this.update = function(){
		
		

		if (this.lifeSpan<=0.03){
			this.destroy=true;
			
		}
		this.show();
		this.applyForce();
		this.lifeSpan-=0.03;
	}
	this.show = function(){
		b_context.save();
		 b_context.globalAlpha=this.lifeSpan;
		 b_context.beginPath();
		 //b_context.strokeStyle = 'rgb(240'+',' + Math.floor(Math.random()*255 ) + ',0 )';
		  b_context.strokeStyle = 'rgb(240'+',' +this.g + ',0 )';
         b_context.arc(this.posX,this.posY,this.radius,0,2*Math.PI);
         //b_context.fillStyle= 'rgb(240'+',' + Math.floor(Math.random()*255 ) + ',0 )';
          b_context.fillStyle= 'rgb(240'+',' + this.g + ',0 )';
         
         b_context.fill();
        
         b_context.stroke();

         b_context.restore();
		
	}
	
}