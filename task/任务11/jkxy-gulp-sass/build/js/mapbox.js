define(function(require, exports, module){
	exports.mapbox = $(window).ready(function(){
		$('.mapbox-1200 .card-transform a').mouseover(function(){
			$(this).children('.front').css('transform','rotateY(-180deg)');
			$(this).children('.back').css('transform','rotateY(0deg)');
		});
		
		$('.mapbox-1200 .card-transform a').mouseout(function(){
			$(this).children('.front').css('transform','rotateY(0deg)');
			$(this).children('.back').css('transform','rotateY(180deg)');
		});
	});
	
});