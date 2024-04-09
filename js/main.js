$(document).ready(function() {
    $('.header').height($(window).height());
})

$(".navbar a").click(function() {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 500)
})

function scrollToSection(element) {
  var sectionTo = $(element).attr('data-value');
  $('html, body').animate({
    scrollTop: $('.' + sectionTo).offset().top
  }, 500);
}