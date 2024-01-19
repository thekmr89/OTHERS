$(function () {
    $(document).ready(function () {
      var headerHeight = $("header").height();
      $(".sticky-nav-tab").on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        var targetPosition = $(target).offset().top - headerHeight;
        if (targetPosition < 0) {
          targetPosition = 0;
        }
        $("html, body").animate(
          { scrollTop: targetPosition, }, 600
        );
      });
  
      $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $(".spa-slide").each(function (i) {
          var adjustedPosition = $(this).position().top - headerHeight;
          if (adjustedPosition <= scrollDistance) {
            var bg = $(this).data('color');
            $('.sidenav').attr('data-color', bg);
            $(".sticky-nav-tab.active")
              .prevAll()
              .addClass("active")
              .end()
              .nextAll()
              .removeClass("active");
            $(".sticky-nav-tab").slice(0, i + 1).addClass("active")
          }
        });
      });
  
      if (!$('header').hasClass('header-fixed')) {
        $(window).scroll(function () {
          $('header').toggleClass("header-fixed", $(this).scrollTop() > ($(window).height()) / 100);
        });
      }
  
      var counted = 0;
      $(window).scroll(function () {
        var oTop = $('.SectionD').offset()?.top - window.innerHeight / 2;
        if (counted == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            },
              {
                duration: 2000,
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                }
              });
          });
          counted = 1;
        }
      });
      $(".left-side .grid .box").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var boxattr = $(this).attr('data-tab')
        $(this).children('.sub-wrap').addClass('active');
        $(this).siblings().children('.sub-wrap').removeClass('active');
      });
  
      $(".sub-wrap .sub-wrap-inner li a").on('mouseover', function () {
        var pic = $(this).attr('data-img');
        $('.sub-wrap.active .sub-product-list figure img').attr('src', pic);
      });
      $(".sub-wrap .sub-wrap-inner li a").on('mouseleave', function () {
        var path = $('.left-side .box.active').attr('data-defaultimg');
        $('.left-side .box.active .sub-wrap img').attr('src', path);
      })
  
      $( window ).on("resize", function() {
        humburgerHandler();
      });
  
      function humburgerHandler(){
        if (screen.width < 992) {
          $('.left-side .grid .box.active').removeClass('active');
        //   $('.Subtogledrop').slideUp();
          $(".togledrop").click(function (e) {
            e.preventDefault();
            $(this).siblings(".Subtogledrop").slideToggle();
            $(this).parent().toggleClass('active-arr').siblings().removeClass('active-arr');
            $(this).parent().siblings().find('.Subtogledrop').slideUp();
          });
  
          $('#hamburger').on('click', function(){
            $('.aside-center').addClass('active');
            $(".overlay").addClass("overlay_active");
            $("body").addClass("overflowhide");
          });
          $('#Close-ham').on('click', function(){
            $('.aside-center').removeClass('active');
            $(".overlay").removeClass("overlay_active");
            $("body").removeClass("overflowhide");
          });
    
          $(".menu_li_ttl").click(function () {
                $(this).siblings(".sub-wrap").slideToggle();
                $(this).parent().siblings().find('.sub-wrap').slideUp();
          });
        }
        else {
          console.log();
        }
      }
      humburgerHandler()
  
      
      $(".tab-listing ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var Product = $(this).attr("data-tab");
        $(".product-tab-detail .tabs[data-tab = " + Product + "]")
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
  
      $(".faq-tab li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var Product = $(this).attr("data-tab");
        $(".faq-nav-content .tabs[data-tab = " + Product + "]")
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
  
  

      
      $('.product-tab ul li').click(function(){
        $('.product-tab-content .aside-right .progrid li').show();
      })
      $('.product-tab-content .aside-right .progrid li').show();
  

      $(".title-selectbox").click(function () {
        $(this)
        .toggleClass("active")
        .parent()
        .siblings()
        .find(".title-selectbox")
        .removeClass("active");
        $(this).find(".arr").toggleClass("active");
        $(this).parent().siblings().find(".arr").removeClass("active");
        $(this).siblings(".title-selectbox-item:first").slideToggle();
        $(this).parent().siblings().find(".title-selectbox-item").slideUp();
      });
  
      // Open Model
      $(".model-open").on("click", function (e) {
        e.preventDefault();
        var model = $(this).attr("data-model");
        $(model).addClass("is-open");
        $(".overlay").addClass("overlay_active");
        $("body").addClass("overflowhide");
      });
  
      // Filter Data
      var tab = $('.tabli');
      tab.on('click', function () {
        var popCat = $(this).attr('data-tab');
        $(this).addClass('current').siblings().removeClass('current');
        if (popCat == 'all') {
          $('.tab-list').slideDown(600).addClass('active slideInUp');
        }
        else {
          filterTab(popCat);
        }
      })
  
      function filterTab(a) {
        $('.tab-list').each(function () {
          var current_tab = $(this).attr('data-tab');
          if (current_tab == a) {
            $(this).slideDown(600).addClass('active slideInUp')
            $(this).siblings().hide().removeClass('active slideInUp')
          }
        })
      }
  
      // about page journey slider 
      $(function () {
        var journey = $('.journeyslider');
        journey.on('initialized.owl.carousel', function (event) {
          setTimeout(function () {
            var le = $(".pagination .owl-dot:first-child").offset().left
            $(".swiper-active-mark").css("left", (le - 6) + "px");
          }, 1000)
        });
        journey.owlCarousel({
          loop: true,
          margin: 50,
          dotsEach: true,
          center: true,
          dotsData: true,
          dotsContainer: '.pagination',
          responsiveClass: true,
          useMouseWheel: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 2,
              nav: false,
              dots: true
            },
            1000: {
              items: 2,
              nav: false,
              loop: false,
            }
          }
        })
        journey.on('changed.owl.carousel', function (event) {
          var le = $(".pagination .owl-dot.active").offset().left
          $(".swiper-active-mark").css("left", (le - 6) + "px");
        });
        journey[0].addEventListener('mousewheel', e => {
          if (e.deltaY > 0) {
            $(journey).trigger('next.owl', 1000);
          } else {
            $(journey).trigger('prev.owl', 1000);
          }
          e.preventDefault();
        }, false);
      })
    
      // substain slider 
      var substain = $('.SustainabilitySlider');
      substain.owlCarousel({
        loop: false,
        margin: 50,
        dotsEach: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        onInitialized: aboutfun,
        onChanged: aboutfun,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false,
          },
          1000: {
            items: 1,
            nav: false,
            loop: false,
          }
        }
      })
      function aboutfun(e) {
        $('ul.subtain-pagination li').eq(e.item.index).addClass('active').siblings().removeClass('active');
    }
    $('ul.subtain-pagination li').on('click', function(){
      $(substain).trigger('to.owl.carousel', [$(this).index(), 500]);
    });
  

    //nav slide on mobile 

    var mobileslide = $('.mobile-slider')

    $(window).on("load resize",function(e){
      if($(window).width() <= 675){
        $('.mobile-slider').addClass('owl-carousel');
          mobileslide.owlCarousel({
            items: 1,
            loop: false,
            margin: 15,
            dots: false,
            autoplay: false,
            nav: true,
            navText: [
              "<img src='/assets/images/icon/prev3.png' alt='benz pre'/>",
              "<img src='/assets/images/icon/next3.png' alt='benz next'/>",
            ],
          })
          $('.product-tab .mobile-slider').on('changed.owl.carousel', function(event) {
              setTimeout(function() {
                $('.product-tab .mobile-slider .owl-item.active li').trigger('click');
                $('.product-tab ul li').removeClass('active');
                $('.product-tab .mobile-slider .owl-item.active li').addClass('active');
              }, 0);
            })
          $('.product-tab .mobile-slider').on('initialized.owl.carousel', function(event) {
              setTimeout(function() {
                $('.product-tab .mobile-slider .owl-item.active li').trigger('click');
                $('.product-tab ul li').removeClass('active');
                $('.product-tab .mobile-slider .owl-item.active li').addClass('active');
              }, 0);
            })
        }
      else{
        mobileslide.trigger('destroy.owl.carousel');
        $('.mobile-slider').removeClass('owl-carousel owl-loaded owl-drag');
      }
    });
         // popup product industres 
  var industrpup = $('.industries-slider-popup');
  var industrpupitem = $('.industries-slider-popup .item');
  function industryslider() {
    $('.industries-slider-popup').addClass('owl-carousel');
    setTimeout(function() {
    industrpup.owlCarousel({
      loop: true,
      margin: 15,
      dotsEach: true,
      dots: false,
      autoplay: false,
      nav: true,
      navText: [
        "<img src='/assets/images/icon/prev.png' alt='benz pre'/>",
        "<img src='/assets/images/icon/next.png' alt='benz next'/>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1.4,
          nav: false
        },
        600: {
          items: 3,
          nav: true,
        },
        1000: {
          items: 4,
          nav: true,
          loop: true,
        }
      }
    });
  })
  }
  
  function removeslider() {
    setTimeout(function() {
      industrpup.trigger('destroy.owl.carousel');
      $('.industries-slider-popup').removeClass('owl-carousel owl-loaded owl-drag');
      $('.industries-slider-popup .item').removeClass('datamatch');
      industrpup.empty();
      industrpup.append(industrpupitem);
    },400)
  }
  
  // Popup product industries
  $('.popup-link a').on('click', function () {
    $('.popup-container').addClass('pop-show');
    $("body").addClass("overflowhide");
    var popcat = $(this).attr('data-att');
    $('.industries-slider-popup .item[data-att="' + popcat + '"]').addClass('datamatch');
    var visibleitem = $('.industries-slider-popup .item.datamatch')
    industrpup.empty();
    industrpup.append(visibleitem);
    setTimeout(function() {
      industryslider()
  });
  });
  
  $('.close-productmodel').click(function(){
    removeslider()
  })
  
  
  $(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        $('.popup-container').removeClass('pop-show');
        $('.InquiryPopModule').removeClass('is-open');
        $('.overlay').removeClass('overlay_active');
        $("body").removeClass("overflowhide");
        removeslider()
    }
  });
  
  
      // More-Services-slider
      var Moreservice = $('.More-Services-slider');
      Moreservice.owlCarousel({
        loop: true,
        margin: 30,
        dotsEach: true,
        nav: true,
        dots: false,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre'/>",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        autoplay: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 2,
            nav: true,
          }
        }
      })
  
  
      $('.popup-link a').on('click', function () {
        $('.popup-container').addClass('pop-show');
        $("body").addClass("overflowhide");
      });
  
      // Close Model
      $(".close_model").on("click", function () {
        $(this).parents(".model").removeClass("is-open");
        $("body").removeClass("overflowhide");
        $(".overlay").removeClass("overlay_active");
        $(".video_full iframe").attr("src", "");
        $(".popup-container").removeClass('pop-show');
      });
  
      $(".overlay").on("click", function () {
        $(this).removeClass("overlay_active");
        $(".model").removeClass("is-open");
        $("body").removeClass("overflowhide");
        $('.aside-center').removeClass('active');
      });
  
      $(".model-video").on("click", function () {
        var src = $(this).attr("data-video");
        $(".video_full iframe").attr("src", src);
      });
  
      // Patnerslider script
      var $Patner = $(".patnerslider");
      $('#dots .item').click(function () {
        $('#dots .item').trigger('to.owl.carousel', [$(this).index(), 1000]);
      });
      $Patner.owlCarousel({
        items: 1,
        autoplay: false,
        loop: false,
        margin: 30,
        responsiveClass: true,
        dotsContainer: '#dots',
        smartSpeed: 800,
        nav: false,
        dots: true,
        navText: [
          "<img src='assets/images/icon/prev2.png' alt='benz pre'/>",
          "<img src='assets/images/icon/next2.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          675: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
            dots: true,
          },
        },
      });
  
      // Productpage banner slider
      var $ProductBan = $(".Productbanner");
      $ProductBan.owlCarousel({
        items: 1,
        autoplay: false,
        loop: false,
        responsiveClass: true,
        smartSpeed: 800,
        nav: false,
        dots: true,
        navText: [
          "<img src='assets/images/icon/prev2.png' alt='benz pre'/>",
          "<img src='assets/images/icon/next2.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          675: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
            dots: true,
          },
        },
      });
  
      var $ProductDet = $(".ProductDetSlide");
      $ProductDet.owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        responsiveClass: true,
        smartSpeed: 800,
        nav: true,
        dots: false,
        navText: [
          "<img src='/assets/images/icon/prev3.png' alt='benz pre'/>",
          "<img src='/assets/images/icon/next3.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
          },
          675: {
            items: 1,
            nav: false,
            dots: true,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
        },
      });
  
      $('.socialbtn').click(function () {
        $(this).toggleClass('active');
        return $('.box').toggleClass('open');
      });
  
      var $Blog = $(".BlogSlider");
      $Blog.owlCarousel({
        items: 3,
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        smartSpeed: 800,
        nav: true,
        dots: true,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre'/>",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
            dots: true,
            nav: false
          },
          675: {
            items: 2,
            dots: true,
            nav: false
          },
          768: {
            items: 2,
            dots: true,
            nav: false
          },
          992: {
            items: 3,
            dots: false,
            nav: true
          },
        },
      });
  
  
      var $MorePro = $(".more-product");
      $MorePro.owlCarousel({
        items: 4,
        autoplay: false,
        loop: false,
        margin: 15,
        responsiveClass: true,
        smartSpeed: 800,
        nav: true,
        dots: true,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre'/>",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
          },
          675: {
            items: 2,
            nav: false,
            dots: true,
          },
          768: {
            items: 3,
            dots: false
          },
          992: {
            items: 4,
            dots: false
          },
        },
      });



      var $substainMorePro = $(".substain-more-product");
      $substainMorePro.owlCarousel({
        items: 3,
        autoplay: false,
        loop: false,
        margin: 15,
        responsiveClass: true,
        smartSpeed: 800,
        nav: true,
        dots: true,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre'/>",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
          },
          675: {
            items: 2,
            nav: false,
            dots: true,
          },
          768: {
            items: 3,
            dots: false
          },
          992: {
            items: 3,
            dots: false
          },
        },
      });
  
      var $Packag = $(".packagingslider");
      $Packag.owlCarousel({
        items: 2,
        autoplay: false,
        loop: true,
        margin: 60,
        center: true,
        responsiveClass: true,
        startPosition: 2000,
        smartSpeed: 800,
        rewind: false,
        nav: true,
        dots: true,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre'/>",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            margin: 10,
            dots: true
          },
          675: {
            items: 1.5,
            margin: 20,
            dots: false
          },
          768: {
            items: 1.5,
            dots: false
          },
          992: {
            items: 2.1,
            dots: false
          },
        },
      });
  
      var $Certificate = $(".certificate-slider");
      $Certificate.owlCarousel({
        items: 2,
        autoplay: false,
        loop: true,
        margin: 60,
        center: true,
        responsiveClass: true,
        smartSpeed: 1400,
        rewind: false,
        nav: true,
        dots: true,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre'/>",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true
          },
          675: {
            items: 2,
            margin: 20,
            nav: false,
            dots: true
          },
          768: {
            items: 2,
            margin: 40,
            nav: true,
            dots: false
          },
          992: {
            items: 3,
            dots: false
          },
        },
      });
  
      var $NewsSlider = $(".more-news-slider");
      $NewsSlider.owlCarousel({
        items: 2,
        autoplay: false,
        loop: true,
        responsiveClass: true,
        smartSpeed: 1400,
        rewind: false,
        nav: true,
        dots: false,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre' />",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1,
            margin: 10,
            nav: false, 
            dots: true
          },
          675: {
            items: 1,
            margin: 10,
            nav: false,
            dots: true
          },
          768: {
            items: 2,
            margin: 10
          },
          992: {
            items: 3,
            margin: 30,
          },
        },
      });
  
      var $CareerSlide = $(".career-slider");
      $CareerSlide.owlCarousel({
        autoplay: false,
        margin: 0,
        nav: false,
        dots: true,
        navText: ["<img src='/assets/images/icon/prevb.png' alt='benz pre'>", "<img src='/assets//images/icon/nextb.png' alt='benz nex'>"],
        loop: true,
        onInitialized: spaceitem,
        onChanged: spaceitem,
        responsive: {
          0: {
            items: 1,
            margin: 10,
            dots: true,
          },
          767: {
            items: 2,
            margin: 20,
            autoplayTimeout: 3000,
            smartSpeed: 1900,
            nav: true,
            // dots: true
          },
          991: {
            items: 2.8,
            margin: 10,
            autoplayTimeout: 3000,
            smartSpeed: 1900,
            nav: true,
          },
          1025: {
            items: 3.8,
            margin: 18,
            autoplayTimeout: 3000,
            smartSpeed: 1900,
            nav: true,
          },
        }
      });
      function spaceitem(e) {
        setTimeout(() => {
          $('.career-slider .owl-stage .owl-item').removeClass('last-item');
          $('.career-slider .owl-stage .owl-item.active').last().prev().addClass('last-item');
        })
      }
  
  // team slider 
      var $Team = $(".teamslider");
      $Team.owlCarousel({
        items: 3.5,
        autoplay: false,
        loop: true,
        margin: 10,
        center: true,
        responsiveClass: true,
        startPosition: 2000,
        smartSpeed: 800,
        rewind: false,
        nav: true,
        dots: false,
        onInitialized: changeitem,
        onChanged: changeitem,
        navText: [
          "<img src='/assets/images/icon/prev.png' alt='benz pre' />",
          "<img src='/assets/images/icon/next.png' alt='benz next'/>",
        ],
        responsive: {
          0: {
            items: 1.9,
            margin: 0,
            nav: false,
            dots: false,
          },
          675: {
            items: 3,
            margin: 0,
            nav: false,
            dots: false,
          },
          768: {
            items: 3,
            margin: 0,
            nav: true,
          },
          992: {
            items: 3.9,
            nav: true,
          },
        },
      });
    });
    function changeitem(){
      $('.teamslider .owl-item').removeClass('ps prev ns next')
      setTimeout(function() {
      $('.teamslider .owl-item.center').prevAll().addClass('ps prev');
      $('.teamslider .owl-item.center').nextAll().addClass('ns next');
      })
        setTimeout(function() {
          var activeitem = $('.teamslider .owl-item.center').children('.item').attr('data-tab');
          $('.teamslidercontentsec .teamcontent[data-tab="' + activeitem + '"]').addClass('show').siblings().removeClass('show')
      });
    }
  
  // team slider js end
  
  
    // back to top
    $('footer').after('<div id="back-to-top"><img src="/assets/images/icon/prev.png"/></div>');
    $(window).scroll(function () {
      var currentScroll = $(window).scrollTop();
      if (currentScroll > 200) {
        $('#back-to-top').addClass('show')
      }
      else {
        $('#back-to-top').removeClass('show')
      }
    });
  
    // Back to top click
    $('#back-to-top').on('click', function () {
      $('body,html').animate({
        scrollTop: 0,
      }, 700
      );
    })
  
    // form valid focus
    $(".form-control").each(function () {
      if ($(this).val() != "") {
        $(this).addClass("valid")
      }
      else {
        $(this).removeClass("valid")
      }
    })
  
    // Form Input 
    $(".form-control").on("focusout", function () { $(this).val() ? $(this).addClass("valid") : $(this).removeClass("valid") })
      
    var location1 = '/' + window.location.href.split('/')[3]
    var location2 = '/' + window.location.href.split('/')[4]
    var pathlocation = location1+location2
    $('.product-listingSec .aside-left ul li a[href="'+ pathlocation +'"]').parent().addClass('active');
  
    // Search
    $('.jsBtnSeachToggle').on('click', function (e) {
    const isOpenornot = $('.btn-search .closelens:visible').length === 0;
    $(".overlayII").toggleClass("overlay_activeII");
    $('.btn-search .closelens').toggle(isOpenornot);
    $('.btn-search .openlens').toggle(!isOpenornot);
    e.preventDefault();
    $('.searchbtn').toggleClass('active');
  });
  
  $('.overlayII').on('click', function(){
    $('.overlayII').removeClass('overlay_activeII');
    const isOpenornot = $('.btn-search .closelens:visible').length === 0;
    $('.btn-search .closelens').toggle(isOpenornot);
    $('.btn-search .openlens').toggle(!isOpenornot);
    var outputDiv = $('.description');
    outputDiv.addClass('hidden').removeClass('showdisc');
    $('.searchbtn').removeClass('active');
  });
  
  $('.frmCnt').on('keyup', function() {
    var inputText = $(this).val();
    var outputDiv = $('.description');
    if (inputText.trim() !== '') {
        outputDiv.addClass('showdisc').removeClass('hidden');
    } else {
        outputDiv.addClass('hidden').removeClass('showdisc');
    }
  });
  
  $('p').each(function() {
    var a = $(this).html().replaceAll('BENZ Packaging', '<span style="font-weight:bold;">BENZ Packaging</span>');
    $(this).html(a);
  });
  
  
  
  });
  
