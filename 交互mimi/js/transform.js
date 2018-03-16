	//文本库
	window.onload=function(){
		initialize($(yes1));	
	}
	var yes1 = '#typing'+'1';
	var yes2 = '#typing'+'2';
	var yes3 = '#typing'+'3';
	var yes4 = '#typing'+'4';
	var arr2 = new Array(4);
	arr2[0] = yes1;
	arr2[1] = yes2;
	arr2[2] = yes3;
	arr2[3] = yes4;
	var curDialog=0;
	var timeInterval2=6000;
	setInterval(typeDialog,timeInterval2);
	function typeDialog()
	{
		if (curDialog==arr2.length-1) 
		{
			curDialog=0;
		}
	   else
		{
		   curDialog+=1;
		}
		
		initialize($(arr2[curDialog]));
		
	}
	
	
	
	//图片自动切换
	var curIndex=0;
	//时间间隔 单位毫秒
	var timeInterval1=6000;
	var arr1=new Array();
	arr1[0]="./images/1.png";
	arr1[1]="./images/2.png";
	arr1[2]="./images/3.png";
	setInterval(changeImg,timeInterval1);
	function changeImg()
	{
		var obj = document.getElementById("mimi");
		if (curIndex==arr1.length-1) 
		{
			curIndex=0;
		}
	   else
		{
		   curIndex+=1;
		}
		obj.src=arr1[curIndex];
		
	}
	
	//图片拖拽
	function g(id){
		return document.getElementById(id);
	}
	
	var isDragging = false;
	var startX = 0;
	var startY = 0;
	
	g('omimi').addEventListener('mousedown',function(e){
		isDragging = true;
		startX = e.pageX - g('omimi').offsetLeft;
		startY = e.pageY - g('omimi').offsetTop;
	})
	
	document.onmouseup = function(e){
		isDragging = false;	
	}
	
	document.onmousemove = function(e){
		var moveX = 0;
		var moveY = 0;
		if(isDragging == true)
		{
			moveX = e.pageX - startX;
			moveY = e.pageY - startY;
			
			var pageWidth = document.documentElement.clientWidth;
			var pageHeight = document.documentElement.clientHeight;
			
			var objWidth = g('omimi').offsetWidth;
			var objHeight = g('omimi').offsetHeight;
			
			var maxX = pageWidth - objWidth;
			var maxY = pageHeight - objHeight;
			
			moveX = Math.min(maxX,Math.max(0,moveX));
			moveY = Math.min(maxY,Math.max(0,moveY));
			g('omimi').style.left = moveX + 'px';
			g('omimi').style.top = moveY + 'px';	
			
			g('omimi').style.cursor = "move" ;
			return false;
    		
		}
	}
	//文字逐显
	var it = 0;
    var mytext;
    function initialize(e) {
        mytext = e.text();
        var myheight = e.offsetHeight;
        e.text("");
        e.css("height", myheight);
        e.show();
        typeit($(arr2[curDialog]));
		
	}
	var t;
    function typeit(e) {
        e.append(mytext.charAt(it));
        if (it < mytext.length - 1) {
            it++
            t = setTimeout("typeit($(arr2[curDialog]))", 100);
        }
        else{
            clearTimeout(t);
			
		}
		
    }
    
	
	