$(document).ready(function(){
	var $careNum=0;
	var $theSize=$(".mon table").size();

	$(".mon table").hide();
	$(".mon table").eq(0).show();
	
	$(".cal_btnL").click(function(){
		$careNum--;
		if($careNum<0) $careNum=$theSize-1;
		$(".mon table").hide();
		$(".mon table").eq($careNum).show();		
		return false;
	})
	
	$(".cal_btnR").click(function(){
		$careNum++;
		if($careNum>=$theSize) $careNum=0;
		$(this).parent().children("li");
		$(".mon table").hide();
		$(".mon table").eq($careNum).show();		
		return false;
	})
});