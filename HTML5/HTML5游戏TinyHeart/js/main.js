var can1;
var can2;
var ctx1;
var ctx2;
var conWidth;
var conHeight;
var lastTime;
var deltaTime;
var bgPic=new Image();
var ane;
var fruit;
var mom;
var baby;
var mx;
var my;
var babyTail=[];
var babyEye=[];
var babyBody=[];
var momTail=[];
var momEye=[];
var data;
var momBodyOra=[];
var momBodyBlue=[];
var wave;
var halo;
var dust;
var dustPic=[];

document.body.onload=game;
function game()
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init()
{
	//获得canvas context
	can1=document.getElementById("canvas1");//fishes,dust,UI,circle
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");//background,ane,fruits
	ctx2=can2.getContext('2d');
	
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic.src="./src/background.jpg";
	
	canWidth=can1.width;
	canHeight=can1.height;
	
	ane=new aneObj();
	ane.init();
	
	fruit=new fruitObj();
    fruit.init();
	
	mom=new momObj();
	mom.init();
	
	mx=canWidth*0.5;
	my=canHeight*0.5;
	
	baby=new babyObj();
	baby.init();
	
	data=new dataObj();
	
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	
	wave=new waveObj();
	wave.init();
	
	halo=new haloObj();
	halo.init();
	
	dust=new dustObj();
	dust.init();
	
}

function gameloop()
{
	window.requestAnimFrame(gameloop);//类似setInterval但优于它，可根据计算机自身性能取帧数
	var now = Date.now();
	deltaTime=now -lastTime;
	lastTime=now;
	
	if(deltaTime>40) deltaTime=40;
	
	ctx2.clearRect(0,0,canWidth,canHeight);
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
	

}

function onMouseMove(e)
{
	if(data.gameOver==false)
	{
		if(e.offSetX||e.layerX)
		{
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
			
		}
	}
	
}