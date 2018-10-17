$(document).ready(function($) {
 $('#table-box').dataTable({
    "searching": true,
    "pageLength":20,
    "info": false,
    "responsive": true,
    "bLengthChange": false,
    "ordering":false   
  });
  //actuvar btn
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

