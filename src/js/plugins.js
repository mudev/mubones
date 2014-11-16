$('.tekrol li').hover(function(){
   var i = $(this).index();
   $('.linkinfo div:eq('+i+')').fadeToggle();
}, function() {
   $('.linkinfo div').hide();
});