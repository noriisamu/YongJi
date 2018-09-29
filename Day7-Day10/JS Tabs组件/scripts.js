window.onload=function(){
	var items = document.getElementsByTagName("a");
	var panpel = document.getElementsByClassName("panpel");

	for(var i=0;i<items.length;i++){
		items[i].classList.add("unSelected");
	}

	for(let i=0;i<items.length;i++){
		items[i].onclick=function(){
			for(var j=0;j<items.length;j++){
				items[j].classList.remove("isSelected");
				panpel[j].style.display="none";
			}
			items[i].classList.add("isSelected");
			panpel[i].style.display="block";
		}
	}
	

}