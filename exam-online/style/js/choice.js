




window.onload=function(){
	//1、初始化页面宽度高度
	var main = document.getElementById("main");
	var time_clock = document.getElementById("time_clock");
	var choice_title = document.getElementById("choice_title");
	var choice_content = document.getElementById("choice_content");
	var choice_item = document.getElementsByClassName("choice_item");
	var choice_item_content = document.getElementsByClassName("choice_item_content");
	var choice_item_select = document.getElementsByClassName("choice_item_select");
	var choice_select = document.getElementsByClassName("choice_select");
	var choice_bottom = document.getElementById("choice_bottom");
	var choice_submit_button = document.getElementById("choice_submit_button");
	//var hhhhhhh = document.getElementById("hhhhhhh");
	var main_w=document.documentElement.clientWidth;
	var main_h=document.documentElement.clientHeight;
	var avali_w=window.screen.availWidth;
	var avali_h=window.screen.availHeight;



	time_clock_out(1,30,0,"http://www.baidu.com");

	function time_clock_out(h,m,s,href){
		var hour=parseInt(h);
		var minite=parseInt(m);
		var second=parseInt(s);
		if(hour<10&&(String(hour).length==1)){hour="0"+hour;}
		if(minite<10&&(String(minite).length==1)){minite="0"+minite;}
		if(second<10&&(String(second).length==1)){second="0"+second;}
		time_clock.innerHTML=hour+":"+minite+":"+second;

		var time_clock_out=setInterval(function(){
			if(second>0){second--;}else{second=59;minite--;}
			if(minite<0){minite=59;hour--;}
			if(hour<0){hour=23;}
			if(hour<10&&(String(hour).length==1)){hour="0"+hour;}
			if(minite<10&&(String(minite).length==1)){minite="0"+minite;}
			if(second<10&&(String(second).length==1)){second="0"+second;}
			time_clock.innerHTML=hour+":"+minite+":"+second;
			
		},1000);
		var time_clear=setInterval(function(){
			if((hour==0)&&(second==0)&&(minite==0)){
				window.clearTimeout(time_clock_out);
				window.location.href=href;
			}
		},1000);
	}

	$("#time_clock").css({
		"position":"fixed",
		"width":"24vh",
		"height":"8vh",
		"top":"2vh",
		"right":"6vh",
		"line-height":"8vh",
		"text-align":"center",
		"background":"#fff",
		"font-size":main_h*0.05+"px",
		"border-radius":"1vh",
		"z-index":100
	})



	
	//width
	main.style.width=main_w*0.99+"px";
	choice_title.style.width=main_w*0.81+"px";
	choice_title.style.fontSize=main_w*0.02+"px";
	choice_content.style.width=main_w*0.81+"px";
	choice_content.style.fontSize=main_w*0.0125+"px";
	for (var i = 0; i < choice_item.length; i++) {
		choice_item[i].style.width=main_w*0.81+"px";
		choice_item_content[i].style.width=main_w*0.81+"px";
	}
	choice_bottom.style.width=main_w*0.81+"px";
	choice_submit_button.style.width=main_w*0.125+"px";
	choice_submit_button.style.fontSize=main_w*0.015+"px";
	//height



	// console.log("-------------------------------------------------");
	var length_choice_content=0;
	for (var i = 0; i < choice_item.length; i++) {
		var length_choice_item = 0;
		for (var j = 0; j < $(".choice_item_content").eq(i).children().length; j++) {
			var str3 = $(".choice_item_content").eq(i).children().eq(j).height();
			length_choice_item+=str3;
		}
		length_choice_content+=length_choice_item+40;
		choice_item[i].style.height=length_choice_item+40+"px";
		// console.log(i+1);
		// console.log(length_choice_item+40);
		// console.log("第"+(i+1)+"个题目的高度"+choice_item[i].style.height);
		// console.log(length_choice_content);
	}
	choice_content.style.height=length_choice_content+"px";
	choice_content.style.lineHeight=main_h*0.045+"px";
	choice_bottom.style.height=main_h*0.2+"px";
	choice_submit_button.style.height=main_h*0.065+"px";
	choice_submit_button.style.lineHeight=main_h*0.065+"px";
	// console.log("-------------------------------------------------");


	$(".choice_item_select .choice_select").children().css({"height":main_h*0.02,"width":main_h*0.02});
	$(".choice_item_select .choice_select").children().children(".circle").css({"height":main_h*0.01,"width":main_h*0.01});
	$(":input:text").css("font-size",main_w*0.0125);
	$("textarea").css("font-size",main_w*0.0125);


	//小屏幕兼容
	if(main_h<(avali_h*0.9)&&main_w>(avali_w*0.9)&&main_w<1360){
		main_w=avali_w*0.99;
		//width
		main.style.width=main_w*0.99+"px";
		choice_title.style.width=main_w*0.81+"px";
		choice_content.style.width=main_w*0.81+"px";
		for (var i = 0; i < choice_item.length; i++) {
			choice_item[i].style.width=main_w*0.81+"px";
			choice_item_content[i].style.width=main_w*0.81+"px";
		}
		choice_bottom.style.width=main_w*0.81+"px";
	}
	//小窗口兼容
	if(main_h<(avali_h*0.9)&&main_w>(avali_w*0.9)&&main_w<1360){
		//width
		main_h=avali_h;
		main_w=avali_w;
		main.style.width=main_w*0.99+"px";
		choice_title.style.width=main_w*0.81+"px";
		choice_title.style.fontSize=main_w*0.02+"px";
		choice_content.style.width=main_w*0.81+"px";
		choice_content.style.fontSize=main_w*0.0125+"px";
		for (var i = 0; i < choice_item.length; i++) {
			choice_item[i].style.width=main_w*0.81+"px";
			choice_item_content[i].style.width=main_w*0.81+"px";
		}
		choice_bottom.style.width=main_w*0.81+"px";
		choice_submit_button.style.width=main_w*0.125+"px";
		choice_submit_button.style.fontSize=main_w*0.015+"px";

		var length_choice_content=0;
		for (var i = 0; i < choice_item.length; i++) {
			var length_choice_item = 0;
			for (var j = 0; j < $(".choice_item_content").eq(i).children().length; j++) {
				var str3 = $(".choice_item_content").eq(i).children().eq(j).height();
				length_choice_item+=str3;
			}
			length_choice_content+=length_choice_item+40;
			choice_item[i].style.height=length_choice_item+40+"px";
		}
		choice_content.style.height=length_choice_content+"px";
		choice_content.style.lineHeight=main_h*0.045+"px";
		choice_bottom.style.height=main_h*0.2+"px";
		choice_submit_button.style.height=main_h*0.065+"px";
		choice_submit_button.style.lineHeight=main_h*0.065+"px";
		$(".choice_item_select .choice_select").children().css({"height":main_h*0.02,"width":main_h*0.02});
		$(".choice_item_select .choice_select").children().children(".circle").css({"height":main_h*0.01,"width":main_h*0.01});
		$(":input:text").css("font-size",main_w*0.0125);
		$("textarea").css("font-size",main_w*0.0125);
	}







	//2、选择框样式初始化,并设置所有框默认不选中
	var select_type=0;//单选多选判断条件
	for (var i = 0; i < choice_item.length; i++) {
		var length_choice_item = 0;
		for (var j = 0; j < $(".choice_item_content").eq(i).children(".choice_item_select").length; j++) {
			if(select_type==0){
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().css("border-radius","50%");
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().children(".circle").css("border-radius","50%");
			}else if(select_type==1){
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().css("border-radius","0");
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().children(".circle").css("border-radius","0");
			}
			$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().children("input").prop("checked",false);
		}
	}



	//3、 选择题点击事件
	console.log("=============================");
	for (var i = 0; i < $(".choice_item_content").length; i++) {
		for (var j = 0; j < $(".choice_item_content").eq(i).children(".choice_item_select").length; j++) {
			$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).click(function(){
				if (select_type==0) {
					$(this).children(".choice_select").children().children("input").prop("checked",true);
					$(this).children(".choice_select").children().children(".circle").css({'background':'#8bc34a'});
					$(this).css({'color':'#b3f7e1'});
					$(this).parent().children(".choice_item_select").not($(this)).children(".choice_select").children().children("input").prop("checked",false);
					$(this).parent().children(".choice_item_select").not($(this)).children(".choice_select").children().children(".circle").css("background-color","#fff");
					$(this).parent().children(".choice_item_select").not($(this)).css({'color':'#fff'});
				}else if (select_type==1) {
					var color = $(this).children(".choice_select").children().children(".circle").css("background-color");
					if (color=="rgb(255, 255, 255)") {
						//$(this).children(".choice_select").children().children("input").css({"display":"block"});
						$(this).children(".choice_select").children().children("input").prop("checked",true);
						$(this).children(".choice_select").children().children(".circle").css({'background':'#8bc34a'});
					}else if(color=="rgb(139, 195, 74)"){
						//$(this).children(".choice_select").children().children("input").css({"display":"block"});
						$(this).children(".choice_select").children().children("input").prop("checked",false);
						$(this).children(".choice_select").children().children(".circle").css({'background':'#fff'});
					}
				}
			})
		}
	}
	console.log("=============================");
	$(".choice_submit_button_c").click(function(){
		var select_count=0;
		for (var i = 0; i < $(".choice_item_content").length; i++) {
			for (var j = 0; j < $(".choice_item_content").eq(i).children(".choice_item_select").length; j++) {
				var condition = $(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().children("input").prop("checked");
				if (condition==true) {
					select_count++;
				}
			}
		}
		if ($(".choice_item_content").length!=select_count) {
			alert("请答完所有题目后重新提交！");
			return false;
		}
	})



	$(".choice_submit_button_f").click(function(){
		var unselect_count=0;
		for (var i = 0; i < $(".choice_item_content").length; i++) {
			for (var j = 0; j < $(".choice_item_content").eq(i).children(".blank").length; j++) {
				var condition = $(".choice_item_content").eq(i).children(".blank").eq(j).children().eq(1).children().children("input").prop("value");
				console.log(condition)
				if (condition=="") {
					unselect_count++;
				}
			}
		}
		if (unselect_count!=0) {
			alert("请答完所有题目后重新提交！");
			return false;
		}
	})
	$(".choice_submit_button_s").click(function(){
		var unselect_count=0;
		for (var i = 0; i < $(".choice_item_content").length; i++) {
			var condition = $(".choice_item_content").eq(i).children().eq(1).children("textarea").prop("value");
			if (condition=="") {
				unselect_count++;
			}
		}
		if (unselect_count!=0) {
			alert("请答完所有题目后重新提交！");
			return false;
		}
	})





	// console.log(main.style.width);
	// console.log(choice_title.style.width);
	// console.log(choice_content.style.width);
	// console.log(choice_item[0].style.width);
	// console.log(choice_item_content[0].style.width);
	// console.log("******************************************");
	// console.log(window.screen.availWidth);
	// console.log(document.documentElement.clientWidth);
	// console.log(document.body.offsetWidth);
	// console.log(document.body.scrollWidth );
	// console.log(document.body.clientWidth);
	// console.log("******************************************");
	// console.log(window.screen.availHeight);
	// console.log(document.documentElement.clientHeight);
	// console.log(document.body.offsetHeight);
	// console.log(document.body.scrollHeight );
	// console.log(document.body.clientHeight);

}

