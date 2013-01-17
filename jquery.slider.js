(function( $ ){

    var settings = {};
    var currentPage = 1;
    var totalPages = 1;
    var slideWidth = 0;

    var methods = {

        init : function( options ) {
            settings = $.extend( {
                'width' : '1170'
				,'animationSpeed': 1000
				,'animationType': 'swing'
				,'startPage': 1
				,'onPageChangeStart': null
				,'onPageChangeEnd': null
                ,'showPager': true
                ,'controls': true
                ,'prevClass': 'slider-prev'
                ,'nextClass': 'slider-next'
            }, options);

            var self = this;

            // paging
            return this.each(function() {
                var $this = $(".slider-holder ul", this);

				// handle building of the pager
				var ul = $("ul", this);
				var lis = $("li", ul);
                var totalPages = lis.length;
				var liw = $(lis[0]).outerWidth();
                slideWidth = liw;
				ul.width(liw*lis.length); // set the correct width whilst we're here

				var ulw = ul.outerWidth();

				if(settings.showPager) {
					for(var i = 0; i < totalPages; i++)
					{
						$(".controls", $this).append("<li><a href=\"#\"></a></li>");
					}
					$(".controls li:first-child", $this).addClass("selected");

					// set up the events for the pager
					$(".controls li a", $this).click(function () {

						if(!$(".slider-holder ul", $this).is(":animated"))
						{
							// adjust the margin
							var index = $(this).parent().index();
							var newPage = index+1;
							$this.slider("changePage", newPage);
							currentPage = newPage;
						}

						return false;
					});
				}

                // handle left/right arrows
                $("."+settings.prevClass, this).click(function () {
                    var carousel = $("ul", $(this).parent());
                    if(!carousel.is(":animated")) {
                        if(currentPage > 1) {
                            var newPage = currentPage-1;
                            $this.slider("changePage", currentPage-1);
                            currentPage = newPage;
                        }
                    }
                    return false;
                });
                $("."+settings.nextClass, this).click(function () {
                    var carousel = $("ul", $(this).parent());
                    if(!carousel.is(":animated")) {
                        if(currentPage < totalPages) {
                            var newPage = currentPage+1;
                            $this.slider("changePage", newPage);
                            currentPage = newPage;
                        }
                    }
                    return false;
                });

				if(settings.startPage > 1 && settings.startPage <= totalPages) {
					$this.carousel("changePage", settings.startPage, false);
				}

            });
        },
        changePage: function (page, animate) {
            this.each(function () {

				var ml = ((page-1)*-1*slideWidth) + 'px';

                // animate the slide if we want to!
				if(animate != false) {
					if(jQuery.isFunction(settings.onPageChangeStart)) {
						settings.onPageChangeStart.call(this, page);
					}
					$(this).animate({'margin-left': ml}, settings.animationSpeed, settings.animationType, function () {
						if(jQuery.isFunction(settings.onPageChangeEnd)) {
							settings.onPageChangeEnd.call(this, page);
						}
					});
				} else {
					$(".carousel-holder ul").css({'margin-left': ml});
				}

                // update the paging icon!
                $(".controls li.selected", $(this)).removeClass("selected");
                $(".controls li:nth-child(" + (page) + ")", $(this)).addClass("selected");
            });

        }
    };

    $.fn.slider = function( method ) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.dcSlider' );
        }

    };

})( jQuery );
