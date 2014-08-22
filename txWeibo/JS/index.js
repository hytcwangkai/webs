$(function(){
	$(".userpic").mouseover(function(){
		 var windowTop=$(window).scrollTop();
		var userPicTop =$(this).offset().top
		var userPicTop2=userPicTop-windowTop;
		$(".uc").show();
		$(".uc").animate({"top":userPicTop+60,"left":"217px"},1);
	})
	$(".userpic").mouseleave(function(){
		$(".uc").hide();
	})
	$(".uc").mouseover(function(){
		$(".uc").show();
	})
	$(".uc").mouseleave(function(){
		$(".uc").hide();
	})
	$(".int_like").click(function(){
		var zanguo=$(this).attr("zang");
		if(zanguo==1){
			$(this).find(".ico_likeb").css("background-position","-306px -112px");
			$(this).find(".like_plus").css({"margin-top":"-20px","opacity":"1","display":"block"});
			$(this).find(".like_plus").animate({"margin-top":"-35px","opacity":"0"},2000);
			$(this).attr("title","取消赞");
		 	var zan=$(this).next().find("span").text();
		 	zan=parseInt(zan)+1;
		 	$(this).next().find("span").text(zan);
		 	$(this).attr("zang","0");
		}
		else{
			$(this).find(".ico_likeb").css("background-position","-290px -112px");
			$(this).attr("title","赞");
			var zan=$(this).next().find("span").text();
		 	zan=parseInt(zan)-1;
		 	$(this).next().find("span").text(zan);
			$(this).attr("zang","1");
		}
	})
	$("#topNav1").hover(function(){
		$(".topnavSub").show();
	},function(){
		$(".topnavSub").hide();
	})
	$(document).on("click",".close",function(){
		$(this).parent().parent().remove();
		$(".comt").attr("isopen","1");
	})
	$(".comt").click(function(){
		var pinglun="";
		var isOpen=$(this).attr("isopen");
		pinglun+='<div class="talkWrap bgr3">'
		pinglun+='	<div class="top c_tx5">'
		pinglun+='		<span class="left">'
		pinglun+='			<span class="number cNote">评论本条微博</span>'
		pinglun+='		</span>'
		pinglun+='		<a class="close"title="关闭"></a>'
		pinglun+='	</div>'
		pinglun+='	<div class="cont">'
		pinglun+='		<textarea class="inputTxt"id="comtBox4001"></textarea>'
		pinglun+='		<div class="sendStatus clear"></div>'
		pinglun+='	</div>'
		pinglun+='	<div class="bot">'
		pinglun+='		<div class="insertFun">'
		pinglun+='			<div class="sendList insertFace">'
		pinglun+='			<a class="txt" title="表情">'
		pinglun+='				<em class="sico ico_face"></em>'
		pinglun+='			</a>'
		pinglun+='			</div>'
		pinglun+='			<div class="sendList atSome">'
		pinglun+='				<a class="txt" title="@朋友帐号就可以提到他">'
		pinglun+='					<em class="sico ico_at"></em>'
		pinglun+='				</a>'
		pinglun+='			</div>'
		pinglun+='			<div class="sendList newTopic">'
		pinglun+='				<a class="txt" title="汇聚相同热点的广播">'
		pinglun+='					<em class="sico ico_topic"></em>'
		pinglun+='				</a>'
		pinglun+='			</div>'
		pinglun+='			<div class="sendList sendPic ">'
		pinglun+='				<a class="txt" title="支持jpg、jpeg、gif、png格式，文件小于5M">'
		pinglun+='					<em class="sico ico_pic"></em>'
		pinglun+='				</a>'
		pinglun+='			</div>'
		pinglun+='			<div class="sendList keyWords schBrace">'
		pinglun+='				<a class="txt" title="分享你的兴趣、关注点">'
		pinglun+='					<em class="sico ic_keyword"></em>'
		pinglun+='				</a>'
		pinglun+='			</div>'
		pinglun+='		</div>'
		pinglun+='		<div class="left">'
		pinglun+='			<label>'
		pinglun+='				<input id="replayListCheckbox"type="checkBox"class="check1">'
		pinglun+='				同时转播'
		pinglun+='				</label>'
		pinglun+='		</div>'
		pinglun+='		<input type="button" class="inputBtn sendBtn"value="评论"title="评论">'
		pinglun+='		<span class="countTxt c_tx5">'
		pinglun+='			还能输入'
		pinglun+='			<em>140</em>'
		pinglun+='			字'
		pinglun+='		</span>'
		pinglun+='	</div>'
		pinglun+='</div>'
		if(isOpen==1){
			$(this).parent().parent().parent().append(pinglun);
			$(this).attr("isopen","0");
		}
		else{
			$(".talkWrap").remove();
			$(this).attr("isopen","1");
		}
	})
})