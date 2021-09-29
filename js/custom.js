$(document).ready(function() {

	// fullpage plugin initlalization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage', '6thPage'],
		menu: '#js-menu',
		autoScrolling: false,
		fitToSection: false,
		scrollingSpeed: 1200
	});


	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 150){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// rellax initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}

	// Rellax pllugin initlalization
		


	// carousel pllugin initlalization
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
        	items:3
        },
        1000:{
            items:4
        }
    }
	})
})
