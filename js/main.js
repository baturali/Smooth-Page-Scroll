$(document).ready(function() {

    // JS & JQUERY Smooth Page Scroll 
	var scrollHeight = $('.smoothScroll').height();

	$('html, body').on('mousewheel DOMMouseScroll', function(e, deltaY) {
    	var body = $("html, body");

    	if($('html').is(':animated') || $('body').is(':animated')) { 
    		return false; 
    	}
    	if (e.deltaY < 0) {
    		var offset = body.scrollTop();
			body.stop().animate({scrollTop: offset + scrollHeight}, 500, 'swing', function () {
			});
    	} else {
    		var offset = body.scrollTop();
    		body.stop().animate({scrollTop: offset - scrollHeight}, 500, 'swing', function() {
			});
    	}

    	e.preventDefault();
	});


    $(document).on('scroll', function() {
        if ($(document).scrollTop() > 0) {
            $('nav.window').removeClass('opacity0').addClass('opacity1');

            $('nav.window2').removeClass('opacity1').addClass('opacity0');
        } else {
            $('nav.window').removeClass('opacity1').addClass('opacity0');

            $('nav.window2').removeClass('opacity0').addClass('opacity1');
        }
    });

});


