$(document).ready(function() {  
    $("#btn").on("click", function() {  
      /*  $('.app').append('<textarea  class="note" id="note" cols="30" rows="10" placeholder="Empty Note"></textarea>'); */ 
      $('<textarea  class="note" id="note" cols="30" rows="10" placeholder="Empty Note"></textarea>').insertBefore('.btn');
      $('.note').dblclick(function(){
        $(this).remove();

      });
    });  
});
