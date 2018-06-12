$(document).ready(function($) {
  //actuvar btn
  $('.img-thumbnail').lightbox.option({
    'albumLabel': "Imagen %1 de %2"
    });

  $('#customCheck1').change(function(){
        if( $(this).is(':checked') ) {
            $('.btn--send').removeClass('btn--disabled');
        }else{
            $('.btn--disabled').addClass('btn--send');
        }
    });
  $('.btn--send').click(function(event) {
     if ( !$('#customCheck1').is(':checked') ) {
          alert("Debes descargar y leer las bases para enviar tu cuento");
           document.location.href = "formulario.html";
        } 
     else{
        document.location.href = "formulario-exito.html";
     }   
  });
});

