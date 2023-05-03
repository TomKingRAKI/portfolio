$(document).ready(function() {
    $("#firstsite").hover(function() {
      $("#overlay").fadeIn();
    }, function() {
      $("#overlay").fadeOut();
    });
  });