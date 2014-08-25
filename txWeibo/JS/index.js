$(function(){
	$(document).on("click",".inputBtn",function(){
		var inputname=$(".text_user").attr("textname");
		var nierong=$(this).parent().prev().find("textarea").val();
		var pinglunping='<div class="pinglundepinglun"><span class="pinglunren" inputname="'+inputname+'">'+inputname+':</span> <span class="pinglunnierong">'+nierong+'</span><span class="ping" isopen="1">评论</span></div>'
		$(".pinglunS").prepend(pinglunping);
		$(this).parent().prev().find("textarea").val("");
	})
	$(document).on("click",".ping",function(){
		var isOpen=$(this).attr("isopen");
		var pinglun="";
		pinglun+='<div class="talkWrap1 bgr3">'
		pinglun+='	<div class="cont1">'
		pinglun+='		<textarea class="inputTxt1"id="comtBox"></textarea>'
		pinglun+='		<div class="sendStatus clear"></div>'
		pinglun+='	</div>'
		pinglun+='	<div class="bot">'
		pinglun+='		<div class="insertFun">'
		pinglun+='			<div class="sendList insertFace">'
		pinglun+='			<a class="txt" title="表情">'
		pinglun+='				<em class="sico ico_face"></em>'
		pinglun+='			</a>'
		pinglun+='			</div>'
		pinglun+='		</div>'
		pinglun+='		<input type="button" class="inputBtn1 sendBtn1"value="评论"title="评论">'
		pinglun+='	</div>'
		pinglun+='</div>'
		if(isOpen==1){
			$(this).parent().append(pinglun);
			$(this).attr("isopen","0");
		}
		else{
			$(".talkWrap1").remove();
			$(this).attr("isopen","1");
		}
	})
	$(document).on("click",".inputBtn1",function(){
		var biehuiren=$(this).parent().parent().parent().find(".pinglunren").attr("inputname");
		var inputname=$(".text_user").attr("textname");
		var nierong=$(this).parent().prev().find("textarea").val();
		var pinglunping='<div class="pinglundepinglun"><span class="pinglunren" inputname="'+inputname+'">'+inputname+'</span> <span class="huifu">回复</span><span class="biehuiren">'+biehuiren+':</span><span class="pinglunnierong">'+nierong+'</span><span class="ping" isopen="1">评论</span></div>'
		$(".pinglunS").prepend(pinglunping);
		$(this).parent().next().find("textarea").val("");
		$(".talkWrap1").remove();
	})
	$(document).on("mouseover",".userPic",function(){
		var username=$(this).next().find(".userName").attr("usernames");
		$(".tx_User").html(username);
		var imgid=$(this).attr("imgId");
		var imgS='<img src="CSS/Images/'+imgid+'1.jpg">';
		$(".avatar").html(imgS);
		var windowTop=$(window).scrollTop();
		var userPicTop =$(this).offset().top
		var userPicTop2=userPicTop-windowTop;
		$(".uc").show();
		$(".uc").animate({"top":userPicTop+60,"left":"217px"},1);
	});

	$(".sendBtn ").click(function(){
		var username=$(".text_user").attr("textname");
		var touxiangid=$(".text_user").attr("touxiangid");
		var leirong=$(".cntBox").find("textarea").val();
		var fabiao="";
		fabiao+='<li>'                                                  
		fabiao+='	<div class="mFun"></div>'
		fabiao+='		<div class="userPic" imgId="'+touxiangid+'">'
		fabiao+='			<a>'
		fabiao+='				<img src="CSS/Images/'+touxiangid+'2.jpg">'
		fabiao+='			</a>'
		fabiao+='		</div>'
		fabiao+='		<div class="msgBox">'
		fabiao+='			<div class="userName" userNames="'+username+'">'
		fabiao+='				<strong>'
		fabiao+='					<a>'+username+'</a>'
		fabiao+='				</strong>'
		fabiao+='			</div>'
		fabiao+='			<div class="msgCnt">'
		fabiao+='				'+leirong+''
		fabiao+='			</div>'
		fabiao+='			<div class="clear multiMedia">'
		fabiao+='				<div class="mediaWrap">'
		fabiao+='					<div class="picBox ico_gif_pn">'
		fabiao+='							<a class="pic">'
		fabiao+='							</a>'
		fabiao+='					</div>'
		fabiao+='				</div>'
		fabiao+='				<div class="miniMultiMedia"></div>'
		fabiao+='			</div>'
		fabiao+='			<div class="pubInfo c_tx5">'
		fabiao+='				<span class="left c_tx5">'
		fabiao+='					<a class="time">刚刚</a>'
		fabiao+='					<span class="cNote">阅读(0)</span>'
		fabiao+='					<a class="zfNum">'
		fabiao+='						全部转播和评论('
		fabiao+='						<b class="relayNum">0</b>'
		fabiao+='						)'
		fabiao+='					</a>'
		fabiao+='				</span>'
		fabiao+='				<div class="funBox">'
		fabiao+='					<div class="zan" zang="1">'
		fabiao+='						<a class="int_like"  title="赞">'
		fabiao+='							<i class="ic ico_likeb"></i>'
		fabiao+='							<i class="like_plus">+1</i>'
		fabiao+='						</a>'
		fabiao+='						<a class="int_like num_likeb" title="赞">'
		fabiao+='							('
		fabiao+='							<span>0</span>'
		fabiao+='							)'
		fabiao+='						</a>'
		fabiao+='					</div>'
		fabiao+='					<span>|</span>'
		fabiao+='					<a class="relay">转播</a>'
		fabiao+='					<span>|</span>'
		fabiao+='					<a  class="comt" isopen="1">评论</a>'
		fabiao+='					<span>|</span>'
		fabiao+='					<a class="fav">收藏</a>'
		fabiao+='				</div>'
		fabiao+='			</div>'
		fabiao+='		</div>'
		fabiao+='	</div>'
		fabiao+='</li>'
		$("#talkList").prepend(fabiao);
		$(".cntBox").find("textarea").val("");
	})
	$(document).on("mouseleave",".userPic",function(){
		$(".uc").hide();
	})
	$(document).on("mouseover",".uc",function(){
		$(".uc").show();
	})
	$(document).on("mouseleave",".uc",function(){
		$(".uc").hide();
	})
	$(document).on("click",".zan",function(){
		var zanguo=$(this).attr("zang");
		if(zanguo==1){
			$(this).find(".ico_likeb").css("background-position","-306px -112px");
			$(this).find(".like_plus").css({"margin-top":"-20px","opacity":"1","display":"block"});
			$(this).find(".like_plus").animate({"margin-top":"-35px","opacity":"0"},2000);
			$(this).find(".int_like").attr("title","取消赞");
		 	var zan=$(this).find("span").text();
		 	zan=parseInt(zan)+1;
		 	$(this).find("span").text(zan);
		 	$(this).attr("zang","0");
		}
		else{
			$(this).find(".ico_likeb").css("background-position","-290px -112px");
			$(this).attr("title","赞");
			var zan=$(this).find("span").text();
		 	zan=parseInt(zan)-1;
		 	$(this).find("span").text(zan);
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
	$(document).on("click",".comt",function(){
		var pinglun="";
		var inputid=$(this).attr("imgid");
		var isOpen=$(this).attr("isopen");
		pinglun+='<div class="talkWrap bgr3">'
		pinglun+='	<div class="top c_tx5">'
		pinglun+='		<span class="left">'
		pinglun+='			<span class="number cNote">评论本条微博</span>'
		pinglun+='		</span>'
		pinglun+='		<a class="close"title="关闭"></a>'
		pinglun+='	</div>'
		pinglun+='	<div class="cont">'
		pinglun+='		<textarea class="inputTxt"id="comtBox'+inputid+'"></textarea>'
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
		pinglun+='  <div class="pinglunS"><div class="pinglundepinglun"><span class="pinglunren" inputname="逗比">逗比:</span> <span class="pinglunnierong">我是二</span><span class="ping" isopen="1">评论</span></div></div>'
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