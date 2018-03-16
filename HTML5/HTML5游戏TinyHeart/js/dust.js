var dustObj=function()
{
	this.x=[];
	this.y=[];
	this.amp=[];
	this.NO=[];
	
	this.alpha;
}
dustObj.prototype.num=30;
dustObj.prototype.init=function()
{
	
	for(var i=0;i<7;i++)
	{
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png";
	}
	
	for(var i=0;i<this.num;i++)
	{
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=20+Math.random()*15;
		this.NO[i]=Math.floor(Math.random()*7);
	}
	this.alpha=0;
}

dustObj.prototype.draw=function()
{
	this.alpha+=deltaTime*0.0009;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++)
	{
		var NO=this.NO[i];
		ctx1.drawImage(dustPic[NO],this.x[i]+this.amp[i]*l,this.y[i]);
	}
}