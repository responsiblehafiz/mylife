(function ($) {
  "use strict";

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Mobile Menu
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  /* Product Quantity */
  $(".product-quantity-count").on("click", ".qty-btn", function (e) {
    e.preventDefault();
    const $btn = $(this),
      $box = $btn.siblings(".product-quantity-box")[0];
    if ($btn.hasClass("inc")) {
      $box.value = Number($box.value) + 1;
    } else if ($btn.hasClass("dec") && Number($box.value) > 1) {
      $box.value = Number($box.value) - 1;
    }
  });

  /*---------------------
    WOW active js 
    --------------------- */
  new WOW().init();

  // counterUp
  $(".counter").counterUp({
    delay: 5,
    time: 1500,
  });

  // Venubox
  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

  //  =========== Case Study Carousel
  $(".hafiz-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    dotsEach: 2,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Testi Carousel
  $(".testi-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    smartSpeed: 1500,
    autoplayTimeout: 1500,
    dots: false,
    nav: false,
    margin: 100,
    navText: [
      "<i class='bi bi-arrow-left''></i>",
      "<i class='bi bi-arrow-right''></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        margin: 30,
      },
      768: {
        items: 2,
        margin: 30,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1920: {
        items: 2,
      },
    },
  });

  $(".circle_percent").each(function () {
    var $this = $(this),
      $dataV = $this.data("percent"),
      $dataDeg = $dataV * 3.6,
      $round = $this.find(".round_per");
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    $this.append(
      '<div class="circle_inbox"><span class="percent_text"></span></div>'
    );
    $this.prop("Counter", 0).animate(
      {
        Counter: $dataV,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now) + "%");
        },
      }
    );
    if ($dataV >= 51) {
      $round.css("transform", "rotate(" + 360 + "deg)");
      setTimeout(function () {
        $this.addClass("percent_more");
      }, 1000);
      setTimeout(function () {
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
      }, 1000);
    }
  });

  // scroll up
    // --------------------------------------------------
    if ($('.prgoress_indicator path').length) {
      var progressPath = document.querySelector('.prgoress_indicator path');
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
      var updateProgress = function() {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
      }
      updateProgress();
      $(window).on('scroll', updateProgress);
      var offset = 250;
      var duration = 550;
      jQuery(window).on('scroll', function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
              jQuery('.prgoress_indicator').removeClass('active-progress');
          }
      });
      jQuery('.prgoress_indicator').on('click', function(event) {
          event.preventDefault();
          jQuery('html, body').animate({
              scrollTop: 0
          }, duration);
          return false;
      });
  }

   /*------------- preloader js --------------*/
   var windowOn = $(window);

   /*======================================
   Preloader activation
   ========================================*/
   $(window).on('load', function (event) {
     $('#loading-screen').delay(1000).fadeOut(1000);
   });



   
   /*-----------------  End Percentage loading screen interactions -----------------  */

  //=====< barfiller script >====
  $("#bar1").barfiller({
    duration: 7000,
  });
  $("#bar2").barfiller({
    duration: 7000,
  });
  $("#bar3").barfiller({
    duration: 7000,
  });

  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
  
})(jQuery);
