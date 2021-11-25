
//const burger = document.getElementById('burger_icon');
//const sidebar = document.getElementById('sidebar_mobile');

//burger.addEventListener('click', function(e){
//	e.preventDefault();
//	sidebar.classList.toggle('open');	
	
//	if (!sidebar.classList.contains('open')) {
//		sidebar.style.right = '0';
//	} else {
//		sidebar.style.right = '-350px';
//	}
	
//	console.log(sidebar.style);
//});


$(function(){
	const burger = $('#burger_mobile');
	const sidebar = $('#sidebar_mobile');
	
	const  main = $('#categori_content .main');
	const  sub = $('#categori_content .sub_list');
	
	burger.on('click', function(){
		sidebar.toggleClass('open');
		
		if (!sidebar.hasClass('open')) {
			sidebar.stop().animate({right : '0' }, 500 );
			burger.html('<a href="">'+'<img id="burger_icon" src="img/nav/close.png" alt=""/>'+'</a>');
		} else {
			sidebar.stop().animate({right: '-350px'}, 500 );
			burger.html('<a href="">'+'<img id="burger_icon" src="img/nav/burger.png" alt=""/>'+'</a>');
			sub.css('display','none');
			main.removeClass('on');
		}
		return false;
	});
	for ( let i = 0 ; i < main.length ; i++) {
		main[i].onclick = function(e){
			e.preventDefault();
			main.eq(i).toggleClass('on');
			sub.eq(i).slideToggle( 500 );
		}
	}
});
