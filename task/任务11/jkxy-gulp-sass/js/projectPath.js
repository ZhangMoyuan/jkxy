define(function(require, exports, module){
	exports.projectPath = $(window).ready(function(){
		
		$('.learn-card a').mouseover(function(){
			$(this).css({
				"border":"1px solid rgb(53,181,88)",
			});
			
			$(this).children('.greenbtn2').css({
				 "background": "#35b558",
                 "color": "#fff",
                 "border-color": "#35b558",
			});
		});
		
		$('.learn-card a').mouseout(function(){
			$(this).css({
				"border":"1px solid #e4e4e4",
			})
			
			$(this).children('.greenbtn2').css({
				 "background": "#f3fff6",
                 "color": "#35b558",
                 "border-color": "#35b558",
			});
		});
	});
})

