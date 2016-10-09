define(function(require, exports, module){
	exports.recommend = $(window).ready(function(){
		$('.recommend li>span').mouseover(function(){	//鼠标移入时显示move-list
			$('.start-list').hide();
			$('.move-list').show();
		});
		
		$('.move-list').mouseleave(function(){		//鼠标移出时显示start-list
			$('.move-list').hide();
			$('.start-list').show();
		});
		
		$('.type-list .question').mouseover(function(){		//鼠标移入recommend 导航栏中的“问答”时 显示 问题列表
			$('.move-list .content').children().hide();
			$('.content .question').show();
		});
		
		$('.type-list .wiki').mouseover(function(){			//鼠标移入recommend 导航栏中的“wiki”时 显示 问题列表
			$('.move-list .content').children().hide();
			$('#recommendWiki').show();
		});
		
		$('.type-list .lession').mouseover(function(){			//鼠标移入recommend 导航栏中的“课程”时 显示 问题列表
			$('.move-list .content').children().hide();
			$('#recommendLession').show();
		});
		
		$('.type-list .group').mouseover(function(){			//鼠标移入recommend 导航栏中的“社群”时 显示 问题列表
			$('.move-list .content').children().hide();
			$('#recommendGroup').show();
		});
	});
	
});