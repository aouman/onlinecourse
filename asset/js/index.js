$(document).ready(function(){
  /*lorsqu'on clique sur l'un des bouton du menu elle s'active*/
  $('.navbar-nav .nav-item a').on('click', function(e){
    e.preventDefault();
    var me=$(this).parent().toggleClass('active')
    $(".active").not(me).removeClass('active')
  });

});
