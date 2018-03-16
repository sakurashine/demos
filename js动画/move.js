// JavaScript Document
<!--  var timer = null;-->
<!--  var alpha=30;-->
//json的格式是{name:key}如{a:1,b:2,c:3}
  function startMove(obj,json,fn)//动画函数
  {
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	for(var attr in json)
	{
	var flag = true;
	//取当前值
	var icur = 0;
	if(attr=='opacity')
	{
		icur = parseFloat(getStyle(obj,attr))*100;
	}
	else
	{
    	icur = parseInt(getStyle(obj,attr));
	}
	//算速度
	var speed = (json[attr]-icur)/4;
	speed = speed>0?Math.ceil(speed):Math.floor(speed);
	//检测停止
	if(icur!=json[attr])  
	{
		flag=false;
	}
		if(attr=='opacity')
		{
			obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';
			obj.style.opacity = (icur+speed)/100;
		}
		else
		{
	  		obj.style[attr]=icur+speed+'px';
		}
	if(flag)
	{
		clearInterval(obj.timer);
		if(fn)
		{
			fn();//执行回调函数
		}
	}
	}
	},30);
  }
  
  function getStyle(obj,attr)//获取对象的样式函数
  {
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	}
  }
