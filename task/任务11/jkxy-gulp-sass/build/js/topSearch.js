define(function(require, exports, module) {


  // 通过 exports 对外提供接口
  exports.topSearch = $(window).ready(function(){
  		$('.search-btn').mouseenter(function(){		//鼠标移入btn时更改样式
  				$(this).css({
  					'background-color':'#35b558',
  					"background-image":"url(img/topsearch-icon2_8c8d8b0.png)"
  				})
  		})
  		
  		$('.search-btn').mouseout(function(){		//鼠标移出btn时还原样式
  				$(this).attr('style','')
  		})
  		
  		$('.input-text').focus(function(){
  			$('.hot-words').hide();
  			$('.search-btn').css({
  				'background-color':'#35b558',
  				"background-image":"url(img/topsearch-icon2_8c8d8b0.png)",
  				"border-color":"#35b558",
					"border-style":"solid",
					"border-size":"1px",
  			})
  			
  		})
  		
  		$('.input-text').blur(function(){
  			$('.hot-words').show();
  			$('.search-btn').attr('style','')
  		})
  		
  })


});