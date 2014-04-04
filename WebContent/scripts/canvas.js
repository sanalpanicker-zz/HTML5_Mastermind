canvas = {
	
		initiate1 : function(){			
			var canvas = $("#canvas")[0].getContext('2d');	//added[0] as this was throwing error	
			canvas.strokeRect(0,0,120,120);
			canvas.fillRect(10,10,100,100);
		}
	
};