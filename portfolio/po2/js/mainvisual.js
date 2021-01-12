// JavaScript Document

		/*이미지가 이동 왼쪽*/
		/*버튼도 같이 선택*/
		/*setinterval과 clearinterval*/
		function changeItem(num){
			$(".vi_btn a.on").removeClass("on");
			$(".vi_btn a").eq(num).addClass("on");
			$(".visual").stop().animate({left:-(num*1040)+"px"},600,"linear")
		}
		function next(){
			var temp=$(".vi_btn a.on").index()+1;
			if(temp > $(".vi_btn a").length-1){
				temp=0;//번호체크
			}
			//alert(temp);하면 번호가 어떻게 돌아가는지 확인할 수 있다.
			changeItem(temp);
		}

		var sid;
		$(document).ready(function(){
			sid=setInterval(next,3000);
			$(".vi_btn a").mouseenter(function(){
				clearInterval(sid);
				changeItem($(this).index());
				
			})
			$(".vi_btn a").mouseleave(function(){
				sid=setInterval(next,3000);
			})
		})

