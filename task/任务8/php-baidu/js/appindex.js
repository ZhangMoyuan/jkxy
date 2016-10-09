$(document).ready(function() {
	//默认从后台获取类型为“推荐”的新闻

	var newsType = "推荐";

	getdata();

	//点击导航时将文本信息传入后台
	$('.type-list ul li a').click(function() {
		$('.type-list ul li a').removeClass('on');
		$(this).addClass('on');
		newsType = $(this).text().trim();
		getdata();
	});

	function getdata() {

		$('#recommend').html('<div class="news-list"><ul></ul></div>');
		$.get('php/getData.php', {
			newsType: newsType
		}, function(data) { //获取后台json数据
			var txt = JSON.parse(data); //解析json

			$.each(txt, function(key, value) { //遍历数组

				//动态加载页面并赋值
				if (key == 0) {
					var newsBanner = $('<div>').addClass('news-banner').prependTo('#recommend');
					var a = $('<a>').attr('href', '#').appendTo(newsBanner);
					var img = $('<img />').appendTo(a);
					var newsTitle = $('<p>').addClass('news-title').appendTo(a);
					img.attr('src', value.newsImgPath);
					newsTitle.text(value.newsTitle);

				} else {
					var li = $('<li>').appendTo('.news-list ul');
					var a = $('<a>').attr('href', '#').appendTo(li);
					var newsImg = $('<div>').addClass('news-img').appendTo(a);
					var img = $('<img />').appendTo(newsImg);
					var newsInfo = $('<div>').addClass('news-info').appendTo(a);
					var h2 = $('<h2>').addClass('news-title').appendTo(newsInfo);
					var span = $('<span>').addClass('news-date').appendTo(newsInfo);

					img.attr('src', value.newsImgPath);
					h2.text(value.newsTitle);
					span.text(value.newsDate);
				}

			});

		})

	}

})