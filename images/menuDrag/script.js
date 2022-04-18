$(".menu").draggable();

$("label").click(function() {
  $(".menu").toggleClass("open");
  $(".menu_btn").toggleClass("show");
  // if ($("label").hasClass("navigation__icon")) 
  //   $(".navigation__icon").addClass("ion-close-round").removeClass("navigation__icon");
  // else
  //   $(".ion-close-round").addClass("navigation__icon").removeClass("ion-close-round");
});


// $('.navigation__checkbox').click(function () {
//   $('.navigation__icon').css('background-color', 'transparent');
//   $('.navigation__icon::before').css('transform', 'rotate(135deg)');
//   $('.navigation__icon::after').css('transform', 'rotate(-135deg)');
// });