$('.gnb-main-item').hover(function() {
  $(this).find('.sub').stop().slideDown(500);
  $(this).children('a').addClass('active');
}, function() {
  $(this).find('.sub').stop().slideUp(500);
  $(this).children('a').removeClass('active');
})