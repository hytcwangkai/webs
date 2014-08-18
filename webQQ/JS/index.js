$(function(){
	$(document).on("click",".tck_header_rbutton",function(){
			var closeID = $(this).attr("parentid");
			$("#" + closeID).remove();
			$("*").find("."+closeID).attr("Isopen","1");
			alert("f"+closeID);
			$(".f"+closeID).remove();
		})
	$(document).on("click",".dian2",function(){
		var chooseName=$(this).attr("friendName");
		var html=chooseName;
		$(".fName").html(html);
	})
	$(".pclick").click(function(){
		var jiekou=$(this).attr("jiekou");
		$("*").find(".panelTop").removeClass("yingc");
		$("*").find(".panelTop"+jiekou).addClass("yingc");
		$(".pclick").removeClass("selected");
		$(this).addClass("selected");
	})
	$(".dian").click(function(){
		var isopen=$(this).attr("Isopen");
		var friendid=$(this).attr("friendId");
		var friendname=$(this).attr("friendName");
		var html="";
		html +=friendname;
		var choose="";
		choose +='<li class="dian2 ffrm'+friendid+' ffrm" friendName="'+friendname+'" borethid="frm'+friendid+'" Isopen="1">';
		choose +='	<div class="tou1">';
		choose +='		<img src="CSS/Images/gfrm'+friendid+'.jpg">';
		choose +='	</div>';
		choose +='  		<p>'+friendname+'</p>'
		choose +='</li>'
		if(isopen==1){
			$(".fName").html(html);
			$(".chatchoosecontent").append(choose);
			$(".ltck").removeClass("yingc");
			$("#frm"+friendid).addClass("yingc");
			$(this).attr("Isopen","0");
		}
		else{
			$(".fName").html(html);
		}
	});

});