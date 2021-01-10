$(document).ready(function () {
  $("img").on("contextmenu", function () {
    return false;
  });
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);
  var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  if (isIE || isSafari) {
    $("#title").addClass("no-anim");
  }
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
  $(".navbar-toggle:visible").click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function () {
  $(this).blur();
});
