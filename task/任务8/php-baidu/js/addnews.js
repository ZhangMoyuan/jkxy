$(window).ready(function() {
	$("#submit").click(function() {
		$.ajax({
			type:"post",
			url: "php/addnews.php",
			dataType: "json",
			data: {
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
//					window.location.href="index.html";
				}
				
			},
			error: function(data){   
				console.log(data);
			   	alert(data.msg);  
			},     
		});
	});
})