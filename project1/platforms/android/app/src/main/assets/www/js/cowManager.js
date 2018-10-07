//Created By Jaime Aughney
var b_canvas = document.getElementById("myCanvas");
var b_context = b_canvas.getContext("2d");


 
var cowManager = new (function(){  

	this.cows=[];
	
	this.update = function(aliens){  

		for(this.i=0;this.i<this.cows.length;this.i++){
					this.cows[this.i].update(aliens);
					if(this.cows[this.i].taken==true){

						//this.deleteCow(this.i);
					}
		}	
		if(this.cows.length<5){
			if(Math.floor(Math.random()*6)==5){
				this.createCow();
			}
		}

	};  
	this.createCow= function(){
		this.cows.push(new cow());

	};
	this.deleteCow=function(cow){

		delete this.cows[cow];
		this.cows.splice(cow,1);
		console.log("cowgone");
		
	};




});		
	

