
$(function () {
    /*获取当前所有item*/
    var items = $(".rightbox .item");
    getPhoto(items);
    var jiaJuPhoto = $('#jiaJuPhoto .item');
    getPhoto(jiaJuPhoto);
    var kuang = $('.kuang .item');
    getPhoto(kuang);

    function getPhoto(items) {
        /*监听屏幕的大小改变*/
        $(window).on("resize", function () {
            /*1.获取当前屏幕的宽度*/
            var width = $(window).width();
            /*2.判断屏幕的宽度*/
            if (width >= 768) {/*说明非移动端*/
                /*为每一个item添加子元素--遍历*/
                $(items).each(function (index, value) {
                    var item = $(this);
                    /*当前自定义属性中 存储的图片路径*/
                    var imgSrc = item.data("largeImage");
                    /*添加非移动端的子元素*/
                    item.html($('<div class="pcImg"></div>').css("backgroundImage", "url('" + imgSrc + "')"));
                });
            }
            else {
                $(items).each(function (index, value) {
                    var item = $(this);
                    var imgSrc = item.data("smallImage");
                    item.html('<div class="mobileImg"><img src="' + imgSrc + '" alt="..."></div>');
                });
            }
        }).trigger("resize");
    }
    var width = $(window).width();
    //主容器的位置





    //ipad左侧导航栏
    $('.nav-left').click(function () {
        if ($(this).is('.nav-active')) {
            $(this).animate({ left: 0,top:5}, 300);
            $('#logo').animate({ left: 38 }, 300);
            $('.ipad_nav_content').animate({ left: -240 }, 300);
            $('.content-wrapper').css({ marginLeft: 0 });
            $('.content-wrapper').css('position', 'static');
            $('.content-wrapper').animate({ left: 0 }, 300);
            $('.content-wrapper').animate({ marginLeft: 0 },300);

            $(this).removeClass('nav-active');
            $('footer').css('display', 'block');
        } else {
            $('footer').css('display', 'none');
            $(this).animate({ left: 240,top:5 }, 300);
            $('#logo').animate({ left: 278 }, 300);
            $('.ipad_nav_content').animate({ left: 0 }, 300);
            if (width <= 1024) {/*说明非移动端*/
                $('.content-wrapper').css('position', 'absolute');
                var contentWidth = $('.content-wrapper').width();
                contentWidth /= -2;
                $('.content-wrapper').css('left', '50%').css('marginLeft', contentWidth + 'px');
            }
            $('.content-wrapper').animate({ marginLeft: contentWidth + 240 }, 300);
            $(this).addClass('nav-active');
        }
    });

    //iphone左侧导航栏
    $('.iphone_nav_left').click(function () {
        if ($(this).is('.nav-active')) {
            $(this).animate({ left: 15 }, 300);
            $('.language i').animate({ right: 15, top: 5 }, 300);
            $('#iphone_logo').animate({ left: 15 }, 300);
            $('.ipad_nav_content').animate({ left: -240 }, 300);
            // $('.content-wrapper').css('width', width);
            $('.content-wrapper').css('position', 'static').animate({ marginLeft: 0 }, 300);
            $('.content-wrapper').animate({ left: 0 }, 300);
            $(this).removeClass('nav-active');
            $('footer').css('display', 'block');

        } else {
            $('footer').css('display', 'none');
            $(this).animate({ left: 255 }, 300);
            $('.language i').animate({ right: -255, top: 5 }, 300);
            $('#iphone_logo').animate({ left: 255 }, 300);
            $('.ipad_nav_content').animate({ left: 0 }, 300);
            if (width <= 1024) {/*说明非移动端*/
                $('.content-wrapper').css('position', 'absolute');
                var contentWidth = $('.content-wrapper').width();
                var width = contentWidth;
                console.log(contentWidth);
                contentWidth /= -2;
                console.log(contentWidth);
                $('.content-wrapper').animate({ left: '50%', marginLeft: contentWidth }, 300);
            }
            // $('.content-wrapper').css('width', width);
            $('.content-wrapper').animate({ marginLeft: 240 }, 300);
            $(this).addClass('nav-active');
        }
    })

});