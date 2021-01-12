//공통으로 들어가는 js
$(document).ready(function(){
//index 주메뉴
function nav(gnbName){
	$(gnbName).find('ul').hide();
	
	// 메인메뉴 마우스 오버
	$(gnbName).children('li').children('a').mouseover(function(){
		$(gnbName).find('ul').slideUp('fast');
		$(this).next().slideDown('fast');

		$(gnbName).find('li img').each(function(){
				$(this).attr('src', $(this).attr('src').replace('_on.gif', '.gif'));
		});

		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.gif','_on.gif'));
	});	
	
	//서브메뉴 마우스 오버
	$(gnbName).find('ul li a').mouseover(function(){
		
		$(gnbName).find('ul li img').each(function(){
				$(this).attr('src', $(this).attr('src').replace('_on.gif', '.gif'));
		});

		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.gif','_on.gif'));
	});

	//메인 focus(tab키를 눌렀을때)
		$(gnbName).children('li').children('a').focus(function(){
		$(gnbName).find('ul').slideUp('fast');
		$(this).next().slideDown('fast');		

		$(gnbName).find('li img').each(function(){
				$(this).attr('src', $(this).attr('src').replace('_on.gif', '.gif'));
		});

		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.gif','_on.gif'));
	});	
	
	//서브메뉴 focus(tab키를 눌렀을때)
	$(gnbName).find('ul li a').focus(function(){
		
		$(gnbName).find('ul li img').each(function(){
				$(this).attr('src', $(this).attr('src').replace('_on.gif', '.gif'));
		});

		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.gif','_on.gif'));
	});
}
nav('.gnbmenu');
//이거랑 이미지만 내가 설정한 이름으로 바꾸면됨

});
