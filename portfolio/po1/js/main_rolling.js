var $num = 0;
var $colWidth = 1000;
var $frameNum = 1;
var $rolling = true;
var $bannerAuto;
var $posX;
var $banner;
var $objLength;
var $objMax;
var $conBt;
var $conImg;
$(document).ready(function(){
$banner = $("#visual");
$objLength = $banner.children().length;
$objMax = $objLength-$frameNum;

$conBt = $("#visual > li  > img");
});
$bannerAuto = setInterval(function(){
	$num--;	
	if($num<-$objMax){
	$num=0;
	$banner.animate({left:0},50);
	}						
	$posX = $num*$colWidth;		
	$banner.animate({left:$posX},400);	
	loctionBt($num);
	},3000);

function loctionBt($btNum){
	$num = $btNum;
	$($conBt).each(function(){
		$(this).attr("src",$(this).attr("src").replace(".gif1"))
	});
	$($conBt[Math.abs($btNum)]).attr("src",$($conBt[Math.abs($btNum)]).attr("src").replace(".gif2"));
	$posX = $btNum*$colWidth;		
	$banner.animate({left:$posX},400);		
}


