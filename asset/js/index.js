$(document).ready(function(){
  /*lorsqu'on clique sur l'un des bouton du menu elle s'active*/
  $('.navbar-nav .navs a').on('click', function(e){
    e.preventDefault();
    var me=$(this).parent().toggleClass('active')
    $(".active").not(me).removeClass('active')
  });

  /*$(".nav-item .btn-search").click(function(){
    $(this).css('display','none');
    $(".nav-item form").css('display','block');
  });*/


});
