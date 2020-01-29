$(window).ready(function(){

	var tam = $(window).width();
	
	//================ Banner =====================================
	setTimeout(function(){
		$(".bg_video").fadeOut(1900);
		$('#topBar').css('backgroundColor','#111113');
	},3000);

	//================ TypeWriter =====================================
	
	function typewriter(elemento){
		var text = elemento.innerHTML.split('');
		elemento.innerHTML = '';
		text.forEach((letra, i)=>{
			setTimeout(()  => elemento.innerHTML += letra, 75 * i)
		});
	};
	
	var titulo = document.getElementById('titulo');
	
	setInterval(function(){
		typewriter(titulo);
	},8000);
	typewriter(titulo);
	
	//======================== Web Design =============================

});

