window.onload=function(){
	var photoStyle=document.getElementsByClassName("photoStyle")[0];
	var photoStyleContent=photoStyle.getElementsByClassName("photoStyleContent");
	var photoStyleList=document.getElementsByClassName("photoStyleList")[0];
	var ul=photoStyleList.getElementsByTagName("ul")[0];
	var lis=ul.getElementsByTagName("li");
	var house=ul.getElementsByClassName("house");
	
	
	
	var btns=document.getElementsByTagName("button");
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			var divS=this.nextElementSibling.children;//获取点击li下面的div 元素的dom集合
			var sonDivS=photoStyleContent[this.getAttribute("dy")].children;
			var parentDivS=photoStyleContent[this.getAttribute("dy")];
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				photoStyleContent[i].className="photoStyleContent";
				this.nextElementSibling.className="house";
			}
			parentDivS.className="photoStyleContent active";
			for(var i=0;i<divS.length;i++){
				
					divS[i].onclick=function (){
					console.log(sonDivS)
						for(var i=0;i<divS.length;i++){
							divS[i].className="";
							sonDivS[i].className="photoStyleContent1";

						}	
					sonDivS[this.getAttribute("zdy")].className="photoStyleContent1 active";
					this.className="checked";

				}
			}
			var j=this.getAttribute("dy")*1;
			if(btns[j].innerText=="+"){
				btns[j].innerText="-";

				this.className="active";
				this.nextElementSibling.className="house active";
				
			}else if(btns[j].innerText=="-"){
				btns[j].innerText="+";
				this.className="";
				this.nextElementSibling.className="house";
				
			}
		
		}
	}
	
	for(var i=0;i<house[0].children.length;i++){
		house[0].children[i].onclick=function (){
//			var sonDivS=photoStyleContent[this.getAttribute("dy")].children;

			for(var i=0;i<house[0].children.length;i++){
				house[0].children[i].className="";
			}	
		this.className="checked";

		}
	}
	
	
//	for(var i=0;i<house.length;i++){
//		var divs=house[i].getElementsByTagName("div");
//		
//	}
//	for(var i=0;i<photoStyleContent.length;i++){
//		var divs2=photoStyleContent[i].getElementsByTagName("div");
//	}
//	var x=0;
//	for(var i=0;i<divs.length;i++){
//		console.log(divs);
//		x++;
//		divs[i].onclick=function(){
//			
//			var j=this.getAttribute("zdy")*1;
//			this.className="checked";
//			if(x%2==0){
//				divs2[i].className="photoStyleContent1";
//			}else{
//				divs2[j].className="photoStyleContent1 active";
//			}
////			for(var i=0;i<divs.length;i++){
////
////			}
//			
//		}
//	}
	
	
	
	
}
