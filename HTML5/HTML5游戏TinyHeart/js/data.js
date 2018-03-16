var dataObj=function()
{
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}


dataObj.prototype.draw=function()
{
	var w=can1.width;
	var h=can1.height;
	ctx1.save();
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";
	ctx1.fillStyle="white";
	//ctx1.fillText(this.fruitNum,w*0.5,h*0.1);
	//ctx1.fillText(this.double,w*0.5,h*0.15);
	ctx1.fillText("score "+this.score,w*0.5,h-80);
	
	if(this.gameOver)
	{
		this.alpha+=deltaTime*0.0002;
		if(this.alpha>1)
		{
			this.alpha=1;
		}
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("Game Over",w*0.5,h*0.5);
	}
	
	
/*	if(this.score>200)
	{
		this.alpha+=deltaTime*0.0002;
		if(this.alpha>1)
		{
			this.alpha=1;
		}
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("The Storm is Coimg",w*0.5,h*0.5);
		
	}
	if(this.score>500)
	{
		this.alpha=1;
		this.alpha-=deltaTime*0.0002;
		if(this.alpha<0)
		{
			this.alpha=0;
		}
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("The Storm is Coimg",w*0.5,h*0.5);
		
	}*/
	
	ctx1.restore();
}

dataObj.prototype.addScore=function()
{
	this.score+=this.fruitNum*20*this.double;
	this.fruitNum=0;
	this.double=1;
}