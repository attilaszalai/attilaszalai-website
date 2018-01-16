;(function($) {
  "use strict";
  
  $(".bar").each(function() {
    
    var $bar = $(this),
        $pct = $bar.find(".pct"),
        data = $bar.data("bar");
    
    setTimeout(function() {
      
      $bar
        .css("background-color", data.color)
        .animate({
          "width": $pct.html()
      }, data.speed || 2000, function() {
        
        $pct.css({
          "color": data.color,
          "opacity": 1
        });
        
      });
      
    }, data.delay || 0);
    
  });
  
})(jQuery);



$("#top-menu a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });

  } // End if

});

function goto(hash){
  $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
}



$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});





