$(function(){
	 var items = $("a");
	 
	 $(".tabs_li").click(function(){
		 var i = $(this).index();
		 $(".panpel").eq(i).addClass("panpel-selected").siblings().removeClass("panpel-selected");
	 })

	 for(var i =0;i<items.length;i++){
		 items.eq(i).addClass("unSelected");
	 }

	 for(var i=0;i<items.length;i++){
		 items.eq(i).click(function(){
			for(var j =0;j<items.length;j++){
				items.eq(j).removeClass("isSelected");
			}
			 $(this).addClass("isSelected");
		 })
	 }


});