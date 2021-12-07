$(function(){
	
	const slides = $('.slider li');
		$(window).resize(function(){	
		
		let width=$(window).innerWidth();	
		
		if (width < 1024) {	
			for ( let i = 0 ; i < slides.length ; i++ ) {
				let imgNum = i+1
				slides.eq(i).find('img').attr('src','img/slide/slide_0'+imgNum+'_1024px.png');
			}
		} else {	
			for ( let i = 0 ; i < slides.length ; i++ ) {
				let imgNum = i+1
				slides.eq(i).find('img').attr('src','img/slide/slide_0'+imgNum+'.png');
			}
		}
	}).resize();
	
	$('.slider').slider();
	
});
