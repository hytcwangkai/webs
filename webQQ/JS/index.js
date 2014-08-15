$(function(){
	$(".pclick").click(function(){
		var jiekou=$(this).attr("jiekou");
		$("*").find(".panelTop").removeClass("yingc");
		$("*").find(".panelTop"+jiekou).addClass("yingc");
		$(".pclick").removeClass("selected");
		$(this).addClass("selected");
	})

})