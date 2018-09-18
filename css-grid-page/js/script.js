$(function(){
   var btn =  $('.toggle-btn .toggle');
   var width = $(window).width();
   console.log(width);
   if (width <= 700){
    btn.removeClass('hide');
    $('.navbar').hide();
   } else{
       btn.addClass('hide');
   }
   $(btn).on('click', (e) => {
    e.preventDefault();
    $('.navbar').slideToggle();
   })
});