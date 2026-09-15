/* Cha-Mei Tang, ScD. Replaces the MegaOne demo script, which initialises
   carousels, isotope, particles, parallaxie, the typewriter and a Google map,
   none of which this build uses. Keeping the demo script loaded would throw on
   every one of those missing plugins and stop the rest of the file executing. */
(function ($) {
  "use strict";

  $(window).on("load", function () {
    $("#loader-fade").fadeOut(360);
  });
  // Belt and braces: if a slow asset stalls the load event, do not trap the page
  // behind the loader.
  setTimeout(function () { $("#loader-fade").fadeOut(360); }, 3500);

  $(function () {
    var y = new Date().getFullYear();
    $("#ct-year").text(y);

    if (typeof WOW === "function") {
      new WOW({ mobile: false, offset: 60 }).init();
    }

    // Side menu
    $("#sidemenu_toggle").on("click", function () {
      $(".side-menu, #close_side_menu").addClass("side-menu-active");
      $("body").addClass("side-menu-open");
    });
    $("#btn_sideNavClose, #close_side_menu").on("click", function () {
      $(".side-menu, #close_side_menu").removeClass("side-menu-active");
      $("body").removeClass("side-menu-open");
    });

    // Smooth scroll with a fixed-nav offset
    $("a.scroll").on("click", function (e) {
      var target = $(this).attr("href");
      if (!target || target.charAt(0) !== "#" || target.length < 2) { return; }
      var $t = $(target);
      if (!$t.length) { return; }
      e.preventDefault();
      $(".side-menu, #close_side_menu").removeClass("side-menu-active");
      $("body").removeClass("side-menu-open");
      $("html, body").animate({ scrollTop: $t.offset().top - 74 }, 620);
    });

    if (typeof $.fn.fancybox === "function") {
      $('[data-fancybox="plates"]').fancybox({ loop: true, infobar: true });
    }
  });
})(jQuery);
