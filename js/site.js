$(document).ready(function () {
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);
  var isSafari = /^((?!chrome|android).)*safari/i.test(ua);

  // Hide top navigation arrow
  $("#first-nav").hide();

  // Disable right click on images
  $("img").on("contextmenu", function () {
    return false;
  });

  // Disable title animation
  if (isIE || isSafari) {
    $("#title").addClass("no-anim");
  }

  // Top navigation arrow delay
  $("#first-nav").delay(4000).fadeIn("slow");
});

$(window).scroll(function () {
  // Collapse navbar on scroll
  if ($(".navbar").offset().top > 50) {
    $(".fixed-top").addClass("nav-collapse");
  } else {
    $(".fixed-top").removeClass("nav-collapse");
  }
});

// Page scrolling feature - requires jQuery Easing plugin
$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        0,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Close Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
  $(".navbar-toggle:visible").click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function () {
  $(this).blur();
});
