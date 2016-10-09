$(document).ready(function() {
	 var logo = __uri('./img/bd_logo1.jpg');
	 var logo_white =  __uri('./img/logo_white.jpg');

	//选线卡切换
	$('.menu-mine a').click(function() {
		$(this).addClass('active');
		$('.menu-warpper span').removeClass('active');
		$('.mine-content').show();
		$('.mine-recommend').hide();
		$('.mine-navigation').hide();
		$('.mine-video').hide();
		$('.mine-shopping').hide();
	});

	$('.menu-warpper span:first-child').click(function() {
		$('.menu-warpper span').removeClass('active');
		$('.menu-mine a').removeClass('active');
		$(this).addClass('active');
		$('.mine-content').hide();
		$('.mine-recommend').show();
		$('.mine-navigation').hide();
		$('.mine-video').hide();
		$('.mine-shopping').hide();
	});

	$('.menu-warpper span:nth-child(2)').click(function() {
		$('.menu-warpper span').removeClass('active');
		$('.menu-mine a').removeClass('active');
		$(this).addClass('active');
		$('.mine-content').hide();
		$('.mine-recommend').hide();
		$('.mine-navigation').show();
		$('.mine-video').hide();
		$('.mine-shopping').hide();
	});

	$('.menu-warpper span:nth-child(3)').click(function() {
		$('.menu-warpper span').removeClass('active');
		$('.menu-mine a').removeClass('active');
		$(this).addClass('active');
		$('.mine-content').hide();
		$('.mine-recommend').hide();
		$('.mine-navigation').hide();
		$('.mine-video').show();
		$('.mine-shopping').hide();
	});

	$('.menu-warpper span:nth-child(4)').click(function() {
		$('.menu-warpper span').removeClass('active');
		$('.menu-mine a').removeClass('active');
		$(this).addClass('active');
		$('.mine-content').hide();
		$('.mine-recommend').hide();
		$('.mine-navigation').hide();
		$('.mine-video').hide();
		$('.mine-shopping').show();
	});

	//鼠标移入“更多产品”显示侧栏
	$('#more').mousemove(function() { //鼠标移入时
		$('#gd').show(); //显示侧栏
		$('#more').removeClass('more'); //移除class="more"
		$('#more').addClass('morehover'); //添加class="morehover"
	});

	$('#more').mouseout(function() {
		$('#gd').hide();
		$('#more').addClass('more');
		$('#more').removeClass('morehover');
	});

	$('#gd').mousemove(function() {
		$('#gd').show();
		$('#more').removeClass('more');
		$('#more').addClass('morehover');
	});

	$('#gd').mouseout(function() {
		$('#gd').hide();
		$('#more').removeClass('morehover');
		$('#more').addClass('more');
	});

	//点击“换肤”显示 themes-box

	$('#changeTheme').click(function() {
		event.stopPropagation();
		$('.themes').slideDown(300);
	});

	$('.theme-hide').click(function() {
		$('.themes').slideUp(300);
	});

	$('article').click(function() {
		$('.themes').slideUp(300);

	});

	$('.theme-img>ul>li>img').mouseover(function() { //鼠标移入图片触发事件
		var path = $(this).attr("src"); //获取图片的相对路径
		$('.addimg img').attr('src', path); //设置预览图片的路径
		$('.preview-pageUI').css("background-position", "0px 0px"); //改变预览图片的背景图

	});

	$('.theme-img>ul>li>img').click(function() {
		var path = $(this).attr("src");

		$('body').attr({ //给body设置背景图
			"style": "background:url(" + path + ")no-repeat;background-size:cover;",
		});

		$('.logo').attr("src", logo_white); //将logo给换为白色

		localStorage.clear(); //清楚原有的本地存贮
		localStorage.setItem('path', path); //存储当前选中的背景图
		localStorage.setItem('logoWhite', logo_white)
	});

	$('.theme-default').click(function() {
		$('body').removeAttr('style'); //移除背景皮肤
		$('.logo').attr("src", logo); //设置为蓝色logo
		localStorage.clear(); //清除本地存储
	});

	$('.normal').mouseover(function() { //鼠标移入时显示下拉菜单，移出时隐藏下拉菜单
		$('.set').show();
	});

	$('.normal').mouseout(function() {
		$('.set').hide();
	});

	$('.set').mouseover(function() {
		$('.set').show();
	});

	$('.set').mouseout(function() {
		$('.set').hide();
	});

	var bodyBackground = localStorage.getItem('path'); //取出背景图路径
	var logoWhite = localStorage.getItem('logoWhite')
	$('body').attr({ //给body设置背景图
		"style": "background:url(" + bodyBackground + ")",
	});
	
	if(logoWhite==null){	//判断logoWhite值是否为空，如果为空则用蓝色的logo，否则使用白色logo
		$('.logo').attr("src", logo);
	}else{
		$('.logo').attr("src", logoWhite);
	}
	
});