window.onresize=function(){
	//1、初始化页面宽度高度
	var main = document.getElementById("main");
	var choice_title = document.getElementById("choice_title");
	var choice_content = document.getElementById("choice_content");
	var choice_item = document.getElementsByClassName("choice_item");
	var choice_item_content = document.getElementsByClassName("choice_item_content");
	var choice_item_select = document.getElementsByClassName("choice_item_select");
	var choice_select = document.getElementsByClassName("choice_select");
	var choice_bottom = document.getElementById("choice_bottom");
	var choice_submit_button = document.getElementById("choice_submit_button");
	//var hhhhhhh = document.getElementById("hhhhhhh");
	var main_w=document.documentElement.clientWidth;
	var main_h=document.documentElement.clientHeight;
	var avali_w=window.screen.availWidth;
	var avali_h=window.screen.availHeight;

	//width
	main.style.width=main_w*0.99+"px";
	choice_title.style.width=main_w*0.81+"px";
	choice_title.style.fontSize=main_w*0.02+"px";
	choice_content.style.width=main_w*0.81+"px";
	choice_content.style.fontSize=main_w*0.0125+"px";
	for (var i = 0; i < choice_item.length; i++) {
		choice_item[i].style.width=main_w*0.81+"px";
		choice_item_content[i].style.width=main_w*0.81+"px";
	}
	choice_bottom.style.width=main_w*0.81+"px";
	choice_submit_button.style.width=main_w*0.125+"px";
	choice_submit_button.style.fontSize=main_w*0.015+"px";
	//height



	// console.log("-------------------------------------------------");
	var length_choice_content=0;
	for (var i = 0; i < choice_item.length; i++) {
		var length_choice_item = 0;
		for (var j = 0; j < $(".choice_item_content").eq(i).children().length; j++) {
			var str3 = $(".choice_item_content").eq(i).children().eq(j).height();
			length_choice_item+=str3;
		}
		length_choice_content+=length_choice_item+40;
		choice_item[i].style.height=length_choice_item+40+"px";
		// console.log(i+1);
		// console.log(length_choice_item+40);
		// console.log("第"+(i+1)+"个题目的高度"+choice_item[i].style.height);
		// console.log(length_choice_content);
	}
	choice_content.style.height=length_choice_content+"px";
	choice_content.style.lineHeight=main_h*0.045+"px";
	choice_bottom.style.height=main_h*0.2+"px";
	choice_submit_button.style.height=main_h*0.065+"px";
	choice_submit_button.style.lineHeight=main_h*0.065+"px";
	// console.log("-------------------------------------------------");


	$(".choice_item_select .choice_select").children().css({"height":main_h*0.02,"width":main_h*0.02});
	$(".choice_item_select .choice_select").children().children(".circle").css({"height":main_h*0.01,"width":main_h*0.01});
	$(":input:text").css("font-size",main_w*0.0125);
	$("textarea").css("font-size",main_w*0.0125);


	//小屏幕兼容
	if(main_h<(avali_h*0.9)&&main_w>(avali_w*0.9)&&main_w<1360){
		main_w=avali_w*0.99;
		//width
		main.style.width=main_w*0.99+"px";
		choice_title.style.width=main_w*0.81+"px";
		choice_content.style.width=main_w*0.81+"px";
		for (var i = 0; i < choice_item.length; i++) {
			choice_item[i].style.width=main_w*0.81+"px";
			choice_item_content[i].style.width=main_w*0.81+"px";
		}
		choice_bottom.style.width=main_w*0.81+"px";
	}
	//小窗口兼容
	if(main_h<(avali_h*0.9)&&main_w>(avali_w*0.9)&&main_w<1360){
		//width
		main_h=avali_h;
		main_w=avali_w;
		main.style.width=main_w*0.99+"px";
		choice_title.style.width=main_w*0.81+"px";
		choice_title.style.fontSize=main_w*0.02+"px";
		choice_content.style.width=main_w*0.81+"px";
		choice_content.style.fontSize=main_w*0.0125+"px";
		for (var i = 0; i < choice_item.length; i++) {
			choice_item[i].style.width=main_w*0.81+"px";
			choice_item_content[i].style.width=main_w*0.81+"px";
		}
		choice_bottom.style.width=main_w*0.81+"px";
		choice_submit_button.style.width=main_w*0.125+"px";
		choice_submit_button.style.fontSize=main_w*0.015+"px";

		var length_choice_content=0;
		for (var i = 0; i < choice_item.length; i++) {
			var length_choice_item = 0;
			for (var j = 0; j < $(".choice_item_content").eq(i).children().length; j++) {
				var str3 = $(".choice_item_content").eq(i).children().eq(j).height();
				length_choice_item+=str3;
			}
			length_choice_content+=length_choice_item+40;
			choice_item[i].style.height=length_choice_item+40+"px";
		}
		choice_content.style.height=length_choice_content+"px";
		choice_content.style.lineHeight=main_h*0.045+"px";
		choice_bottom.style.height=main_h*0.2+"px";
		choice_submit_button.style.height=main_h*0.065+"px";
		choice_submit_button.style.lineHeight=main_h*0.065+"px";
		$(".choice_item_select .choice_select").children().css({"height":main_h*0.02,"width":main_h*0.02});
		$(".choice_item_select .choice_select").children().children(".circle").css({"height":main_h*0.01,"width":main_h*0.01});
		$(":input:text").css("font-size",main_w*0.0125);
		$("textarea").css("font-size",main_w*0.0125);
	}







	//2、选择框样式初始化,并设置所有框默认不选中
	var select_type=0;//单选多选判断条件
	for (var i = 0; i < choice_item.length; i++) {
		var length_choice_item = 0;
		for (var j = 0; j < $(".choice_item_content").eq(i).children(".choice_item_select").length; j++) {
			if(select_type==0){
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().css("border-radius","50%");
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().children(".circle").css("border-radius","50%");
			}else if(select_type==1){
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().css("border-radius","0");
				$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().children(".circle").css("border-radius","0");
			}
			$(".choice_item_content").eq(i).children(".choice_item_select").eq(j).children(".choice_select").children().children("input").prop("checked",false);
		}
	}
}
