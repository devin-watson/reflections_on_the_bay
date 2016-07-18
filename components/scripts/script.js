$(function(){

  "use strict";

    var height = $(window).height();
    $(".full-height").css("height", height);

    $(window).resize(function(){
      var height = $(window).height();
      $(".full-height").css("height", height);
    });
	

//Landscape navigation
    var $wHeight = $(window).height();
    var $toggleButton = $(".toggle");
    var $toggleX = $(".toggleX");
    var $sideSocial = $(".sidebar .social");
    var $social = $("#entrance .social");
    var $landscape = $(".landscape");
    var $pageIntro = $("#entrance");
    var $sidebar = $(".sidebar");

    if($wHeight < 450) {
      $toggleButton.css("display", "none");
      $toggleX.css("display", "none");
      $sideSocial.css("display", "none");
      $social.css("display", "none");
      $landscape.css("display", "block");
      $pageIntro.css("padding-top", "55px");
      $sidebar.css("display", "none");

    } else {
      $toggleButton.css("display", "block");
      $toggleX.css("display", "block");
      $sideSocial.css("display", "table");
      $social.css("display", "table-cell");
      $landscape.css("display", "none");
      $pageIntro.css("padding-top", "0");
      $sidebar.css("display", "block");

      

    }//else

    $(window).resize(function(){
      var $wHeight = $(window).height();
      var $toggleButton = $(".toggle");
      var $toggleX = $(".toggleX");
      var $social = $("#entrance .social");
      var $landscape = $(".landscape");
      var $pageIntro = $("#entrance");
      var $sidebar = $(".sidebar");

      if($wHeight < 450) {
      $toggleButton.css("display", "none");
      $toggleX.css("display", "none");
      $sideSocial.css("display", "none");
      $social.css("display", "none");
      $landscape.css("display", "block");
      $pageIntro.css("padding-top", "55px");
      $sidebar.css("display", "none");

    } else {
      $toggleButton.css("display", "block");
      $toggleX.css("display", "block");
      $sideSocial.css("display", "table");
      $social.css("display", "table-cell");
      $landscape.css("display", "none");
      $pageIntro.css("padding-top", "0");
      $sidebar.css("display", "block");

      }//else
    }); //landscape navigation
  });//document load
