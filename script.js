/* navigation */

$(function() {
  
    $("#toggle").click(function() {
      $(this).toggleClass("on");
      $("#resize").toggleClass("active");
    });
    
  });
  
  
/* Sticky */
var stickybit = stickybits('.caption-right');