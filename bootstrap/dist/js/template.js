$(document).ready(function() {
	// when ready on load
	if ($(window).width() < 1000) {
		$(".nav-item1").css("margin-left", "0px");
		$(".page-slide").hide();
		$(".card-rounded").css("width", "22rem");
		$(".card-rounded").css("margin-left", "5px");
		$(".row-category").hide();
	}
	else {
		$(".nav-item1").css("margin-left", "10px");
		$(".page-slide").show();
		$(".card-rounded").css("width", "17rem");
		$(".card-rounded").css("margin-left", "20px");
		$(".row-category").show();
	}

	// when ready but inframe inspect
	$(window).resize(function() {
		if ($(window).width() < 1000) {
			$(".nav-item1").css("margin-left", "0px");
			$(".page-slide").hide();
			$(".card-rounded").css("width", "22rem");
			$(".card-rounded").css("margin-left", "5px");
			$(".row-category").hide();
		}
		else {
			$(".nav-item1").css("margin-left", "10px");
			$(".page-slide").show();
			$(".card-rounded").css("width", "17rem");
			$(".card-rounded").css("margin-left", "20px");
			$(".row-category").show();
		}
	});
	
	var $item = $('.carousel-item');
	var $wHeight = $(window).height();

	$item.height($wHeight);
	$item.addClass('full-screen');

	$('.carousel img').each(function() {
		var $src = $(this).attr('src');
		var $color = $(this).attr('data-color');
		$(this).parent().css({
			'background-image' : 'url(' + $src + ')',
			'background-color' : $color
		});
		$(this).remove();
	});

	$(window).on('resize', function (){
		$wHeight = $(window).height();
		$item.height($wHeight);
	});

	$("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
	
});