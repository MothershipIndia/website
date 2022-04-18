  $(document).ready(function () {
    $('.one').click(function (event) {
      $('#crawley').toggleClass('show')
        .animate({
          opacity: 1
        }, 198);
    });
    $('#crawley__close').click(function (event) {
      $('#crawley').toggleClass('show')
        .animate({
          opacity: 0
        }, 198);
    });

    $('.two').click(function (event) {
      $('#office').toggleClass('show')
        .animate({
          opacity: 1
        }, 198);
    });
    $('#office__close').click(function (event) {
      $('#office').toggleClass('show')
        .animate({
          opacity: 0
        }, 198);
    });

    $('.three').click(function (event) {
      $('#villa').toggleClass('show')
        .animate({
          opacity: 1
        }, 198);
    });
    $('#villa__close').click(function (event) {
      $('#villa').toggleClass('show')
        .animate({
          opacity: 0
        }, 198);
      
    });

    $('.four').click(function (event) {
      $('#library').toggleClass('show')
        .animate({
          opacity: 1
        }, 198);
    });
    $('#library__close').click(function (event) {
      $('#library').toggleClass('show')
        .animate({
          opacity: 0
        }, 198);
    });
  });