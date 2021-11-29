 //index js
 $(function(){
	//갤러리 이미지 베스트상품
	
	var list_zone = document.getElementById("photo_list1");
	
	var list_a = list_zone.getElementsByTagName("a");
	
	var pretxt ;
	
		for (let i = 0; i < list_a.length; i++) {
			
			list_a[i].onclick=function(){
				
				var ph = document.getElementById("photo_image1").children[0];
				ph.src=this.href;
				
				var pt = document.getElementById("photo_text_box1");
				
				pt.children[0].style.display = "none";
				
				if (pretxt) {
					pretxt.style.display = "none";
				}
				
				pt.children[i].style.display = "block";
				
				for (let j = 0; j <pt.children.length; j++) {
					
					if (this.rel == pt.children[j].id) {
						pretxt = pt.children[j] ;
					}
				}
			
				return false;
			}
		}	
});

$(function(){
	//갤러리 이미지 시즌 한정
	
	var list_zone = document.getElementById("photo_list2");
	
	var list_a = list_zone.getElementsByTagName("a");
	
	var pretxt ;
	
		for (let i = 0; i < list_a.length; i++) {
			
			list_a[i].onclick=function(){
				
				var ph = document.getElementById("photo_image2").children[0];
				ph.src=this.href;
				
				var pt = document.getElementById("photo_text_box2");
				
				pt.children[0].style.display = "none";
				
				if (pretxt) {
					pretxt.style.display = "none";
				}
				
				pt.children[i].style.display = "block";
				
				for (let j = 0; j <pt.children.length; j++) {
					
					if (this.rel == pt.children[j].id) {
						pretxt = pt.children[j] ;
					}
				}
			
				return false;
			}
		}	
});

$(function(){
	//갤러리 이미지 신메뉴
	
	var list_zone = document.getElementById("photo_list3");
	
	var list_a = list_zone.getElementsByTagName("a");
	
	var pretxt ;
	
		for (let i = 0; i < list_a.length; i++) {
			
			list_a[i].onclick=function(){
				
				var ph = document.getElementById("photo_image3").children[0];
				ph.src=this.href;
				
				var pt = document.getElementById("photo_text_box3");
				
				pt.children[0].style.display = "none";
				
				if (pretxt) {
					pretxt.style.display = "none";
				}
				
				pt.children[i].style.display = "block";
				
				for (let j = 0; j <pt.children.length; j++) {
					
					if (this.rel == pt.children[j].id) {
						pretxt = pt.children[j] ;
					}
				}
			
				return false;
			}
		}	
});


 $(function(){
	 //롤링 텍스트
	 fn_article3("notice5", "bt5", true); 
	 
	 //탭구조
	$(".page_03 .tab_content").hide();
	$(".page_03 .tab_content").first().show();
	
	$(".page_03 li").click(function(){
		$(".page_03 li").removeClass("active").css("color", "#fff");
		$(this).addClass("active").css("color", "#f7e18a");
		
		$(".page_03 .tab_content").hide();
		var activeTab = $(this).attr("rel");
		
		$("#"+activeTab).show();
	});
 });


//롤링 제이쿼리파일
function fn_article3(containerID, buttonID, autoStart){

var $element = $('#'+containerID).find('.notice-list');

var $prev = $('#'+buttonID).find('.prev');

var $next = $('#'+buttonID).find('.next');

var $play = $('#'+containerID).find('.control > a.play');

var $stop = $('#'+containerID).find('.control > a.stop');

var autoPlay = autoStart;

var auto = null;

var speed = 3000;

var timer = null;

 

var move = $element.children().outerHeight();

var first = false;

var lastChild;

 

lastChild = $element.children().eq(-1).clone(true);

lastChild.prependTo($element);

$element.children().eq(-1).remove();

 

if($element.children().length==1){

$element.css('top','0px');

}else{

$element.css('top','-'+move+'px');

}

 

if(autoPlay){

timer = setInterval(moveNextSlide, speed);

$play.addClass('on').text('▶');

auto = true;

}else{

$play.hide();

$stop.hide();

}

 

$element.find('>li').bind({

'mouseenter': function(){

if(auto){

clearInterval(timer);

}
},

'mouseleave': function(){

if(auto){

timer = setInterval(moveNextSlide, speed);

}

}

});


$play.bind({

'click': function(e){

if(auto) return false;

 

e.preventDefault();

timer = setInterval(moveNextSlide, speed);

$(this).addClass('on').text('▶');

$stop.removeClass('on').text('▣');

auto = true;

}

});

 

$stop.bind({

'click': function(e){

if(!auto) return false;

 

e.preventDefault();

clearInterval(timer);

$(this).addClass('on').text('■');

$play.removeClass('on').text('▷');

auto = false;

}

});



$prev.bind({

'click': function(){

movePrevSlide();

return false;  

},

'mouseenter': function(){

if(auto){

clearInterval(timer);

}

},

'mouseleave': function(){

if(auto){

timer = setInterval(moveNextSlide, speed);

}

}

});

 

$next.bind({

'click': function(){

moveNextSlide();

return false;

},

'mouseenter': function(){

if(auto){

clearInterval(timer);

}

},

'mouseleave': function(){

if(auto){

timer = setInterval(moveNextSlide, speed);

}

}

});

 

function movePrevSlide(){

$element.each(function(idx){

if(!first){

$element.eq(idx).animate({'top': '0px'},'normal',function(){

lastChild = $(this).children().eq(-1).clone(true);

lastChild.prependTo($element.eq(idx));

$(this).children().eq(-1).remove();

$(this).css('top','-'+move+'px');

});

first = true;

return false;

}

 

$element.eq(idx).animate({'top': '0px'},'normal',function(){

lastChild = $(this).children().filter(':last-child').clone(true);

lastChild.prependTo($element.eq(idx));

$(this).children().filter(':last-child').remove();

$(this).css('top','-'+move+'px');

});

});

}

 

function moveNextSlide(){

$element.each(function(idx){

 

var firstChild = $element.children().filter(':first-child').clone(true);

firstChild.appendTo($element.eq(idx));

$element.children().filter(':first-child').remove();

$element.css('top','0px');

 

$element.eq(idx).animate({'top':'-'+move+'px'},'normal');

 

});

}

}

