$(function(){
	let ht = $(window).height();
	$('.brand_section').height(ht)
	
	$('.choco_navi li').click(function(e){
		e.preventDefault();
		
		let idx = $(this).index()
		
		$('.pannel01').stop().animate({'margin-left' : -100 * idx + '%'}, 500);
		// section3 화면 슬라이드
		$('.choco_navi li a').removeClass('on');
		$(this).find('a').addClass('on');
		// 가로 페이저 css
		
	});
	
	$('.effort_navi li').click(function(e){
		e.preventDefault();
		
		let idx = $(this).index()
		
		$('.pannel02').stop().animate({'margin-left' : -100 * idx + '%'}, 500);
		// section5 화면 슬라이드
		$('.effort_navi li a').removeClass('on');
		$(this).find('a').addClass('on');
		// 가로 페이저 css
		
	});
	
});