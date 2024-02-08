
/* Hide Header on on scroll down S */
// if ($(window).width() > 1199){
//   var didScroll;
//   var lastScrollTop = 0;
//   var delta = 15;
//   var navbarHeight = $('header').outerHeight();

//   $(window).scroll(function(event){
//       didScroll = true;
//       var scrollD = $(window).scrollTop();
//       if (scrollD >= 1) {
//           $('header').addClass('fixed');
//           // alert("o")
//       }
//       if (scrollD <= 1) {
//           $('header').removeClass('fixed');
//           // alert("os")
//       }
//   });

//   setInterval(function() {
//       if (didScroll) {
//           hasScrolled();
//           didScroll = false;
//       }
//   }, 250);
// }

// ===========================

// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
	buttons: [
		"thumbs",
		"fullScreen",
		"close"
	],
	loop: false,
	protect: true
});

// TOGGLE MENU
$("#navbarClose").hide();
$(".sidenavbar-brand").hide();

$("#navbarIcon").click(function () {
	// $("#navbarIcon").addClass("open");
	// $("#navbarMenu").addClass('show');
	$("body").addClass('menu-open');
	$(".sidenavbar-brand").show();
	$("#navbarIcon").hide();
	$("#navbarClose").show();
});

$("#navbarClose").click(function () {
	// $("#navbarIcon").addClass("open");
	// $("#navbarMenu").addClass('show');
	$(".navbar-collapse").removeClass('show');
	$("body").removeClass('menu-open');
	$(".sidenavbar-brand").hide();
	// $("#navbarIcon").addClass('navbar-toggler-icon');
	$("#navbarIcon").show();
	$("#navbarClose").hide();
});

// $(".nav-overlay").click(function(){
//   $("#navbarIcon").removeClass("open");
//   $("#navbarMenu").removeClass('show');
//   $("body").removeClass('menu-open');
// });

// $("#navbarIcon .menu-close-icon").click(function(){
//   $("#navbarIcon").removeClass("open");
//   $("#navbarMenu").removeClass('show');
//   $("body").removeClass('menu-open');
// });




// // ALL CATEGORY TAB

$("#defaultTab").show();


$("#categoryTab li").click(function () {
	$("#defaultTab").hide();
});



function hasScrolled() {
	var st = $(this).scrollTop();
	if (Math.abs(lastScrollTop - st) <= delta)
		return;
	if (st > lastScrollTop && st > navbarHeight) {
		$('header').removeClass('nav-down').addClass('nav-up');
	} else {
		if (st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}







var swiper = new Swiper(".nav_sport_slider", {
	speed: 1000,
	spaceBetween: 10,
	loop: false,
	navigation: {
		nextEl: ".nav-button-next",
		prevEl: ".nav-button-prev",
	},
	pagination: {
		el: ".swiper-nav-pagination",
	},
});





var swiper = new Swiper(".banner_slider", {
	speed: 500,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
});


var swiper = new Swiper(".team_slider", {
	speed: 500,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {

		1024: {
			slidesPerView: 4,
			spaceBetween: 120,
		}
	}
});

var swiper = new Swiper(".pl_slider", {
	speed: 500,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			spaceBetween: 80,
		}
	}
});




// $(function () {
//   $("#datepicker, #endDate, #startbetFilter, #endbetFilter").datepicker({
//         todayHighlight: true
//   }).datepicker('update', new Date());
// });

$(document).ready(function () {
	$(".datepicker ,#endDate, #startbetFilter, #endbetFilter").datepicker({
		todayHighlight: true,
	}).on('show', function (e) {
		$('.prev').html("<i class='fa fa-angle-left  fadeInLeft'></i>");
		$('.next').html("<i class='fa fa-angle-right  fadeInLeft'></i>");
	});
});


$("#singleSelect").select2({
	placeholder: "Select a programming language",
	minimumResultsForSearch: -1
});


$("#history-filter, #message-filter, #mobile-days-history").select2({
	minimumResultsForSearch: -1
});




// Filter hide show mobile

$("#filterButton").on("click", function () {
	$("#filterWrapper").show();
});

$("#filterClose").on("click", function () {
	$("#filterWrapper").hide();
});



// profile page

$("#edit-mobile-user").on("click", function () {
	$("#userDetailform").show();
});

$("#userprofileform").on("click", function () {
	$("#userDetailform").hide();
});


// profileTab


$(window).on("load", function () {
	if ($(window).width() < 767) {
		$("#profileTab .nav-link").click(function () {
			if ($(this).hasClass("active")) {
				// alert("test");
				$("#profile-account-pane").hide();
			}
		});
		// if($("#profileTab .nav-link").find("active")){
		//   alert("test");
		//   $("#profile-account-pane").hide();
		// }
		// debugger;
		if ($("#profileTab").find("nav-link")) {
			// alert("test");
			$("#profileTab .nav-link").removeClass("active");
		}
		if ($("#social-media-list--warpper .tab-pane").find("active, show")) {
			// alert("test11");
			$("#social-media-list--warpper .tab-pane").removeClass("active , show");
		}
	}
})



// next step


$("#money-deposit-btn-popup").on("click", function (e) {
	$("#step2").hide();
	$("#step3").hide();
	$("#step4").hide();

})

$(window).on("load", function (e) {
	$("#step1 .step1-btn").click(function () {
		$("#step1").hide();
		$("#step2").show();
	})

	$("#step2 .step2-btn").click(function () {
		$("#step1").hide();
		$("#step2").hide();
		$("#step3").show();
	})

	$("#step3 .step3-btn").click(function () {
		$("#step1").hide();
		$("#step2").hide();
		$("#step3").hide();
		$("#step4").show();
	})

	// ===========================

	$("#step11 .step11-btn").click(function () {
		$("#step11").hide();
		$("#step22").show();
	})

	$("#step22 .step22-btn").click(function () {
		$("#step11").hide();
		$("#step22").hide();
		$("#step33").show();
	})

	$("#step33 .step33-btn").click(function () {
		$("#step11").hide();
		$("#step22").hide();
		$("#step33").hide();
		$("#step44").show();
	})

	// ============================

	$("#step111 .step111-btn").click(function () {
		$("#step111").hide();
		$("#step222").show();
	})

	$("#step222 .step222-btn").click(function () {
		$("#step111").hide();
		$("#step222").hide();
		$("#step333").show();
	})

	$("#step333 .step333-btn").click(function () {
		$("#step111").hide();
		$("#step222").hide();
		$("#step333").hide();
		$("#step444").show();
	})

	// =================================

	$("#step1111 .step1111-btn").click(function () {
		$("#step1111").hide();
		$("#step2222").show();
	})

	$("#step2222 .step2222-btn").click(function () {
		$("#step1111").hide();
		$("#step2222").hide();
		$("#step3333").show();
	})

	// =====================================

	$("#step11111 .step11111-btn").click(function () {
		$("#step11111").hide();
		$("#step22222").show();
	})

	$("#step22222 .step22222-btn").click(function () {
		$("#step11111").hide();
		$("#step22222").hide();
		$("#step33333").show();
	})

})

$(document).ready(function () {
	$(".gallery-img").lightGallery();
});



