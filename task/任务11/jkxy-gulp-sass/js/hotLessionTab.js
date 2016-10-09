define(function(require,exports,module){
	$(window).ready(function(){
		$('#rmtj').mouseover(function(){		//鼠标移入热门推荐事件
			$('.hot-lesson>ul').children().attr('class','');	//移除所有.hot-lesson>ul li的class
			$(this).addClass('on');	//将当前的class设置为on
			$('#hot-lessonbox').children().hide();
			$('#hot-lessonbox>div').eq(0).show();
		});
		
		$('#zxkc').mouseover(function(){		//鼠标移入热门课程事件
			$('.hot-lesson>ul').children().attr('class','');	//移除所有.hot-lesson>ul li的class
			$(this).addClass('on');		//将当前的class设置为on
			$('#hot-lessonbox').children().hide();
			$('#hot-lessonbox>div').eq(1).show();
		});
		
		$('#mfkc').mouseover(function(){		//鼠标移入免费课程事件
			$('.hot-lesson>ul').children().attr('class','');	//移除所有.hot-lesson>ul li的class
			$(this).addClass('on');		//将当前的class设置为on
			$('#hot-lessonbox').children().hide();
			$('#hot-lessonbox>div').eq(2).show();
		});
		
		$('#szxm').mouseover(function(){		//鼠标移入实战项目事件
			$('.hot-lesson>ul').children().attr('class','');	//移除所有.hot-lesson>ul li的class
			$(this).addClass('on');		//将当前的class设置为on
			$('#hot-lessonbox').children().hide();
			$('#hot-lessonbox>div').eq(3).show();
		});
		
		$('#qqsf').mouseover(function(){		//鼠标移入全球首发事件
			$('.hot-lesson>ul').children().attr('class','');	//移除所有.hot-lesson>ul li的class
			$(this).addClass('on');		//将当前的class设置为on
			$('#hot-lessonbox').children().hide();
			$('#hot-lessonbox>div').eq(4).show();
		});
		
		$('#qyhz').mouseover(function(){		//鼠标移入企业合作事件
			$('.hot-lesson>ul').children().attr('class','');	//移除所有.hot-lesson>ul li的class
			$(this).addClass('on');		//将当前的class设置为on
			$('#hot-lessonbox').children().hide();
			$('#hot-lessonbox>div').eq(5).show();
		});
		
		$('.lesson-list ul li').mouseover(function(){	//鼠标移入时显示文字描述
			$(this).find('.lesson-infor p').show().animate({ height: 52, opacity: 1 }, 200);;
			
			$(this).children().css({
				"height":"auto",
				"z-index":"10000",
			});
			$(this).find('.lesson-infor').css('padding-bottom','45px');
			$(this).find('.zhongji').show();
			$(this).find('.learn-number').show();
			$(this).find('.lessonicon-box').css('bottom','-43px');
			$(this).find('.lessonplay').css('opacity','1');
		});
		
		$('.lesson-list ul li').mouseout(function(){	//鼠标移出时隐藏文字描述
			$(this).find('.lesson-infor p').css({
				"height":"0",
				"opacity":"0",
			});
			$(this).find('.lesson-infor p').hide();
			$(this).children().css({
				"height":"auto",
				"z-index":"1",
			});
			$(this).find('.lesson-infor').css({
				"padding-bottom":"10px",
				"height":"88px",
				});
			$(this).find('.zhongji').hide();
			$(this).find('.learn-number').hide();
			$(this).find('.lessonicon-box').css('bottom','-20px');
			$(this).find('.lessonplay').css('opacity','0');
		});
		
	});
});