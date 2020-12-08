// for the nav
$('nav .dropdown').hover(function(){
    var $this = $(this);
    // 	 timer;
    // clearTimeout(timer);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
    $this.find('.dropdown-menu').addClass('show');
}, function(){
    var $this = $(this);
        // timer;
    // timer = setTimeout(function(){
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').removeClass('show');
    // }, 100);
});

$('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });
  // magnific popup
	$('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300 // don't foget to change the duration also in CSS
        }
      });
    
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
      });

      var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

  // for index

  
// menu for the about section
function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent--about");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks--about");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }

  
// app
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

	// Scrollax
  $.Scrollax();

  var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
  carousel();
  
  (function($) {

    "use strict";
  
  
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  
  
    var fullHeight = function() {
  
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
      });
  
    };
    fullHeight();
  
    // loader
    var loader = function() {
      setTimeout(function() { 
        if($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, 1);
    };
    loader();
  
    // Scrollax
     $.Scrollax();
  
    var carousel = function() {
      $('.home-slider').owlCarousel({
        loop:true,
        autoplay: true,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        dots: true,
        autoplayHoverPause: false,
        items: 1,
        navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
      });
  
      $('.carousel-testimony').owlCarousel({
        center: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
          0:{
            items: 1
          },
          600:{
            items: 2
          },
          1000:{
            items: 3
          }
        }
      });
  
    };
    carousel();
  
    $('nav .dropdown').hover(function(){
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').addClass('show');
    }, function(){
      var $this = $(this);
        // timer;
      // timer = setTimeout(function(){
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').removeClass('show');
      // }, 100);
    });
  
  
    $('#dropdown04').on('show.bs.dropdown', function () {
      console.log('show');
    });
  
    // magnific popup
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
       gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });
  
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });
  
  
    var counter = function() {
      
      $('#section-counter').waypoint( function( direction ) {
  
        if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
  
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function(){
            var $this = $(this),
              num = $this.data('number');
              console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 7000
            );
          });
          
        }
  
      } , { offset: '95%' } );
  
    }
    counter();
  
    var contentWayPoint = function() {
      var i = 0;
      $('.ftco-animate').waypoint( function( direction ) {
  
        if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
          
          i++;
  
          $(this.element).addClass('item-animate');
          setTimeout(function(){
  
            $('body .ftco-animate.item-animate').each(function(k){
              var el = $(this);
              setTimeout( function () {
                var effect = el.data('animate-effect');
                if ( effect === 'fadeIn') {
                  el.addClass('fadeIn ftco-animated');
                } else if ( effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft ftco-animated');
                } else if ( effect === 'fadeInRight') {
                  el.addClass('fadeInRight ftco-animated');
                } else {
                  el.addClass('fadeInUp ftco-animated');
                }
                el.removeClass('item-animate');
              },  k * 50, 'easeInOutExpo' );
            });
            
          }, 100);
          
        }
  
      } , { offset: '95%' } );
    };
    contentWayPoint();
  
    //about sectin
    // Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
  var testimonialItems = document.querySelectorAll(".item label");
  var timer;
  function cycleTestimonials(index) {
     timer = setTimeout(function() {
      var evt;
      if (document.createEvent){
        //If browser = IE, then polyfill
        evt = document.createEvent('MouseEvent');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      } else {
        //If Browser = modern, then create new MouseEvent
        evt = new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
              clientX: 20
            });
      }
      var ele = "." + testimonialItems[index].className;
      var ele2 = document.querySelector(ele)
      ele2.dispatchEvent(evt);
      index++; // Increment the index
      if (index >= testimonialItems.length) {
        index = 0; // Set it back to `0` when it reaches `3`
      }
      cycleTestimonials(index); // recursively call `cycleTestimonials()`
      document.querySelector(".testimonials").addEventListener("click", function() {
        clearTimeout(timer); //stop the carousel when someone clicks on the div
      });
    }, 2000); //adjust scroll speed in miliseconds
  }
  //run the function
  cycleTestimonials(0);
  /*i know what going on here */
  
  })(jQuery);