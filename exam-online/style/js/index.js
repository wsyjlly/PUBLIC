

// 倒计时
function time_clock_out(h,m,s,href){
	var time_clock = document.getElementById("time_clock");
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
//页面初始化
function auto_loading(){
	//初始化页面宽度高度
	var main = document.getElementById("main");
	var index_title = document.getElementById("index_title");
	var index_tip = document.getElementById("index_tip");
	var index_content = document.getElementById("index_content");
	var index_content_item = document.getElementsByClassName("index_content_item");
	var index_content_item_inner = document.getElementsByClassName("index_content_item_inner");
	var index_al_down = document.getElementsByClassName("index_al_down");
	var index_submit = document.getElementById("index_submit");
	var index_bottom = document.getElementById("index_bottom");
	var index_submit_button = document.getElementById("index_submit_button");
	var main_w=document.documentElement.clientWidth;
	var main_h=document.documentElement.clientHeight;
	var avali_w=window.screen.availWidth;
	var avali_h=window.screen.availHeight;

	time_clock_out(1,30,0,"http://www.baidu.com");

	

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
		"border-radius":"1vh"
	})

	// width
	main.style.width=main_w+"px";
	index_title.style.width=main_w*0.81+"px";
	index_title.style.fontSize=main_w*0.81*0.026+"px";
	index_tip.style.width=main_w*0.81+"px";
	index_tip.style.fontSize=main_w*0.81*0.022+"px";
	index_content.style.width=main_w*0.81+"px";
	for (var i = 0; i < index_content_item.length; i++) {
		index_content_item[i].style.width=main_w*0.27+"px";
		index_content_item_inner[i].style.width=main_w*0.27*0.75+"px";
		index_content_item_inner[i].style.padding=main_w*0.27*0.09+"px";
		index_content_item_inner[i].style.fontSize=main_w*0.27*0.04*1.4+"px";
	}
	index_submit.style.width=main_w*0.81+"px";
	index_submit_button.style.width=main_w*0.81*0.16+"px";
	index_bottom.style.width=main_w*0.81+"px";

	// height
	main.style.height=main_h+"px";
	index_title.style.height=main_h*0.126+"px";
	index_title.style.lineHeight=main_h*0.126+"px";
	index_tip.style.height=main_h*0.063+"px";
	index_tip.style.lineHeight=main_h*0.063+"px";
	var index_content_h = index_content.style.height=main_h*0.52+"px";
	for (var i = 0; i < index_content_item.length; i++) {
		index_content_item[i].style.height=main_h*0.26+"px";
		index_content_item_inner[i].style.height=main_h*0.13+"px";
		index_content_item_inner[i].style.lineHeight=main_h*0.16/4+"px";
	}
	index_submit.style.height=main_h*0.81*0.14+"px";
	index_submit_button.style.height=main_h*0.81*0.082+"px";
	index_submit_button.style.lineHeight=main_h*0.81*0.082+"px";
	index_submit_button.style.fontSize=main_h*0.81*0.04+"px";
	index_bottom.style.height=main_h*0.81*0.07+"px";

	// submit-marrin-right
	index_submit_button.style.marginRight=main_w*0.81*0.011+"px";


	if(main_h<(avali_h*0.9)&&main_w<(avali_w*0.9)){
		main_w=avali_w;
		main_h=avali_h;
		//width
		main.style.width=main_w+"px";
		index_title.style.width=main_w*0.81+"px";
		index_title.style.fontSize=main_w*0.81*0.026+"px";
		index_tip.style.width=main_w*0.81+"px";
		index_tip.style.fontSize=main_w*0.81*0.022+"px";
		index_content.style.width=main_w*0.81+"px";
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.width=main_w*0.27+"px";
			index_content_item_inner[i].style.width=main_w*0.27*0.75+"px";
			index_content_item_inner[i].style.padding=main_w*0.27*0.09+"px";
			index_content_item_inner[i].style.fontSize=main_w*0.27*0.04*1.4+"px";
		}
		index_submit.style.width=main_w*0.81+"px";
		index_submit_button.style.width=main_w*0.81*0.16+"px";
		index_bottom.style.width=main_w*0.81+"px";

		// height
		main.style.height=main_h+"px";
		index_title.style.height=main_h*0.126+"px";
		index_title.style.lineHeight=main_h*0.126+"px";
		index_tip.style.height=main_h*0.063+"px";
		index_tip.style.lineHeight=main_h*0.063+"px";
		var index_content_h = index_content.style.height=main_h*0.52+"px";
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.height=main_h*0.26+"px";
			index_content_item_inner[i].style.height=main_h*0.13+"px";
			index_content_item_inner[i].style.lineHeight=main_h*0.16/4+"px";
		}
		index_submit.style.height=main_h*0.81*0.14+"px";
		index_submit_button.style.height=main_h*0.81*0.082+"px";
		index_submit_button.style.lineHeight=main_h*0.81*0.082+"px";
		index_submit_button.style.fontSize=main_h*0.81*0.04+"px";
		index_bottom.style.height=main_h*0.81*0.07+"px";

		// submit-marrin-right
		index_submit_button.style.marginRight=main_w*0.81*0.011+"px";

	}


	if(main_h<(avali_h*0.9)&&main_w>(avali_w*0.9)&&main_w<1360){
		// height
		main.style.height=avali_h+"px";
		index_title.style.height=avali_h*0.126+"px";
		index_title.style.lineHeight=avali_h*0.126+"px";
		index_tip.style.height=avali_h*0.063+"px";
		index_tip.style.lineHeight=avali_h*0.063+"px";
		var index_content_h = index_content.style.height=avali_h*0.52+"px";
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.height=avali_h*0.26+"px";
			index_content_item_inner[i].style.height=avali_h*0.14+"px";
			index_content_item_inner[i].style.lineHeight=avali_h*0.16/4+"px";
		}
		index_submit.style.height=avali_h*0.81*0.14+"px";
		index_submit_button.style.height=avali_h*0.81*0.082+"px";
		index_submit_button.style.lineHeight=avali_h*0.81*0.082+"px";
		index_submit_button.style.fontSize=avali_h*0.81*0.04+"px";
		index_bottom.style.height=avali_h*0.81*0.07+"px";
		//width
		avali_w=avali_w*0.98;
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.width=avali_w*0.27+"px";
			index_content_item_inner[i].style.width=avali_w*0.27*0.75+"px";
			index_content_item_inner[i].style.padding=avali_w*0.27*0.09+"px";
			index_content_item_inner[i].style.fontSize=avali_w*0.27*0.04*1.4+"px";
		}
		// submit-marrin-right
		index_submit_button.style.marginRight=main_w*0.81*0.019+"px";

	}



	
	console.log(window.innerHeight);
	console.log(main.style.width);
	console.log(main.style.height);
	console.log("-------------------width-----------------------");
	console.log(index_title.style.width);
	console.log(index_tip.style.width);
	console.log(index_content.style.width);
	console.log(index_content_item[0].style.width);
	console.log(index_submit.style.width);
	console.log(index_bottom.style.width);
	console.log("-------------------height-----------------------");
	console.log(index_title.style.height);
	console.log(index_tip.style.height);
	console.log(index_content.style.height);
	console.log(index_content_item[0].style.height);
	console.log(index_submit.style.height);
	console.log(index_bottom.style.height);
	console.log("******************************************");
	console.log(window.screen.availHeight);
	console.log(document.body.offsetHeight );
	console.log(document.body.scrollHeight );
	console.log(document.body.clientHeight);
	for (var i = 0; i < index_content_item_inner.length; i++) {
		index_al_down[i].style.display="none";
	}
	
	$(".index_content_item_inner").click(function(){
		var index=$(this).index('.index_content_item_inner');
		$('.index_content_item_inner').eq(index).css({'background':'#b3f7e1'});
		console.log(index);
		$('.index_al_down').eq(index).show();
	})
}

