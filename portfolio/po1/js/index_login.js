$(document).ready(function(){
	$("#searchlink>.search>input").click(function(){
		$(this).css("background","none").css("background-color","#fff");
	});

	$("#searchlink>.search>input").focusout(function(){
		if($(this).val()==""){
			$(this).css("background","url(images/search_txt.gif) no-repeat");
		}else{
			$(this).css("background-color","#fff");
		}
	});

	$("#searchlink>.search>input").blur(function(){
		if($(this).val()==""){
			$(this).css("background","url(images/search_txt.gif) no-repeat");
		}else{
			$(this).css("background-color","#fff");
		}
	});

});