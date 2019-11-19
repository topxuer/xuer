window.onload=function(){
	var photoStyleContent=document.getElementsByClassName("photoStyleContent")[0];
	var divs=photoStyleContent.getElementsByClassName("Simplicity");
	
	var photoStyleList=document.getElementsByClassName("photoStyleList")[0];
	var ul=photoStyleList.getElementsByTagName("ul")[0];
	var lis=ul.getElementsByTagName("li");
	var btns=document.getElementsByTagName("button");
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				divs[i].style.opacity="0";
				btns[i].innerText="+";
			}

				var j=this.getAttribute("dy")*1;
//			console.log(btns[j].innerText);
			
			if(btns[j].innerText=="+"){
				btns[j].innerText="-";
				divs[j].style.opacity="1";
				this.className="active";
			}
		
				
		}
			
		
	}
	
	
	
	
}
