$(document).ready(function(){
	var $careNum=0;
	var $theSize=$(".list1 li").size();

	$(".list1 li").hide();
	$(".list1 li").eq(0).show();
	
	$(".leftbtn1").click(function(){
		$careNum--;
		if($careNum<0) $careNum=$theSize-1;
		$(".list1 li").hide();
		$(".list1 li").eq($careNum).show();		
	})
	
	$(".rightbtn1").click(function(){
		$careNum++;
		if($careNum>=$theSize) $careNum=0;
		$(this).parent().children("li");
		$(".list1 li").hide();
		$(".list1 li").eq($careNum).show();
	})
		return false;
});


$(document).ready(function(){
	var $careNum=0;
	var $theSize=$(".list2 li").size();

	$(".list2 li").hide();
	$(".list2 li").eq(0).show();
	
	$(".leftbtn2").click(function(){
		$careNum--;
		if($careNum<0) $careNum=$theSize-1;
		$(".list2 li").hide();
		$(".list2 li").eq($careNum).show();		
	})
	
	$(".rightbtn2").click(function(){
		$careNum++;
		if($careNum>=$theSize) $careNum=0;
		$(this).parent().children("li");
		$(".list2 li").hide();
		$(".list2 li").eq($careNum).show();		
	})
		return false;

	});

$(document).ready(function(){
	var $careNum=0;
	var $theSize=$(".list3 li").size();

	$(".list3 li").hide();
	$(".list3 li").eq(0).show();
	
	$(".leftbtn3").click(function(){
		$careNum--;
		if($careNum<0) $careNum=$theSize-1;
		$(".list3 li").hide();
		$(".list3 li").eq($careNum).show();		
	})
	
	$(".rightbtn3").click(function(){
		$careNum++;
		if($careNum>=$theSize) $careNum=0;
		$(this).parent().children("li");
		$(".list3 li").hide();
		$(".list3 li").eq($careNum).show();		
	})
		return false;

	});

$(document).ready(function(){
	var $careNum=0;
	var $theSize=$(".list4 li").size();

	$(".list4 li").hide();
	$(".list4 li").eq(0).show();
	
	$(".leftbtn4").click(function(){
		$careNum--;
		if($careNum<0) $careNum=$theSize-1;
		$(".list4 li").hide();
		$(".list4 li").eq($careNum).show();		
	})
	
	$(".rightbtn4").click(function(){
		$careNum++;
		if($careNum>=$theSize) $careNum=0;
		$(this).parent().children("li");
		$(".list4 li").hide();
		$(".list4 li").eq($careNum).show();		
	})
		return false;

	});

$(document).ready(function(){
	var $careNum=0;
	var $theSize=$(".list5 li").size();

	$(".list5 li").hide();
	$(".list5 li").eq(0).show();
	
	$(".leftbtn5").click(function(){
		$careNum--;
		if($careNum<0) $careNum=$theSize-1;
		$(".list5 li").hide();
		$(".list5 li").eq($careNum).show();		
	})
	
	$(".rightbtn5").click(function(){
		$careNum++;
		if($careNum>=$theSize) $careNum=0;
		$(this).parent().children("li");
		$(".list5 li").hide();
		$(".list5 li").eq($careNum).show();		
	})
		return false;

	});

