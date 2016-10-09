define(function(require, exports, module){
	exports.lessionClassFiy = $(window).ready(function(){
		$('.lesson-classfiy-nav>ul>li>div').mouseover(function(){	//鼠标从位于元素上方时
			$(this).children('.lesson-list-show').hide();	//隐藏所有的'.lesson-list-show'
			$(this).children(".lesson-list-show").show();	//只显示当前的
		})
		
		$('.lesson-classfiy-nav>ul>li>div').mouseout(function(){
			$(this).children(".lesson-list-show").hide();
		})
	});
	
});