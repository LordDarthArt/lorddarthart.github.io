$(document).ready(function () {
	$("a#buttonUp").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});
	var btnUp = $('a#buttonUp');
	var elemBtnW = $('header h1');

	var zapuskBtnUp = false;
	if ($('a').is('#buttonUp')) {
		zapuskBtnUp = true;
	} else {
		zapuskBtnUp = false;
	}

	if (zapuskBtnUp) {
		var waypointBtnUp = new Waypoint({
			element: elemBtnW,
			handler: function (direction) {
				if (direction == "down") {
					btnUp.fadeIn();
				} else {
					btnUp.fadeOut();
				};
			},
			offset: 0
		});
	};

	$("#portfolio_grid").mixItUp();
	$("#portfolio_grid2").mixItUp();

	$(".s_portfolio li").click(function () {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");
	//$(".dopInformation").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	$(".portfolio_item").each(function (i) {
		$(this).find("a.seework").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});
