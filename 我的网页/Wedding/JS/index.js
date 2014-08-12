$(function(){
	timeHandle = setInterval("chagngBO()",1000);
	$(".menuLi").hover(function(){
		$(this).find(".menuTitle").next().slideDown(1000);
	},function(){
		$(this).find(".menuTitle").next().slideUp(1000);
	});
	chagngBO();
	$("#coin-slider").hover(function(){
		$(this).find("#cs-navigation-coin-slider").show();
		clearInterval(timeHandle);
			},function(){
		$(this).find("#cs-navigation-coin-slider").hide();
		timeHandle = setInterval("chagngBO()",2000);
	});
	$("#cs-prev-coin-slider").hover(function(){
		$(this).css("color","#146d8c");
	},function(){
		$(this).css("color","");
	});
	$("#cs-next-coin-slider").hover(function(){
		$(this).css("color","#146d8c");
	},function(){
		$(this).css("color","");
	});
	$("#tabactivator").click(function(){
		$(this).next().find("#tabbox").animate({"top":"100px"},1000);
	});
	$("#tabboxclose").click(function(){
		$(this).parent().animate({"top":"-550px"},1000);
	});
	$(".tabNavA").click(function(){
		var relCSS=$(this).attr("rel");
		$("#mianCSS").attr("href","CSS/"+relCSS);
	});
	$("#cs-prev-coin-slider").click(function(){
		if(piccount==1){
			piccount=5;
		}
		else{
			piccount--;
		};
		$("#coin-slider").css("background-image",'url("CSS/Images/coin_pic'+piccount+'.jpg")');
		});
	$("#cs-next-coin-slider").click(function(){
		if(piccount==5){
			piccount=1;
		}
		else{
			piccount++;
		};
		$("#coin-slider").css("background-image",'url("CSS/Images/coin_pic'+piccount+'.jpg")');
		
	})
});
var piccount;
var count=1;
var timeHandle;
function chagngBO(){
	if(count==6)
		{piccount=1;
	}
	else{
		piccount=count;
		}
	$("#coin-slider").css("background-image",'url("CSS/Images/coin_pic'+count+'.jpg")');
	count++;
	if(count>5){
		count=1;
	}
	
}