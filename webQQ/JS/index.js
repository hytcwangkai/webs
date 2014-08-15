$(function(){
	$(document).on("click",".tck_header_rbutton",function(){
			var closeID = $(this).attr("parentid");
			$("#" + closeID).remove();
			$("*").find("."+closeID).attr("Isopen","1");
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
		html +='<div class="ltck" id="frm'+friendid+'">';
		html +='	<div class="ltck_header">';
		html +='		<div class="fName">'+friendname+'</div>'
		html +='		<button class="tck_header_rbutton" parentid="frm' + friendid  + '">';
		html +='			<span>关闭</span>';
		html +='		</button>';
		html +='	</div>';
		html +='	<div class="ltck_body"></div>';
		html +='	<div class="ltck_footer">';
		html +='		<div class="chat">';
		html +='			<div id="add_face_btn" class="btn_btn.face">';
		html +='			<span class="btn_img"></span>';
		html +='		</div>';
		html +='		<textarea id="chat_textarea" class="input"></textarea>';
		html +=	'		<button id="send_chat_btn" class="btn_small">';
		html +='			<span class="btn_text">发送</span>';
		html +='		</button>';
		html +='		</div>';
		html +='	</div>';
		html +='</div>';
		if(isopen==1){
			$("body").append(html);
			$(".ltck").removeClass("yingc");
			$("#frm"+friendid).addClass("yingc");
			$(this).attr("Isopen","0");
		}
		else{
			$(".ltck").removeClass("yingc");
			$("#frm"+friendid).addClass("yingc");
		}
	});

});