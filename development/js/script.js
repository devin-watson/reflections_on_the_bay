$(function(){
	"use strict";
	var wheight= $(window).height();

	//fullheight class

	$(".fullheight").css("height", wheight);

	$(window).resize(function(){
		var wheight= $(window).height();
		$(".fullheight").css("height", wheight);
	});

	

	//parallax
	$(".seperator-wrapper").parallax({
		imageSrc: "../images/background/view_1.jpg",
		speed: "0.7"
	});
});

