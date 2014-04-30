'use strict';

angular.module('pocFlaixfmApp', [
  'fmt'
])

  .run(function ($window) {
    $window.fmtBaseUrl = 'http://bo.flaix.webtv.flumotion.com/';

    // setup fade animations
    $(window).scroll(function () {
      return $(".animate-in").not(".hidden").each(function (i, element) {
        if ($(element).offset().top + 80 < ($(window).height() + $(window).scrollTop())) {
          return $(element).removeClass('animate-in');
        }
      });
    });
  });
