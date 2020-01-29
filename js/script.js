$(window).ready(function(){

	var tam = $(window).width();

//================ Menu =====================================
$('#btn_menu_closed').click(function(){
	$('#btn_menu_closed').hide();
	$('#btn_menu_opened').show();
	$('#menu').fadeIn();
	$('#mn').css('transform','translate(0%)');
	$('#bg_menu').fadeIn();
	$('#topBar').css('backgroundColor','#000');
});
$('#btn_menu_opened').click(function(){
	$('#btn_menu_closed').show();
	$('#btn_menu_opened').hide();
	$('#mn').css('transform','translateY(-10%)');
	$('#menu').fadeOut();
	$('#bg_menu').fadeOut();
	$('#topBar').css('backgroundColor','#222225');
});
$('#menu').click(function(){
	$('#btn_menu_closed').show();
	$('#btn_menu_opened').hide();
	$('#mn').css('transform','translateY(-10%)');
	$('#menu').fadeOut();
	$('#bg_menu').fadeOut();
	$('#topBar').css('backgroundColor','#222225');
});
$('#bg_menu').click(function(){
	$('#btn_menu_closed').show();
	$('#btn_menu_opened').hide();
	$('#mn').css('transform','translateY(-10%)');
	$('#menu').fadeOut();
	$('#bg_menu').fadeOut();
	$('#topBar').css('backgroundColor','#111113');
});

//================ Scroll =====================================

function scrolling(){
		
	//====== Verificador de altura =========
	let scroll = $(window).scrollTop();
	$('#contador').text(scroll);
	//====== animação do banner =========
	if(scroll > 150){ 
		$("#titulo").fadeOut();
	}else{ 
		$("#parallax").fadeIn(800);
		$("#titulo").fadeIn(800);
	}; 
	//======= Banner e Titulo =========
	if(scroll > 350){ 
		$("#sobreBox").fadeIn(); 
	};
	//====== Animação da Galeria =========
	if(scroll < 2150){
		$('#galeria2').css('transform','translate(100%)');
		$('#galeria3').css('transform','translate(100%)');
	}else if((scroll >= 2150)&&(scroll < 2750)){
		$('#galeria2').css('transform','translate(0%)');
		$('#galeria3').css('transform','translate(100%)');
	}else if(scroll >= 2750){
		$('#galeria2').css('transform','translate(0%)');
		$('#galeria3').css('transform','translate(0%)');
	}
	//====== Fixação da Galeria =========
	if(tam < 620){
		if((scroll >= 1520)&&(scroll <= 3330)){
			$('#suporteGaleria').css('display','block');
			$('#galeria-master').css({'position':'fixed','top':'50px'});
		}else{
			$('#galeria-master').css({'position':'relative','top':'none'});
		}
		if(scroll < 1520){
			$('#suporteGaleria').css('display','none');
		}
	}else{
		if((scroll >= 1575)&&(scroll <= 3390)){
			$('#suporteGaleria').css('display','block');
			$('#galeria-master').css({'position':'fixed','top':'50px'});
		}else{
			$('#galeria-master').css({'position':'relative','top':'none'});
		}
		if(scroll < 1575){
			$('#suporteGaleria').css('display','none');
		}
	}
	//========== Menu Scroll =======================
	$('#menuInicio').click(function(){
		window.scrollTo(0, 0);
	});
	
	$('#menuSobre').click(function(){
		if(tam < 620){
			window.scrollTo(0, 860);
		}else{
			window.scrollTo(0, 900);
		}				
	});
	
	$('#menuGaleria').click(function(){
		window.scrollTo(0, 1650);
	});
	
	$('#menuContato').click(function(){
		if(tam < 620){
			window.scrollTo(0, 4800);
			setTimeout(function(){
				window.scrollTo(0, 4800);
			},1000);
			
		}else{
			window.scrollTo(0, 5200);
			setTimeout(function(){
				window.scrollTo(0, 5200);
			},1000);
		}
	});
}

scrolling();

window.addEventListener('scroll', scrolling);

});