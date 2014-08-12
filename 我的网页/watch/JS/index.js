$(function(){
	$('.wp-picker-container').colpick({	
	flat:false,
	layout:'hex',
	submit:0,
	onChange:function(hsb,hex,rgb,el,bySetColor) {
		$("body").css("background-color","#" + hex);
	}
});
	$("#toggle").hover(function(){
				$(this).css("background","#ccc");
			},function(){
				$(this).css("background","#FDFDFD");
			});
	$("#toggle").click(function(){
		controls=$(this).attr("control");
		if(controls==0){
		$("*").find("#style_switcher").animate({"right":"0"},1000);
		$(this).attr("control","1");
		}
		else{
			$("*").find("#style_switcher").animate({"right":"-232px"},1000);
			$(this).attr("control","0");
		}
		
	});
});
		var controls=0;
	

