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
$banner = $(".banner");
$objLength = $banner.children().length;
$objMax = $objLength-$frameNum;

});
$bannerAuto = setInterval(function(){
	$num--;	
	console.log($num);
	if($num<-$objMax){
	$num=0;
	$banner.animate({left:0},400);
	}						
	$posX = $num*$colWidth;		
	$banner.animate({left:$posX},400);	
	loctionBt($num);
	},3000);

function loctionBt($btNum){
	$num = $btNum;
		$posX = $btNum*$colWidth;		
	$banner.animate({left:$posX},400);		
}


