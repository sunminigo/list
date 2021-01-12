	<script type="javascript">
	$(document).ready(function(){
		$('.vi_btn > li').click(function(){
			$('.vi_btn > li > a').removeClass('on');
			$(this).find('>a').addClass('on');//.next().addClass도 됨
			$('.vi_img > li').hide();
			$('.vi_img > li').eq($(this).index()).show();
		})
	})

	$(document).ready(function(){
		$('.layer').css({opacity:0.5});
		$('.vi_img').mouseover(function(){
			$(this).find(".layer").stop().animate({bottom:40,opacity:0.5},800);
			$(this).find("vi_img li")
		})
		$('.news').mouseout(function(){
			$(this).find(".layer").stop().animate({bottom:40,opacity:0.5},800);//오퍼시티는 css에서도 가능하지만 css에서 적용할경우 하위브라우저에서는 안됨
		})
	})
</script>