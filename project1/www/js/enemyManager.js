//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");

 
var enemyManager = new (function(){  

	this.enemies=[];
	this.enemyLevelCount;
	this.count=0;

	this.update = function(bullets , cows){  
		if (this.enemies.length>0) {
			this.checkcollision(bullets);
		}
		this.abductCows(cows);
		for(this.i=0;this.i<this.enemies.length;this.i++){

					this.enemies[this.i].update();
					
					if(this.enemies[this.i].alive==false){

						if(this.enemies[this.i].abducting==true){
							cows[this.enemies[this.i].cowNumber].targeted=false;
							cows[this.enemies[this.i].cowNumber].safe=true;
						}
						this.deleteEnemy(this.i);
					}
					else if (this.enemies[this.i].escaped==true) {

						cows[this.enemies[this.i].cowNumber].taken=true;
						this.deleteEnemy(this.i);
					}
		}	
		//////this is temp?
		if(this.enemies.length<5){
			if(Math.floor(Math.random()*10)==5){
				this.createEnemy();
			}
		}

	};  
	this.abductCows=function(cows){

		for(this.i=0;this.i<this.enemies.length;this.i++){

			if (this.enemies[this.i].targeting==true) {
			
				if(this.enemies[this.i].abducting==false){
				
					//the enemy might target a cow
					if(Math.floor(Math.random()*50)==5){
						
						this.num = Math.floor(Math.random()*cows.length);//some times triws error if aliens are created first and
						if (cows[this.num].targeted==false) {//try to abduct cow
							this.enemies[this.i].cowNumber=this.num;
							this.enemies[this.i].abducting=true;
							cows[this.num].targeted=true;
						};
					}		
				}
				else{
					this.enemies[this.i].abduct(cows[this.enemies[this.i].cowNumber]);
					if (cows[this.enemies[this.i].cowNumber].abductded==true) {
							this.enemies[this.i].targeting=false;
							this.enemies[this.i].hasCow=true;
							this.enemies[this.i].tractorBeam=false;
							
					}
					else if (this.enemies[this.i].tractorBeam==true) {
						if (cows[this.enemies[this.i].cowNumber].startAbducting==false) {
							cows[this.enemies[this.i].cowNumber].startAbducting=true;
							cows[this.enemies[this.i].cowNumber].alienNum=this.enemies[this.i].cowNumber;
							
						}

					}

				}
			}
		}

	};
	this.checkcollision=function(bullets){

		for(this.i=0;this.i<bullets.length;this.i++){
			if(bullets[this.i].animateExplosion==false){
				for(this.j=0;this.j<this.enemies.length;this.j++){
						
						if (bullets[this.i].boxX< this.enemies[this.j].boxX + this.enemies[this.j].alienSizeX  
							&& bullets[this.i].boxX+ bullets[this.i].cir  > this.enemies[this.j].boxX 
							&& bullets[this.i].boxY < this.enemies[this.j].boxY + this.enemies[this.j].alienSizeY 
							&& bullets[this.i].boxY + bullets[this.i].cir > this.enemies[this.j].boxY) {
									
								
							  
							    
							    this.enemies[this.j].applyDamage(bullets[this.i].damage);
								bullets[this.i].collide();
								
						}
						  		// b_context.beginPath();
							   //  b_context.lineWidth="1";
							   //  b_context.strokeStyle="blue";
							   //  b_context.rect(bullets[this.i].boxX,bullets[this.i].boxY,bullets[this.i].cir,bullets[this.i].cir); 
							   //  b_context.stroke();
							    
							   //  b_context.beginPath();
							   //  b_context.lineWidth="1";
							   //  b_context.strokeStyle="green";
							   //  b_context.rect(this.enemies[this.j].boxX,this.enemies[this.j].boxY,this.enemies[this.j].alienSizeX,this.enemies[this.j].alienSizeY ); 
							   //  b_context.stroke();
							   
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
	

