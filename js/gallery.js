$(function(){
	
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


