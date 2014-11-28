$('.tekrol li').hover(function(){
   var i = $(this).index();
   $('.linkinfo div:eq('+i+')').fadeToggle();
}, function() {
   $('.linkinfo div').hide();
});

// $('#panel2').isotope({
//   // options...
//   itemSelector: '.item',
//   masonry: {
//    layoutMode: 'fitRows'
//   },
//   containerStyle: null
// });