define(function(require, exports, module) {

  // 通过 exports 对外提供接口
  exports.university = $(window).ready(function(){
	var uImgWidth = $('.university-list-mian a').width();		//获取每个图片所占的宽度
  	var uImgNum = $('.university-list-mian a').size();	//获取学习图标的个数
  	var uImgWidthTotal = uImgWidth*uImgNum +"px";	//获取所有学校图标的总宽度
  	$('.university-list-mian').css('width',uImgWidthTotal);		//设置university-list宽度
  	$('.university-box').mouseenter(function(){	//鼠标移入时显示滑动按钮
  		$(this).find('span').fadeIn(400);
  	});
  	
  	$('.university-box').mouseleave(function(){		//鼠标移入时隐藏滑动按钮
  		$(this).find('span').fadeOut(400);
  	});
  	
  	$('#banner-left2').click(function(){		//点击左侧按钮时
  		$('.university-list-main').stop().animate({left:-uImgWidth},300)
  		var clonefirst = $('.university-list-mian a').first().clone();
  		$('.university-list-mian').append(clonefirst);
  		$('.university-list-mian a').first().remove();
  	});
  	
  	$('#banner-right2').click(function(){
  		var clonelast = $('.university-list-mian a').last().clone();
  		$('.university-list-mian').prepend(clonelast);
  		$('.university-list-mian a').last().remove();
  		$('.university-list-mian').animate({right:uImgWidth},300)
  	});
  })

});