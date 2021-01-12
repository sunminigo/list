		/*이미지가 이동 왼쪽*/
		/*버튼도 같이 선택*/
		/*setinterval과 clearinterval*/
		function changeItem(num){
			$("#navi a.on").removeClass("on");
			$("#navi a").eq(num).addClass("on");
			$("#visual").stop().animate({left:-(num*960)+"px"},600,"easeOutBounce")
		}
		function next(){
			var temp=$("#navi a.on").index()+1;
			if(temp > $("#navi a").length-1){
				temp=0;//번호체크
			}
			//alert(temp);하면 번호가 어떻게 돌아가는지 확인할 수 있다.
			changeItem(temp);
		}

		var sid;
		$(document).ready(function(){
			sid=setInterval(next,3000);
			$("#navi a").mouseenter(function(){
				clearInterval(sid);
				changeItem($(this).index());
				
			})
			$("#navi a").mouseleave(function(){
				sid=setInterval(next,3000);
			})
		})

