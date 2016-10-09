define(function(require, exports, module) {
   	exports.banner = $(document).ready(function() {
        var i = 0;
        var clone = $(".banner-wrap a").first().clone(); //复制第一张图片    (无缝轮播)
        $(".banner-wrap").append(clone); //插入到最后面      (无缝轮播)
        var size = $(".banner-wrap a").size(); //获取图片数量

        // for (var j = 0; j < size - 1; j++) {
        //     $("pagination").append("<span></span>");     //根据图片数量自动加载span
        // }

        $(".pagination-span").first().addClass("pagination-span-active"); //给底部第一个按钮添加样式

        $(".pagination-span").click(function() {
            var index = $(this).index();
            i = index;
            $(".banner-wrap").stop().animate({ left: -index * 560 }, 500);
            $(this).addClass("pagination-span-active").siblings().removeClass("pagination-span-active");
        }); //鼠标划入span


        //公用函数  开始

        // 上一个
        function movePrev() {
            i--;
            if (i == -1) {
                $(".banner-wrap").css({
                    left: -(size - 1) * 560,
                });
                i = size - 2;
            };
            $(".banner-wrap").stop().animate({ left: -i * 560 }, 500);
            $(".pagination-span").eq(i).addClass("pagination-span-active").siblings().removeClass("pagination-span-active");

        };
        // 下一个
        function moveNext() {
            i++;
            if (i == size) {
                $(".banner-wrap").css({
                    left: 0,
                });
                i = 1;
            };
            $(".banner-wrap").stop().animate({ left: -i * 560 }, 500);

            // if解决切换中span出现的bug
            if (i == size - 1) {
                $(".pagination-span").eq(0).addClass("pagination-span-active").siblings().removeClass("pagination-span-active");
            } else {
                $(".pagination-span").eq(i).addClass("pagination-span-active").siblings().removeClass("pagination-span-active");
            }
        };

        //公用函数  结束

        //鼠标移动进banner
        //出现左右点击按钮
        $(".index-banner").mouseenter(function() {
            $("#banner-left,#banner-right").fadeIn(400);
        }).mouseleave(function() {
            $("#banner-left,#banner-right").fadeOut(400);
        });;

        // 鼠标移动进banner自动轮播开始和关闭
        $(".index-banner").hover(function() {
            clearInterval(t)
        }, function() {
            t = setInterval(moveNext, 5000);
        });

        //左右按钮点击改变left值

        //左边点击按钮
        $("#banner-left").click(function() {
            movePrev();
        });
        //右边点击按钮
        $("#banner-right").click(function() {
            moveNext();
        });

        // 自动轮播
        var t = setInterval(moveNext, 5000);
    });

});
