//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");

 
var enemyManager = new (function(){  

	this.enemies=[];
	
	this.update = function(bullets){  

		this.checkcollision(bullets);
		for(this.i=0;this.i<this.enemies.length;this.i++){
					this.enemies[this.i].update();
					if(this.enemies[this.i].alive==false){

						this.deleteEnemy(this.i);
					}
		}	
		if(this.enemies.length<8){
			if(Math.floor(Math.random()*300)==5){
				this.createEnemy();
			}
		}

	};  
	this.checkcollision=function(bullets){

		for(this.i=0;this.i<bullets.length;this.i++){
			if(bullets[this.i].animateExplosion==false){
				for(this.j=0;this.j<this.enemies.length;this.j++){
						
						if (bullets[this.i].boxX< this.enemies[this.j].boxX + this.enemies[this.j].alienSizeX  
							&& bullets[this.i].boxX+ bullets[this.i].bulletSizeX  > this.enemies[this.j].boxX 
							&& bullets[this.i].boxY < this.enemies[this.j].boxY + this.enemies[this.j].alienSizeY 
							&& bullets[this.i].boxY + bullets[this.i].bulletSizeY > this.enemies[this.j].boxY) {
							

							 		
							    // b_context.beginPath();
							    // b_context.lineWidth="1";
							    // b_context.strokeStyle="blue";
							    // b_context.rect(bullets[this.i].boxX,bullets[this.i].boxY,bullets[this.i].bulletSizeX,bullets[this.i].bulletSizeY); 
							    // b_context.stroke();

							    // b_context.beginPath();
							    // b_context.lineWidth="1";
							    // b_context.strokeStyle="green";
							    // b_context.rect(this.enemies[this.j].boxX,this.enemies[this.j].boxY,this.enemies[this.j].alienSizeX,this.enemies[this.j].alienSizeY ); 
							    // b_context.stroke();
							    this.enemies[this.j].applyDamage(bullets[this.i].damage);
								bullets[this.i].collide();
						
						}
				}
			}

		}	



	};
	
	this.createEnemy= function(){
		this.enemies.push(new alien());

	};
	this.deleteEnemy=function(enemy){

		delete this.enemies[enemy];
		this.enemies.splice(enemy,1);
		
	};




});		
	

