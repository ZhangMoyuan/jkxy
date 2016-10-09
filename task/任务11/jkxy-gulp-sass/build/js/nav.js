define(function(require,exports,module){
	$(window).ready(function(){
		$('.navbox').mouseover(function(){	//鼠标移入时显示 navpanel
			$('.navpanel').show();
		});
		$('.navpanel').mouseover(function(){	//鼠标移入时显示 navpanel
			$('.navpanel').show();
		});
		
		$('.navbox').mouseout(function(){
			$('.navpanel').hide();
		});
		
		$('.panel-item').mouseover(function(){
			$(this).children('span').show();
		});
		
		$('.panel-item').mouseout(function(){
			$(this).children('span').hide();
		});
		
	});
});