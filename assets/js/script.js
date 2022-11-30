$(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".header_nav").toggleClass("nav_toggle");
  });

  $(".accordion_header").click(function () {
    $(".accordion .accordion_body").slideUp();
    $(this).next(".accordion_body").slideDown();
    $(".accordion .accordion_header span").text("+");
    $(this).children("span").text("-");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".header_nav").removeClass("nav_toggle");

    if ($(window).scrollTop() > 60) {
      $(".site_header").addClass("site_header_background");
    } else {
      $(".site_header").removeClass("site_header_background");
    }
  });
});
