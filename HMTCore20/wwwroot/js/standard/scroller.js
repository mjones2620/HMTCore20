$(function(){
         $("#homeLink").addClass("showActive").addClass("highlight");

            $(document).on( 'scroll', function(){
         
                if ($(window).scrollTop() > 1150) {
                    $('.scroll-top-wrapper').addClass('show');
                } else {
                    $('.scroll-top-wrapper').removeClass('show');
                }
            });     
        });
                    
	         /**
	     * This part handles the highlighting functionality.
	     * We use the scroll functionality again, some array creation and 
	     * manipulation, class adding and class removing, and conditional testing
	     */
	    var aChildren = $("nav li").children(); // find the a children of the list items
	    var aArray = []; // create the empty aArray
	    for (var i=0; i < aChildren.length; i++) {    
	        var aChild = aChildren[i];
	        var ahref = $(aChild).attr('href');
	        aArray.push(ahref);
	    } // this for loop fills the aArray with attribute href values

	    $(window).scroll(function(){
	        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
	        var windowHeight = $(window).height(); // get the height of the window
	        var docHeight = $(document).height();

	        for (var i=0; i < aArray.length; i++) {
	            var theID = aArray[i];
	            var divPos = $(theID).offset().top - 80; // get the offset of the div from the top of page

	            var divHeight = $(theID).height(); // get the height of the div in question
	            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
	                $("a[href='" + theID + "']").addClass("highlight");
	            } else {
	                $("a[href='" + theID + "']").removeClass("highlight");
	            }
	        }

	        if(windowPos + windowHeight == docHeight) {
	            if (!$("nav li:last-child a").hasClass("highlight")) {
	                var navActiveCurrent = $(".highlight").attr("href");
	                $("a[href='" + navActiveCurrent + "']").removeClass("highlight");
	                $("nav li:last-child a").addClass("highlight");
	            }
	        }
	    });

        $(function () {
            $(document).on('click', 'a.page-scroll', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 70
                }, 1000, 'easeInOutExpo');
                event.preventDefault();
            });
        });
