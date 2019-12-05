/* navigation */


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("toggle-above").addEventListener('click', function(e) { 
    let burger = document.getElementById("toggle");
    burger.classList.toggle("on");
    document.getElementById("resize").classList.toggle("active"); 
  })
});

/* ------------ */
/* et en Jquery */
/* ------------ */

/* $(function() {
    $("#toggle").click(function() {
      $(this).toggleClass("on");
      $("#resize").toggleClass("active");
    });   
  }); */
  
/* Sticky */
stickybits('.caption-right-img',{
  stickyBitStickyOffset: 200,
});
stickybits('.bgimg-2-caption',{
  stickyBitStickyOffset: 200,
});