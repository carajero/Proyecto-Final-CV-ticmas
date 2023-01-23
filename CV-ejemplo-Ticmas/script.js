$(document).ready(function() {
  $(".Intro").hide();
  $(".qual").hide();
  $("#hb").hide();
  $(".hellomsg")
    .animate({
      left: '0',
      right: '0%',
      top: '25%'
    }, function() {
      $(".hellomsg").fadeOut(2000);
      $(".imkt").delay(3000).animate({
        left: '0',
        right: '0%',
        top: '25%',
        opacity: '1'
      }, function() {
        $(".imkt").fadeOut(3000);
        $(".Intro,.qual,.hobbies").delay(3000).fadeIn(1000);
      });
    });
  $("BODY").scrollspy({
    target: ".navbar",
    offset: 50
  });
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    } // End if
  });
  $(".navarea").on({
    mouseover: function() {
      $(".navbar").fadeIn(1000);
    }
  });
  $("body").click(function(e) {
    if (e.target.id !== 'mynav') {
      $(".navbar").fadeOut(2000);
    }
  });
 /* $(".navarea").mouseenter(function(){
    $(".navbar").css("display","block");
  });
    $(".navarea").mouseleave(function(){
    $(".navbar").css("display","none");
  });*/
});