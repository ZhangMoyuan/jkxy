//JS 单例模式 
//减少全局变量泛滥，保证命名空间对象和函数井然有序，防止它们与全局命名空间混淆。

$(document).ready(function() {
    var mainBox = {			//选项卡切换
        init: function() {
            var me = this;
            me.render();
            me.bind();
        },

        render: function() {
            var me = this;
            me.mine = $('.menu-mine a');
            me.recommend = $('.menu-warpper span:first-child');
            me.navigation = $('.menu-warpper span:nth-child(2)');
            me.video = $('.menu-warpper span:nth-child(3)');
            me.shopping = $('.menu-warpper span:nth-child(4)');
        },

        bind: function() {
            var me = this;

            me.mine.click(function() {
                $(this).addClass('active');
                $('.menu-warpper span').removeClass('active');
                $('.mine-content').show();
                $('.mine-recommend').hide();
                $('.mine-navigation').hide();
                $('.mine-video').hide();
                $('.mine-shopping').hide();
            });

            me.recommend.click(function() {
                $('.menu-warpper span').removeClass('active');
                $('.menu-mine a').removeClass('active');
                $(this).addClass('active');
                $('.mine-content').hide();
                $('.mine-recommend').show();
                $('.mine-navigation').hide();
                $('.mine-video').hide();
                $('.mine-shopping').hide();
            });


            me.navigation.click(function() {
                $('.menu-warpper span').removeClass('active');
                $('.menu-mine a').removeClass('active');
                $(this).addClass('active');
                $('.mine-content').hide();
                $('.mine-recommend').hide();
                $('.mine-navigation').show();
                $('.mine-video').hide();
                $('.mine-shopping').hide();
            });

            me.video.click(function() {
                $('.menu-warpper span').removeClass('active');
                $('.menu-mine a').removeClass('active');
                $(this).addClass('active');
                $('.mine-content').hide();
                $('.mine-recommend').hide();
                $('.mine-navigation').hide();
                $('.mine-video').show();
                $('.mine-shopping').hide();
            });

            me.shopping.click(function() {
                $('.menu-warpper span').removeClass('active');
                $('.menu-mine a').removeClass('active');
                $(this).addClass('active');
                $('.mine-content').hide();
                $('.mine-recommend').hide();
                $('.mine-navigation').hide();
                $('.mine-video').hide();
                $('.mine-shopping').show();
            });

        }
    }

    var moreProduct = {		//鼠标移入“更多产品”显示侧栏
    	init:function(){
    		var me = this;
    		me.render();
    		me.bind();
    	},

    	render:function(){
    		var me = this;
    		me.more = $('#more');
    		me.aside = $('#gd');
    	},

    	bind:function(){
    		var me = this;
    		me.more.mousemove(function(){
    			$('#gd').show(); //显示侧栏
				$('#more').removeClass('more'); //移除class="more"
				$('#more').addClass('morehover'); //添加class="morehover"
    		});

    		me.more.mouseout(function(){
    			$('#gd').hide();
				$('#more').addClass('more');
				$('#more').removeClass('morehover');
    		});

    		me.aside.mousemove(function() {
				$('#gd').show();
				$('#more').removeClass('more');
				$('#more').addClass('morehover');
			});

			me.aside.mouseout(function() {
				$('#gd').hide();
				$('#more').removeClass('morehover');
				$('#more').addClass('more');
			});
    	}
    }


    var changeThemes = {		//切换主题
    	init:function(){
    		var me = this;
    		me.render();
    		me.bind();
    	},

    	render:function(){
    		var me = this;
    		me.themesBtn = $('#changeTheme');	//主题按钮
    		me.themesHide = $('.theme-hide');	//隐藏按钮
    		me.article = $('article');
    		me.themePreview = $('.theme-img>ul>li>img');	
    		me.themeDefault = $('.theme-default');
    		me.body = $('body');
    	},

    	bind:function(){
    		var me = this;

    		me.themesBtn.click(function() {		//显示皮肤盒子
				event.stopPropagation();		//阻止冒泡
				$('.themes').slideDown(300);	
			});

			me.themesHide.click(function() {	//隐藏皮肤盒子
				$('.themes').slideUp(300);
			});

			me.article.click(function(){		//点击其他部分隐藏皮肤盒子
				$('.themes').slideUp(300);
			});

			me.themePreview.mouseover(function() { //鼠标移入图片触发事件
				var path = $(this).attr("src"); //获取图片的相对路径
				$('.addimg img').attr('src', path); //设置预览图片的路径
				$('.preview-pageUI').css("background-position", "0px 0px"); //改变预览图片的背景图
			});

			me.themePreview.click(function() {
				var path = $(this).attr("src");
				$('body').attr({ //给body设置背景图
					"style": "background:url(" + path + ")",
				});
				$('.logo').attr("src", "img/logo_white.png"); //将logo给换为白色
				localStorage.clear(); //清楚原有的本地存贮
				localStorage.setItem('path', path); //存储当前选中的背景图
				localStorage.setItem('logoWhite', 'img/logo_white.png')
			});

			me.themeDefault.click(function(){
				$('body').removeAttr('style'); //移除背景皮肤
				$('.logo').attr("src", "img/bd_logo1.png"); //设置为蓝色logo
				localStorage.clear(); //清除本地存储
			});

			me.body.attr({
				"style": "background:url(" + bodyBackground + ")",
			});
    	}
    }

    var bodyBackground = localStorage.getItem('path'); //取出背景图路径
	var logoWhite = localStorage.getItem('logoWhite')

    if(logoWhite==null){	//判断logoWhite值是否为空，如果为空则用蓝色的logo，否则使用白色logo
		$('.logo').attr("src", "img/bd_logo1.png");
	}else{
		$('.logo').attr("src", logoWhite);
	}

    mainBox.init();
    moreProduct.init();
    changeThemes.init();
})
