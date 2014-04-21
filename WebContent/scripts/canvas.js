canvas = {
	
		initiate1 : function(){			
						var canvas = $("#canvas")[0].getContext('2d');	//added[0] as this was throwing error	
						canvas.strokeRect(0,0,120,120);
						canvas.fillRect(10,10,100,100);
					},

		initiate2 : function(){			
						var canvas = $("#canvas2")[0].getContext('2d');	//added[0] as this was throwing error	
						canvas.fillStyle="#000099";
						canvas.strokeStyle="#990000";
						canvas.strokeRect(0,0,120,120);
						canvas.fillRect(10,10,100,100);
					},
		initiate3 : function(){	
						var canvas = $("#canvas3")[0].getContext('2d');	//added[0] as this was throwing error	
						var grad = canvas.createLinearGradient(0,0,10,100);
						grad.addColorStop(1,'#00AAFF');
						grad.addColorStop(0.5,'#000000');
						canvas.fillStyle=grad;
						canvas.strokeStyle="#990000";
						canvas.strokeRect(0,0,120,120);
						canvas.fillRect(10,10,100,100);
						canvas.fillRect(150,10,200,100);
					},
		initiate4 : function(){	
						var canvas = $("#canvas4")[0].getContext('2d');	//added[0] as this was throwing error	
						var grad = canvas.createRadialGradient(175,50,10,175,50,25);
						//var grad = canvas.createLinearGradient(0,0,10,100);
						grad.addColorStop(0.2,'#00AAFF');
						grad.addColorStop(0.5,'#000000');
						grad.addColorStop(0.9,'#00AAFF');
						canvas.fillStyle=grad;
						canvas.strokeStyle="#990000";
						//canvas.strokeRect(0,0,120,120);
						//canvas.fillRect(10,10,100,100);
						canvas.fillRect(150,10,200,100);
					},			
	
};