//判断大于和果实的距离
function momFruitsCollision()
{
	if(data.gameOver==false)
	{
		for(var i=0;i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				//calculate length
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l<900)
				{
					//fruit eaten
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if(mom.momBodyCount>7)
					{
						mom.momBodyCount=7;
					}
					if(fruit.fruitType[i]=="blue")
					{
						data.double=2;
					}
					
					wave.born(fruit.x[i],fruit.y[i]);
					//draw wave
					//var r=20;
					//r+=deltaTime*0.1;
					//var alpha=1-r/100;
					//ctx1.beginPath();
					//ctx1.arc(fruit.x[i],fruit.y[i],r,0,2*Math.PI);
					//ctx1.closePath();
					//ctx1.strokeStyle="rgba(255,255,255,"+0.5+")";
					//ctx1.stroke();
					//console.log(r);
				}
			}
		}
	}
	
}

//mom baby collision
function momBabyCollision()
{
	if(data.fruitNum>0 && data.gameOver==false)
	{
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l<900)
		{
			baby.babyBodyCount=0;
			mom.momBodyCount=0;
			//score update
			data.addScore();
			
			halo.born(baby.x,baby.y);
		}
	}

}