$(window).ready(function(){

// ========= Efeito fadeIn ===================

    setInterval(function(){
        $('#galeria-grafica').css({'opacity':'1','transform':'translateY(0px)'});
    },1000);

// ========= Lightbox ===================

    $('img').click(function(){
        let image =  this.src;
        $('#imgLightbox').attr('src',image);
        $('body').css('overflowY','hidden');
        $('#lightbox-back').fadeIn();
    });

    $('#lightbox-back').click(function(){
        $('#lightbox-back').fadeOut();
        $('body').css('overflowY','scroll');
    });

});