$(function(){
	$(document).on("click",".imgFalse",function(){
		var closeId=$(this).attr("parentid");
		var kongzhi=$(".chatchoosecontent").html();
		var nexiId=$("#fffrm"+closeId).next().length;
		if(nexiId==1){
			var huanname=$(".ffrm"+closeId).next().attr("friendname");
			$("#fffrm"+closeId).next().show();
			$("#fffrm"+closeId).remove();
			$(".ffrm"+closeId).remove();
			$(".fName").html(huanname);

			$(".frm"+closeId).attr("isopen","1");

			return false;
		}
		else{
			var huanname=$(".ffrm"+closeId).prev().attr("friendname");
			$("#fffrm"+closeId).prev().show();
			$("#fffrm"+closeId).remove();
			$(".ffrm"+closeId).remove();
			$(".fName").html(huanname);
			var kongzhi=$(".chatchoosecontent").html();
			if(kongzhi=="")
			{
				$(".ltckmain").hide();
				$(".dian2").remove();
				$(".ltck_body_content").remove();
				$(".dian").attr("Isopen","1");
			}
			return false;
		}
	})
	$(document).on("click","#send_chat_btn",function(){
		var chatting_content_main="";
		var chattingcontent=$("#chat_textarea").val();
		var sendmainid=$(this).attr("sendId");
		chatting_content_main+='<div>'
		chatting_content_main+='	<div class="chatting_content_main_L">我：</div>'
		chatting_content_main+='	<div class="chatting_content_main_R">'+chattingcontent+'</div>';
		chatting_content_main+='</div>'
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
		$(".dian2").attr("currentFriend","1");
		$(this).attr("currentFriend","0");
		$(".dian2").removeClass("ztai");
		$(this).addClass("ztai");

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
		choose +='<li class="dian2 ffrm'+friendid+' ffrm" friendName="'+friendname+'" borethid="'+friendid+'" Isopen="1" currentFriend="1"> ';
		choose +='	<div class="tou1">';
		choose +='		<img src="CSS/Images/gfrm'+friendid+'.jpg">';
		choose +='	</div>';
		choose +='  		<p>'+friendname+'</p>'
		choose +='   <div class="imgFalse" parentid="'+friendid+'"></div>'
		choose +='</li>'
		if(isopen==1){
			$(".fName").html(html);
			$(".chatchoosecontent").prepend(choose);
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
		
			$(".dian2").attr("currentFriend","1");
			$(".ffrm"+friendid).attr("currentFriend","0");
			$(".dian2").removeClass("ztai");
			$(".ffrm"+friendid).addClass("ztai");

	
			$(".dian2").hover(function(){
			var currentf=$(this).attr("currentFriend");
			if(currentf==1){
				$(this).find(".imgFalse").show();
				$(this).addClass("ztai2")
			}
			else{
				$(this).find(".imgFalse").show();
			}
		},function(){
			$(this).find(".imgFalse").hide();
				$(this).removeClass("ztai2");
		});
		$(".chatchoosecontent").hover(function(){
			$(".dian1").css("overflow","auto");
			return false;
		},function(){
			$(".dian1").css("overflow","hidden")
		})
	
		/*$(".dian2").hover(function(){
			$(this).find(".imgFalse").show();
			$(this).css("background","37b0dd");
		},function(){
			$(this).find(".imgFalse").hide();
				$(this).css("background","");
		})*/
	});

});