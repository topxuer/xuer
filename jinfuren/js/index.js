window.onload=function(){
//	var photoStyleContent=document.getElementsByClassName("photoStyleContent")[0];
//	var divs=photoStyleContent.getElementsByClassName("Simplicity");
//	var photoStyleList=document.getElementsByClassName("photoStyleList")[0];
//	var ul=photoStyleList.getElementsByTagName("ul")[0];
//	var lis=ul.getElementsByTagName("li");
//	var btns=document.getElementsByTagName("button");
//	for(var i=0;i<lis.length;i++){
//		lis[i].onclick=function(){
//			for(var i=0;i<lis.length;i++){
//				lis[i].className="";
//				divs[i].style.opacity="0";
//			}
//
//				var j=this.getAttribute("dy")*1;
////			console.log(btns[j].innerText);
//			
//			if(btns[j].innerText=="+"){
//				btns[j].innerText="-";
//				divs[j].style.opacity="1";
//				this.className="active";
//			}else{
//				btns[j].innerText="+";
////				divs[j].style.opacity="0";
//				
//			}
//		
//				
//		}
//			
//		
//	}
	

	var carousel_img=document.getElementsByClassName("carousel_img")[0];
	var imgs=carousel_img.getElementsByTagName("img");//[img,img,img]
	var carousel=document.getElementsByClassName("carousel")[0];
	var btns2=carousel.getElementsByTagName("button");
	var lis2=carousel.getElementsByTagName("li");//[li,li,li]
	var j=0;//当前的位置;
			for(var i=0;i<btns2.length;i++){
				btns2[i].onclick=function(){
					if(this.innerHTML=="&gt;"){
						animate(1)
					}else{
						animate(-1)
					}
				}
			}
			for(var i=0;i<lis2.length;i++){
				lis2[i].onclick=function(){
					j=this.getAttribute("dy");
					animate(j);
				}
			}
			function animate(x){
				if(x===1){
					j+=x*1;
					if(j==3){
						j=0;
					}
				}else if(x===-1){
					j+=x*1;
					if(j==-1){
						j=2;
					}
				}else{
					j=x*1;
				}
				for(var i=0;i<imgs.length;i++){
					imgs[i].className="";
					lis2[i].className="";
				}
				console.log(j)
				imgs[j].className="active";
				lis2[j].className="active";
			}
	
	
	
	
}