window.onresize=function(){
	//初始化页面宽度高度
	var main = document.getElementById("main");
	var index_title = document.getElementById("index_title");
	var index_tip = document.getElementById("index_tip");
	var index_content = document.getElementById("index_content");
	var index_content_item = document.getElementsByClassName("index_content_item");
	var index_content_item_inner = document.getElementsByClassName("index_content_item_inner");
	var index_al_down = document.getElementsByClassName("index_al_down");
	var index_submit = document.getElementById("index_submit");
	var index_bottom = document.getElementById("index_bottom");
	var index_submit_button = document.getElementById("index_submit_button");
	var main_w=document.documentElement.clientWidth;
	var main_h=document.documentElement.clientHeight;
	var avali_w=window.screen.availWidth;
	var avali_h=window.screen.availHeight;



	// width
	main.style.width=main_w+"px";
	index_title.style.width=main_w*0.81+"px";
	index_title.style.fontSize=main_w*0.81*0.026+"px";
	index_tip.style.width=main_w*0.81+"px";
	index_tip.style.fontSize=main_w*0.81*0.022+"px";
	index_content.style.width=main_w*0.81+"px";
	for (var i = 0; i < index_content_item.length; i++) {
		index_content_item[i].style.width=main_w*0.27+"px";
		index_content_item_inner[i].style.width=main_w*0.27*0.75+"px";
		index_content_item_inner[i].style.padding=main_w*0.27*0.09+"px";
		index_content_item_inner[i].style.fontSize=main_w*0.27*0.04*1.4+"px";
	}
	index_submit.style.width=main_w*0.81+"px";
	index_submit_button.style.width=main_w*0.81*0.16+"px";
	index_bottom.style.width=main_w*0.81+"px";

	// height
	main.style.height=main_h+"px";
	index_title.style.height=main_h*0.126+"px";
	index_title.style.lineHeight=main_h*0.126+"px";
	index_tip.style.height=main_h*0.063+"px";
	index_tip.style.lineHeight=main_h*0.063+"px";
	var index_content_h = index_content.style.height=main_h*0.52+"px";
	for (var i = 0; i < index_content_item.length; i++) {
		index_content_item[i].style.height=main_h*0.26+"px";
		index_content_item_inner[i].style.height=main_h*0.13+"px";
		index_content_item_inner[i].style.lineHeight=main_h*0.16/4+"px";
	}
	index_submit.style.height=main_h*0.81*0.14+"px";
	index_submit_button.style.height=main_h*0.81*0.082+"px";
	index_submit_button.style.lineHeight=main_h*0.81*0.082+"px";
	index_submit_button.style.fontSize=main_h*0.81*0.04+"px";
	index_bottom.style.height=main_h*0.81*0.07+"px";

	// submit-marrin-right
	index_submit_button.style.marginRight=main_w*0.81*0.011+"px";


	if(main_h<(avali_h*0.9)&&main_w<(avali_w*0.9)){
		main_w=avali_w;
		main_h=avali_h;
		//width
		main.style.width=main_w+"px";
		index_title.style.width=main_w*0.81+"px";
		index_title.style.fontSize=main_w*0.81*0.026+"px";
		index_tip.style.width=main_w*0.81+"px";
		index_tip.style.fontSize=main_w*0.81*0.022+"px";
		index_content.style.width=main_w*0.81+"px";
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.width=main_w*0.27+"px";
			index_content_item_inner[i].style.width=main_w*0.27*0.75+"px";
			index_content_item_inner[i].style.padding=main_w*0.27*0.09+"px";
			index_content_item_inner[i].style.fontSize=main_w*0.27*0.04*1.4+"px";
		}
		index_submit.style.width=main_w*0.81+"px";
		index_submit_button.style.width=main_w*0.81*0.16+"px";
		index_bottom.style.width=main_w*0.81+"px";

		// height
		main.style.height=main_h+"px";
		index_title.style.height=main_h*0.126+"px";
		index_title.style.lineHeight=main_h*0.126+"px";
		index_tip.style.height=main_h*0.063+"px";
		index_tip.style.lineHeight=main_h*0.063+"px";
		var index_content_h = index_content.style.height=main_h*0.52+"px";
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.height=main_h*0.26+"px";
			index_content_item_inner[i].style.height=main_h*0.13+"px";
			index_content_item_inner[i].style.lineHeight=main_h*0.16/4+"px";
		}
		index_submit.style.height=main_h*0.81*0.14+"px";
		index_submit_button.style.height=main_h*0.81*0.082+"px";
		index_submit_button.style.lineHeight=main_h*0.81*0.082+"px";
		index_submit_button.style.fontSize=main_h*0.81*0.04+"px";
		index_bottom.style.height=main_h*0.81*0.07+"px";

		// submit-marrin-right
		index_submit_button.style.marginRight=main_w*0.81*0.011+"px";

	}


	if(main_h<(avali_h*0.9)&&main_w>(avali_w*0.9)&&main_w<1360){
		// height
		main.style.height=avali_h+"px";
		index_title.style.height=avali_h*0.126+"px";
		index_title.style.lineHeight=avali_h*0.126+"px";
		index_tip.style.height=avali_h*0.063+"px";
		index_tip.style.lineHeight=avali_h*0.063+"px";
		var index_content_h = index_content.style.height=avali_h*0.52+"px";
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.height=avali_h*0.26+"px";
			index_content_item_inner[i].style.height=avali_h*0.14+"px";
			index_content_item_inner[i].style.lineHeight=avali_h*0.16/4+"px";
		}
		index_submit.style.height=avali_h*0.81*0.14+"px";
		index_submit_button.style.height=avali_h*0.81*0.082+"px";
		index_submit_button.style.lineHeight=avali_h*0.81*0.082+"px";
		index_submit_button.style.fontSize=avali_h*0.81*0.04+"px";
		index_bottom.style.height=avali_h*0.81*0.07+"px";
		//width
		avali_w=avali_w*0.98;
		for (var i = 0; i < index_content_item.length; i++) {
			index_content_item[i].style.width=avali_w*0.27+"px";
			index_content_item_inner[i].style.width=avali_w*0.27*0.75+"px";
			index_content_item_inner[i].style.padding=avali_w*0.27*0.09+"px";
			index_content_item_inner[i].style.fontSize=avali_w*0.27*0.04*1.4+"px";
		}
		// submit-marrin-right
		index_submit_button.style.marginRight=main_w*0.81*0.019+"px";

	}
}


