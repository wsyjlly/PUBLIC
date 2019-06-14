

window.onload=function(){
	//初始化页面宽度高度
	var main = document.getElementById("main");
	var tot_height = document.getElementById("tot_height");
	var top = document.getElementById("top");
	var center = document.getElementById("center");
	var bottom = document.getElementById("bottom");
	var main_w=document.documentElement.clientWidth;
	var main_h=document.documentElement.clientHeight;
	var avali_h=window.screen.availHeight;

	main.style.width=main_w+"px";
	tot_height.style.width=main_w*0.90+"px";
	top.style.width=main_w*0.90+"px";
	center.style.width=main_w*0.90+"px";
	bottom.style.width=main_w*0.90+"px";

	main.style.height=main_h+"px";
	tot_height.style.height=main_h*0.90+"px";
	top.style.height=main_h*0.1+"px";
	center.style.height=main_h*0.70+"px";
	bottom.style.height=main_h*0.1+"px";

	if(main_h<390){
		main.style.height=avali_h+"px";
		tot_height.style.height=avali_h*0.9+"px";
		top.style.height=avali_h*0.1+"px";
		center.style.height=avali_h*0.70+"px";
		bottom.style.height=avali_h*0.1+"px";
	}
	
	console.log(window.innerHeight);
	console.log(main.style.width);
	console.log(main.style.height);
	console.log("------------------------------------------");
	console.log(tot_height.style.height);
	console.log(tot_height.style.width);
	console.log(top.style.height);
	console.log(center.style.height);
	console.log(bottom.style.height);
	console.log("******************************************");
	console.log(window.screen.availHeight);
	console.log(document.body.offsetHeight );
	console.log(document.body.scrollHeight );
	console.log(document.body.clientHeight);
}

window.onresize=function(){
	//窗口大小变化时化页面宽度高度
	var main = document.getElementById("main");
	var tot_height = document.getElementById("tot_height");
	var top = document.getElementById("top");
	var center = document.getElementById("center");
	var bottom = document.getElementById("bottom");
	var main_w=document.documentElement.clientWidth;
	var main_h=document.documentElement.clientHeight;
	var avali_h=window.screen.availHeight;
	
	
	main.style.width=main_w+"px";
	tot_height.style.width=main_w*0.90+"px";
	top.style.width=main_w*0.90+"px";
	center.style.width=main_w*0.90+"px";
	bottom.style.width=main_w*0.90+"px";


	main.style.height=main_h+"px";
	tot_height.style.height=main_h*0.90+"px";
	top.style.height=main_h*0.1+"px";
	center.style.height=main_h*0.70+"px";
	bottom.style.height=main_h*0.1+"px";

	if(main_h<390){
		main.style.height=avali_h+"px";
		tot_height.style.height=avali_h*0.9+"px";
		top.style.height=avali_h*0.1+"px";
		center.style.height=avali_h*0.70+"px";
		bottom.style.height=avali_h*0.1+"px";
	}
}