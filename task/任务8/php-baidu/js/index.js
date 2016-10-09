/*动态添加新闻列表*/
$(document).ready(function() {
	
	//默认值为“推荐”
	var newsType ="推荐";
	
	getdata();
	
	//点击左侧导航栏时，获取文本信息，并传入后台
	$('aside ul li a').click(function(){
		$('aside ul li a').removeClass('active');
		$(this).addClass('active');
		newsType = $(this).text().trim();
		getdata();
	});

	function getdata(){
		
		$('#news-tb').html("");		//清空原有数据，重新加载
		$.get('php/getData.php',{newsType:newsType}, function(data) { //获取后台json数据
		var content = [];
		var i = 1;
		var j = 0;
		var txt = JSON.parse(data); //解析json
		
		$.each(txt, function(key, value) { //遍历数组
			var tr = $('<tr>').appendTo('#news-tb'); //动态插入表格
			for (var i = 0; i < 7; i++) {
				var td = $('<td>').appendTo($(tr));
				if (i == 6) {
					var edit = $('<a>').attr('href', 'javascript:void(0);').addClass('btn btn-primary btn-sm update').css('margin-right', '4px').appendTo($(td));
					var del = $('<a>').attr('href', 'javascript:void(0);').addClass('btn btn-danger btn-sm del').appendTo($(td));
				} else {
					$('<a>').attr('href', '#').appendTo($(td));
				}
			}

			content.push(value.id);
			content.push(value.newsType);
			content.push(value.newsTitle);
			content.push(value.newsContent);
			content.push(value.newsDate);
			content.push(value.newsImgPath);
		});

		$('#news-tb').children().each(function(index, ele) {
			var _this = $(this);
			_this.find('td').each(function(ind, e) {
				var a = $(this).find('a');
				if (ind == 6) {
					$(a).eq(0).html('修改');
					$(a).eq(1).html('删除');
				} else {
					a.html(content[j]);
					a.attr('title', content[j]);
					j++;
				}
			});
		});

		$('#news-tb td:first-child a').attr('class', 'newsId');

	})
		
	}

	
})



//通过事件代理，点击修改时获取到当前要更改的新闻id
$('#news-tb').delegate('.update', 'click', function() {
	
	var newsId = $(this).parent().parent('#news-tb tr').find('.newsId').text();
	$(this).attr('href','updatenews.html?id='+newsId);
	
})

//通过事件代理，点击修改时获取到当前要删除的新闻id
$('#news-tb').delegate('.del', 'click', function() {
	
	var newsId = $(this).parent().parent('#news-tb tr').find('.newsId').text();

	$.ajax({
		type:"post",
		url:"php/delete.php",
		data:{
			id:newsId,
		},
		success:function(data){
			location.reload();
			alert("删除成功！");
		},
		error:function(data){
			alert("删除失败！");
		}
	});
	
})