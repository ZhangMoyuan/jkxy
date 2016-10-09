/*点击切换选中时的颜色*/
$(window).ready(function(){
	$('aside ul li a').click(function(){
		$('aside ul li a').removeClass('active');
		$(this).addClass('active');
	});
})