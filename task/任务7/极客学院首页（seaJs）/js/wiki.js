define(function(require,exports,module){
	$(window).ready(function(){
		$('.imgbox').mouseover(function(){
			$(this).find('i').show();
			$(this).find('img').css("animation","ffk-animate 1s ease forwards");
		})
		
		$('.imgbox').mouseout(function(){
			$(this).find('i').hide();
			$(this).find('img').css("animation","ffk-animate2 1s ease forwards");
		})
		
	});
});