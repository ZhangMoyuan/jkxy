define(function(require, exports, module) {

  // 通过 exports 对外提供接口
  exports.enterprise = $(window).ready(function(){
		var logoWidth = $('.swiper-wrapper a').width();		//获取每个图片所占的宽度
  	var logoNum = $('.swiper-wrapper a').size();	//获取logo的个数
  	var logoWidthTotal = logoWidth*logoNum +"px";	//获取所有logo的总宽度
  	$('.swiper-container').css('width',logoWidthTotal);		//设置
  	$('.strategy').mouseenter(function(){	//鼠标移入时显示滑动按钮
  		$(this).find('span').fadeIn(400);
  		
  	});
  	
  	$('.strategy').mouseleave(function(){		//鼠标移入时隐藏滑动按钮
  		$(this).find('span').fadeOut(400);
  	});
  	
  	$('#banner-left3').click(function(){		//点击左侧按钮时
  		$('.swiper-wrapper').stop().animate({left:-logoWidth},300)
  		var clonefirst = $('.swiper-wrapper a').first().clone();
  		$('.swiper-wrapper').append(clonefirst);
  		$('.swiper-wrapper a').first().remove();
  	});
  	
  	$('#banner-right3').click(function(){
  		$('.swiper-wrapper').animate({right:logoWidth},300)
  		var clonelast = $('.swiper-wrapper a').last().clone();
  		$('.swiper-wrapper').prepend(clonelast);
  		$('.swiper-wrapper a').last().remove();
  		$('.swiper-wrapper').css({right:logoWidth})  		
  		
  	});
  })

});