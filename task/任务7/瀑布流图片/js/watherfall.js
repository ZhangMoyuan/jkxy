$(document).ready(function() {
	$(window).on("load", function() {
		imgLocation();
		var dataImg = {
			"data": [{
				"src": "1.jpg"
			}, {
				"src": "2.jpg"
			}, {
				"src": "3.jpg"
			}, {
				"src": "4.jpg"
			}, {
				"src": "5.jpg"
			}, {
				"src": "6.jpg"
			}, {
				"src": "7.jpg"
			}]
		};
		window.onscroll = function() { //监听滚动事件
			if (scrollside()) { //满足条件时进行加载
				$.each(dataImg.data, function(index, value) {
					var box = $('<div>').addClass('box').appendTo($('#container')); //将box添加到id为container的容器中
					var content = $('<div>').addClass('content').appendTo(box); //将content添加到box中
					$('<img>').attr('src', "img/" + $(value).attr("src")).appendTo(content); //给img添加src属性，并且添加到content中
				});
				imgLocation(); //按照指定的方法重新添加
			}
		}
	});


	window.onresize = function(){		//监听窗口变化时  重新加载图片
		imgLocation(); 
	}
});

function scrollside() {
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2); //最后一个盒子高度的一半距离顶部的位置
	var documentHeight = $(document).height(); //浏览器窗口的高度
	var scrollHeight = $(window).scrollTop(); //滚动的高度
	return lastboxHeight < scrollHeight + documentHeight; //不需要三元运算符，返回的就是布尔值
}

function imgLocation() {
	var box = $('.box');
	var boxWidth = box.eq(0).width(); //获取box的宽度
	var num = Math.floor($(window).width() / boxWidth); //没一行能排放box的个数
	console.log(num);
	var boxArr = [];
	box.each(function(index, value) { //遍历所有box
		
		value.style.cssText = '';	//窗口缩小时正常，但放大时存在问题，因为缩小时已经给div添加了样式，所以需要清除。
		
		var boxHeight = box.eq(index).height(); //获取每个盒子的高度
		
		if (index <num) {
			boxArr[index] = boxHeight;
		} else {
			var minboxHeight = Math.min.apply(null, boxArr); //获取最小高度
			var minboxIndex = $.inArray(minboxHeight, boxArr); //获取最小高度的索引位置
			$(value).css({ //设置div的位置
				"position": "absolute",
				"top": minboxHeight,
				"left": box.eq(minboxIndex).position().left,
			});
			boxArr[minboxIndex] += box.eq(index).height();
			
		}
	});
}