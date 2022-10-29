/// <reference path="jquery-3.6.0.min.js" />

$(function () {

  
  $(".yhteystiedot-nav-item").mouseenter(function(){
    $('#yhteystiedot-nav-item').removeClass('hover-efekti')
  });

  $(".yhteystiedot-nav-item").mouseleave(function(){
    $('#yhteystiedot-nav-item').addClass('hover-efekti')
  });







});