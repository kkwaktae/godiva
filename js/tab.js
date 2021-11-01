$(function(){
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

