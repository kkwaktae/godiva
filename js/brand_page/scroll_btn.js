$(function(){
	
	
	
	$('.gnb li').click(function(e){
		e.preventDefault();
		
		var href = $(this).find('a').attr('href')
		
		var target = $('#'+href).offset().top
		$('html:not(:animated), body:not(:animated)').animate({scrollTop: target - 130 + "px"}, 1000)
		
	});
	
	var pos1 = $('#chefs01').offset().top - 130
	var pos2 = $('#chefs02').offset().top - 130
	var pos3 = $('#chefs03').offset().top - 130
	
	var start = -300 
	
	$(window).scroll(function(){
		var scrT = $(window).scrollTop()
		$('p').removeClass('on')
		$('div').removeClass('on')
		$('h1').removeClass('on')
		
		if ( scrT >= pos1 + start && scrT < pos2 + start ) {
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(0).find('a').addClass('on')
		}
		
		if ( scrT >= pos2 + start && scrT < pos3 + start ) {
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(1).find('a').addClass('on')
		}
		
		if ( scrT >= pos3 + start && scrT < pos3 + 800 ) {
			$('.gnb li').find('a').removeClass('on')
			$('.gnb li').eq(2).find('a').addClass('on')
			$('#section3 div').addClass('on')
		}
	});
	
});

