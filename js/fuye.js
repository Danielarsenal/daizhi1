$(function(){
	//轮播图
	var swiper = new Swiper('.carousel .swiper-container', {
		pagination: '.swiper-pagination',
		loop:true,   //是否循环
		grabCursor: false,  //光标在Swiper上时成手掌状
		paginationClickable:true,
		autoplay: 5000,	//延迟时间
		grabCursor:true,
		autoplayDisableOnInteraction: false//滑动之后是否继续轮播
	});
	//导航栏
	//获取需要的scrollTop,为方便观看再减去他的marginTop
	var annick=$('.dardree-home').offset().top,
		broste=$('.garden').offset().top,
		laduree=$('.tea-room').offset().top,
		lalique=$('.tableware').offset().top,
		secrets=$('.description').offset().top;
	$('.annick').click(function(e){
		//alert(1)
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
	
	//当屏幕尺寸改变跳转到其他页面
	
})