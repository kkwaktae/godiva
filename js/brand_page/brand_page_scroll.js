$(function(){
	let ht = $(window).height()
	
	$('.brand_section').height(ht)
	$('#section1').height(ht - 130 + 'px')
	
	$('.choco_navi li').click(function(e){
		e.preventDefault();
		
		let idx = $(this).index()
		
		$('.pannel01').stop().animate({'margin-left' : -100 * idx + '%'}, 1000);
		// section3 화면 슬라이드
		$('.choco_navi li a').removeClass('on');
		$(this).find('a').addClass('on');
		// 가로 페이저 css
		
	});
	
	$('.effort_navi li').click(function(e){
		e.preventDefault();
		
		let idx = $(this).index()
		
		$('.pannel02').stop().animate({'margin-left' : -100 * idx + '%'}, 1000);
		// section5 화면 슬라이드
		$('.effort_navi li a').removeClass('on');
		$(this).find('a').addClass('on');
		// 가로 페이저 css
		
	});
	
	$('.section_navi li').click(function(e){
		e.preventDefault();
		
		let  href = $(this).find('a').attr('href')
		let target = $('#' + href).offset().top
		
		if ( href == 'section1' ) {
			$('html:not(:animated), body:not(:animated)').animate({scrollTop : target - 130 +'px'}, 1000);
		} else {
			$('html:not(:animated), body:not(:animated)').animate({scrollTop : target}, 1000);			
		}
	});
	
	let pos1 = $('#section1').offset().top - 130 + 'px'
	let pos2 = $('#section2').offset().top
	let pos3 = $('#section3').offset().top
	let pos4 = $('#section4').offset().top
	let pos5 = $('#section5').offset().top
	
	
	
});