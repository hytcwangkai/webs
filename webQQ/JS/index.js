$(function(){
	$(document).on("click",".imgFalse",function(){
		alert("666");
		var closeId=$(this).attr("parentid");
		$(".ffrm"+closeId).remove();
	})
	$(document).on("click","#send_chat_btn",function(){
		var chatting_content_main="";
		var chattingcontent=$("#chat_textarea").val();
		var sendmainid=$(this).attr("sendId");
		chatting_content_main+='<div class="chatting_content_main_L">'+chattingcontent+'</div>';
		$("#fffrm"+sendmainid).append(chatting_content_main);
		document.getElementById("chat_textarea").value="";

	})
	$(document).on("click",".tck_header_rbutton",function(){
		$(".ltckmain").hide();
		$(".dian2").remove();
		$(".ltck_body_content").remove();
		$(".dian").attr("Isopen","1");
		})
	$(document).on("click",".dian2",function(){
		var chooseName=$(this).attr("friendName");
		var chooseId=$(this).attr("borethid");
		$("#send_chat_btn").attr("sendId",chooseId);
		$(".fName").html(chooseName);
		$(".ltck_body_content").hide();
		$("#fffrm"+chooseId).show();
	})
	$(".pclick").click(function(){
		var jiekou=$(this).attr("jiekou");
		$("*").find(".panelTop").removeClass("yingc");
		$("*").find(".panelTop"+jiekou).addClass("yingc");
		$(".pclick").removeClass("selected");
		$(this).addClass("selected");
	})
	$(".dian").click(function(){
		$(".ltckmain").show();
		var isopen=$(this).attr("Isopen");
		var friendid=$(this).attr("friendId");
		var friendname=$(this).attr("friendName");
		$("#send_chat_btn").attr("sendId",friendid)
		var chatting="";
		chatting+='<div class="ltck_body_content" id=fffrm'+friendid+' ></div>';
		var html="";
		html +=friendname;
		var choose="";
		choose +='<li class="dian2 ffrm'+friendid+' ffrm" friendName="'+friendname+'" borethid="'+friendid+'" Isopen="1">';
		choose +='	<div class="tou1">';
		choose +='		<img src="CSS/Images/gfrm'+friendid+'.jpg">';
		choose +='	</div>';
		choose +='  		<p>'+friendname+'</p>'
		choose +='   <div class="imgFalse" parentid="'+friendid+'"></div>'
		choose +='</li>'
		if(isopen==1){
			$(".fName").html(html);
			$(".chatchoosecontent").append(choose);
			$(".ltck_body").append(chatting);
			$(".ltck_body_content").hide();
			$("#fffrm"+friendid).show();
			$(this).attr("Isopen","0");
		}
		else{
			$(".fName").html(html);
			$(".ltck_body_content").hide();
			$("#fffrm"+friendid).show();
		}
		$(".dian2").hover(function(){
			$(this).find(".imgFalse").show();
		},function(){
			$(this).find(".imgFalse").hide();
		})
	});

});