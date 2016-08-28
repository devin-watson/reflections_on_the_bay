$(function(){
	"use strict";

	var wheight= $(window).height();
	var topoffset= 80;

	//fullheight class

	$(".fullheight").css("height", wheight);

	$(window).resize(function(){
		var wheight= $(window).height();
		$(".fullheight").css("height", wheight);
	});

	//nav

	function navbarCollapse () {
	    if( $(".navbar").offset().top > 80){
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	}

	$(window).scroll(navbarCollapse);

	//gallery

	$('#links').onclick = function (event) {
	    event = event || window.event;
	    var target = event.target || event.srcElement,
	        link = target.src ? target.parentNode : target,
	        options = {index: link, event: event},
	        links = this.getElementsByTagName('a');
	    blueimp.Gallery(links, options);
	};

	//parallax
	$("#home").parallax({
		imageSrc: "../images/background/living_room_view.jpg",
		speed: "0.7"
	});
	$("#first").parallax({
		imageSrc: "../images/background/view_1.jpg",
		speed: "0.7"
	});
	$("#second").parallax({
		imageSrc: "../images/balcony/balcony.jpg",
		speed: "0.7"
	});
	// $("#details").parallax({
	// 	imageSrc: "../images/living_room/living_room_3.jpg",
	// 	speed: "0.7"
	// });

	//smooth scroll
	 $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

});

