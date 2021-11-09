$(function(){
		
	var pos1 = $('#chefs01').offset().top - 130
	var pos2 = $('#chefs02').offset().top - 130
	var pos3 = $('#chefs03').offset().top - 130
	
		var start = -300 
		
	
	$(window).scroll(function(){
		var scrT = $(window).scrollTop()
		
		if ( scrT >= pos1 + start && scrT < pos2 + start ) {
			$('.c1').animate({opacity: 1}, 1000)
			$('.i1').delay(300).animate({left: '2%', opacity: '1'}, 1000)
		}
		
		if ( scrT >= pos2 + start && scrT < pos3 + start ) {
			$('.c2').animate({opacity: 1}, 1000)
			$('.i2').delay(300).animate({left: '2%', opacity: '1'}, 1000)
		}
		
		if ( scrT >= pos3 + start && scrT < pos3 + 800 ) {
			$('.c3').animate({opacity: 1}, 1000)
			$('.i3').delay(300).animate({left: '2%', opacity: '1'}, 1000)
		}
	});
});