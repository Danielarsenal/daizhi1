$(function(){
	//轮播图
	var swiper = new Swiper('.carousel .swiper-container', {
		pagination: '.carousel .swiper-pagination',
		loop:true,   //是否循环
		grabCursor: false,  //光标在Swiper上时成手掌状
		paginationClickable:true,
		autoplay: 3000,	//延迟时间
		grabCursor:true,
		autoplayDisableOnInteraction: false,//滑动之后是否继续轮播
		speed: 600
	});
	//导航栏
	//获取需要的scrollTop,为方便观看再减去他的marginTop
	var annick=$('.dardree-home').offset().top,
		broste=$('.garden').offset().top,
		laduree=$('.tea-room').offset().top,
		lalique=$('.tableware').offset().top,
		secrets=$('.description').offset().top;
	$('.annick').click(function(e){
		e.defaultPrevented;
		$('html,body').animate({ scrollTop: annick},500);
	});
	$('.broste').click(function(){
		$('html,body').animate({ scrollTop: broste},500);
	});
	$('.laduree').click(function(){
		$('html,body').animate({ scrollTop: laduree},500);
	});
	$('.lalique').click(function(){
		$('html,body').animate({ scrollTop: lalique},500);
	});
	$('.secrets').click(function(){
		$('html,body').animate({ scrollTop: secrets},500);
	});
	
	//ipad左侧导航栏
	$('.fuye_ipad .nav-left').click(function(){
		if($(this).is('.nav-active')){
			$(this).removeClass('nav-active');
			$('.ipad-nav-content').animate({left:-240});
			$('#ipad-content').animate({left:0});
		}else{
			$(this).addClass('nav-active');
			$('.ipad-nav-content').animate({left:0});
			$('#ipad-content').animate({left:240});
		}
	});
	
	//判断用户是使用pc端打开还是移动端
	/*function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if(bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM){
        	$('.fuye_ipad').hide();
        	$('.fuye_pc').hide();
        	$('.fuye_iphone').show();
        }else if(bIsIpad){
        	$('.fuye_ipad').show();
        	$('.fuye_pc').hide();
        	$('.fuye_iphone').hide();
        }else if{
        	$('.fuye_ipad').hide();
        	$('.fuye_pc').show();
        	$('.fuye_iphone').hide();
        }
    }
	
    browserRedirect();*/
   
   //由于jq中animate写入数字为实际px,故动态获取运动距离
   var iLeft = $('.iphone-nav-content').css('left');
   var iWidth = $('.iphone-nav-content').css('width');
   $('.fuye_iphone .nav-left').click(function(){
   		if($(this).is('.nav-active')){
   			$(this).removeClass('nav-active');
   			$('.iphone-nav-content').animate({left:iLeft},300);
			$('#fuye_iphone').animate({left:0},300);
   		}else{
   			$(this).addClass('nav-active');
   			$('.iphone-nav-content').animate({left:0},300);
			$('#fuye_iphone').animate({left:iWidth},300);
   		}
   });
   
   //pc的hover效果
   /*$('.see').hover(function(){
   	$(this).addClass('see-active');
   },function(){
   	$(this).removeClass('see-active');
   })*/
  
  //ipad左侧导航栏
  $('.ipad-nav-content div').click(function(){
  	$(this).addClass('ipad-nav-active').siblings().removeClass('ipad-nav-active');
  });
  //iphone左侧导航栏
  $('.iphone-nav-content div').click(function(){
  	$(this).addClass('iphone-nav-active').siblings().removeClass('iphone-nav-active');
  })
  
  //设置iphone的svg logo居中
  var hHeight = parseInt($('.fuye_iphone .iphone-head').css('height'));
  $('#iphone-logo').css('height',hHeight);
  
  //根据尺寸来定义页面的显示隐藏
  /*var wW = $(window).width();
  if(wW>991){
  	$('.fuye_pc').show();
  	$('.fuye_ipad').hide();
  	$('.fuye_iphone').hide();
  }*/
 
 //ipad轮播图
 var swiper2 = new Swiper('.ipad-auto .swiper-container', {
		pagination: '.ipad-auto .swiper-pagination',
		loop:true,   //是否循环
		grabCursor: false,  //光标在Swiper上时成手掌状
		paginationClickable:true,
		autoplay: 3000,	//延迟时间
		grabCursor:true,
		autoplayDisableOnInteraction: false,//滑动之后是否继续轮播
		speed: 600
	});
});