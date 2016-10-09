$(window).ready(function() {
	//解析url，获取id的值
	(function($) {
		$.getUrlParam = function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		}
	})(jQuery);

	var id = parseInt($.getUrlParam('id'));
	
	
	//通过id将查询到的数据插入到页面中
	$.post("php/getid.php", {
			id: id
		},
		function(data) {
			var txt = JSON.parse(data);
			$.each(txt, function(key, value) {
				$('#newsType').val(value.newsType);
				$('#newsTitle').val(value.newsTitle);
				$('#newsContent').val(value.newsContent);
				$('#newsImgPath').val(value.newsImgPath);
				$('#newsDate').val(value.newsDate);
			})
		});
		
	$('#submit').click(function(){
		$.ajax({
			type:"post",
			url: "php/update.php",
			dataType: "json",
			data: {
				id:id,
				newsType: $("#newsType").val(),
				newsTitle: $("#newsTitle").val(),
				newsImgPath: $("#newsImgPath").val(),
				newsContent: $("#newsContent").val(),
				newsDate: $("#newsDate").val()
			},
			success: function(data){
				
				if(!data.success){
					alert(data.msg);
				}else{
					console.log(data);
					alert(data.msg);
					window.location.href="index.html";
				}
				
			},
			error: function(data){     
				console.log(data);
			   	alert(data.msg);  
			},     
		});
	})
})