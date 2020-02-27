var g_bMoveLeft=true;
var g_oTimer=null;
var g_oTimerOut=null;

var g_bPause=true;
var g_iPauseTime=1000;
var g_iSpeed=2;

window.onload=function ()
{
	var oDiv=document.getElementById('roll');//最外层的div
	var oUl=oDiv.getElementsByTagName('ul')[0];//里面的ul
	var aLi=oUl.getElementsByTagName('li');//ul里面的li数组
	var aA=oDiv.getElementsByTagName('a');//li里面的链接
	
	var oChk=document.getElementById('chk_pause');
	var oPauseTime=document.getElementById('pause_time');
	var oSpeed=document.getElementById('sel_speed');
	
	var i=0;
	
	var str=oUl.innerHTML+oUl.innerHTML;
	
	oUl.innerHTML=str;//ul的内部的html变为自己的2倍
	
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';//设置ul的宽，默认是没有宽高的
	//.roll ul { position: absolute; top: 0; left: 0; }
	
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function ()
		{
			stopMove();
		};
		
		aLi[i].onmouseout=function ()
		{
			startMove(g_bMoveLeft);
		};
	}
	
	aA[0].onmouseover=function ()
	{
		startMove(true);
	};
	
	aA[1].onmouseover=function ()
	{
		startMove(false);
	};
	
	startMove(true);
	
	oChk.onclick=function ()
	{
		g_bPause=oChk.getElementsByTagName('input')[0].checked;
	};
	
	oSpeed.onchange=function ()
	{
		g_iSpeed=parseInt(this.value);
	};
	
	oPauseTime.onchange=function ()
	{
		g_iPauseTime=parseInt(this.value);
	};
};

function startMove(bLeft)
{
	g_bMoveLeft=bLeft;
	
	if(g_oTimer)
	{
		clearInterval(g_oTimer);
	}
	g_oTimer=setInterval(doMove, 30);
}

function stopMove()
{
	clearInterval(g_oTimer);
	g_oTimer=null;
}

function doMove()
{
	var oDiv=document.getElementById('roll');//获得最外层的div盒子
	var oUl=oDiv.getElementsByTagName('ul')[0];//获得div里面的ul
	var aLi=oUl.getElementsByTagName('li');//获得ul里面的li列表
	
	var l=oUl.offsetLeft;
	
	if(g_bMoveLeft)
	{
		l-=g_iSpeed;
		if(l<=-oUl.offsetWidth/2)
		{
			l+=oUl.offsetWidth/2;
		}
	}
	else
	{
		l+=g_iSpeed;
		if(l>=0)
		{
			l-=oUl.offsetWidth/2;
		}
	}
	
	if(g_bPause)
	{
		if(Math.abs(l-Math.round(l/aLi[0].offsetWidth)*aLi[0].offsetWidth)<Math.ceil(g_iSpeed/2))
		{
			stopMove();
			g_oTimerOut=setTimeout
			(
				function ()
				{
					startMove(g_bMoveLeft);
				}, g_iPauseTime
			);
			
			l=Math.round(l/aLi[0].offsetWidth)*aLi[0].offsetWidth;
		}
	}
	
	oUl.style.left=l+'px';
}