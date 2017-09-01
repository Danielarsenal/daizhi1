
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
                    item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage", "url('" + imgSrc + "')"));
                });
            }
            else {
                $(items).each(function (index, value) {
                    var item = $(this);
                    var imgSrc = item.data("smallImage");
                    item.html('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '" alt="..."></a>');
                });
            }
        }).trigger("resize");
    }
     //左侧导航栏
    $('.nav-left').click(function () {
        if ($(this).is('.nav-active')) {
            $(this).animate({ left: 20 }, "fast");
            $(this).removeClass('nav-active');
            $('#logo').animate({ left: 120 }, "fast");
            $('.nav-content').animate({ left: -240 },'slow');
            $('#content').animate({ left: 0 });
            
        } else {
            $(this).animate({ left: 240 }, "fast");
            $(this).addClass('nav-active');
            $('#logo').animate({ left: 120 }, "fast");
            $('.nav-content').animate({ left: 0 },'slow');
            $('#content').animate({ left: 240 });
            
        }
    })

});