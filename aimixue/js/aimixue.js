window.onload=function(){

	$("ul:eq(1)").click(function(e){
		var e=e||window.event;
		var target=e.target||e.srcElement;
		$target=$(target);
			console.log($target.text());
		
		if($target.text().slice(0,-1)=="百搭风格"){
			location="style-bd.html";
		}else if($target.text().slice(0,-1)=="韩版风格"){
			location="style-hb.html";
		}else if($target.text().slice(0,-1)=="欧美风格"){
			location="style-om.html";
		}else if($target.text().slice(0,-1)=="简约风格"){
			location="style-jy.html";
		}else if($target.text().slice(0,-1)=="刘清扬"){
			location="team-lqy.html";
		}else if($target.text().slice(0,-1)=="韩璐璐"){
			location="team-hll.html";
		}else if($target.text().slice(0,-1)=="周翔宇"){
			location="team-zzy.html";
		}else if($target.text().slice(0,-1)=="罗铮"){
			location="team-lz.html";
		}else if($target.text().slice(0,-1)=="发展历程"){
			location="development.html";
		}else if($target.text().slice(0,-1)=="品牌简介"){
			location="AboutUs.html";
		}

	});
	

	
}
