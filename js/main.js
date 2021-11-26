$(document).ready(function() {
	new WOW().init();
	$('#main-banner').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 100000,
		autoplayHoverPause: true,		
		mouseDrag:false,
   		touchDrag:true
	});	
	$('#testimonials-carousel').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 100000,
		autoplayHoverPause: true,
		mouseDrag:false,
   		touchDrag:true
	});	
	$("#features-banner").owlCarousel({
		items: 1,
		loop: false,
		margin: 0,
		nav: true,
		mouseDrag:false,
   		touchDrag:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:1
	        }
	    }

	});	

	$("#features-banner").on('changed.owl.carousel', function(event){
		$("#features-icon .item .feature-icon,#features-icon .item").removeClass("active");
		var selectedIcon = "#features-icon .item"+event.item.index+" .feature-icon";
		var selectedItem = "#features-icon .item"+event.item.index;
		$(selectedIcon).addClass("active");
		$(selectedItem).addClass("active");
	});

	$("#features-icon").owlCarousel({
		items: 7,
		loop: false,
		margin: 0,
		nav: true,
		mouseDrag:false,
   		touchDrag:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:7
	        }
	    }
	});	

	$("#features-icon .item .feature-icon").click(function(){
		$("#features-icon .item .feature-icon").removeClass("active");
		$(this).addClass("active");
		var activeItem = $(this).parent().attr("rel");
		//alert(activeItem);
		$("#features-icon .item").removeClass("active");
		$(this).parent().addClass("active");
		//alert(activeItem);
		$("#features-banner").trigger('to.owl.carousel', [activeItem, 500]);
	});

	$("#service-carousel").owlCarousel({
		items: 3,
		loop: false,
		center:false,
		margin: 20,
		nav: true,
		mouseDrag:false,
   		touchDrag:true,
   		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('.accordion').on('click', function() {
		if($(this).find('.acc-head').hasClass('active')){
			$('.acc-content').hide();
			$('.acc-head').removeClass('active');
		}else{
			$('.acc-content').hide();
			$('.acc-head').removeClass('active');
			$(this).find('.acc-head').addClass('active');
			$(this).find('.acc-content').show();
		}
	});	

    $(".wrapper").click(function(){
    	if($(".main-menu").offset().left == 0){
    		$(".main-menu").animate({"left": '-300px'});
			$(".close-menu").hide();
			$(".close-menu").addClass('more');
			$(".main-menu ul li a.head").removeClass('active');
			$(".sub-menu").hide();
    	}

    	$(".input-dropdown-normal, .input-dropdown-tabDiv").removeClass("on");
    	$(".input-dropdown-normal, .input-dropdown-tabDiv").hide();
    });

	$(".main-menu .head.more,.main-menu .head.active").on("click",function(e){
		e.stopPropagation();
		if($(this).hasClass('active')){
			$(this).addClass('more');
			$(".main-menu ul li a.head").removeClass('active');
			$(".sub-menu").hide();
		}else{
			$(".main-menu ul li a.head").removeClass('active');
			$(".sub-menu").hide();
			$(this).next().show();
			$(this).addClass('active');
		}
	});

	$(".main-menu").on("click",function(e){
		e.stopPropagation();
	});

	$(".top-menu").on("click",function(){
		$(".main-menu").animate({"left": '0'});
		$(".close-menu").show();
	});

	$(".close-menu").click(function(){
		$(".main-menu").animate({"left": '-300px'});
		$(".close-menu").hide();
		$(this).addClass('more');
		$(".main-menu ul li a.head").removeClass('active');
		$(".sub-menu").hide();
	});

	$(".attribute").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".hide-tab").show();
		}else{
			$(this).addClass("active");
			$(".hide-tab").hide();
		}
	});

	$(".app").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".hide-tab1").show();
		}else{
			$(this).addClass("active");
			$(".hide-tab1").hide();
		}
	});
	/*animateValue("comfortable",0,0,0);
	animateValue("trusted",0,0,0);
	animateValue("customers",0,0,0);*/

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 90) {
	        $('.header').addClass('fixed-header');
	    }
	    else {
	        $('.header').removeClass('fixed-header');
	    }
	});

	$(".package-block-left .type span").hover(function(){
		$(".outstation-block,.city-block,.packages-block").hide();
		$(".package-block-left .type span").removeClass("active");
		$(this).addClass("active");
		var activeDiv = "."+$(this).attr('rel')+"-block";
		//alert(activeDiv);
		$(activeDiv).show();
	});

	$(".download-app").click(function (){
		if($(this).hasClass("story-page")){
			window.location.href = "index.html#download";
		}else{
	        $('html, body').animate({
	            scrollTop: $(".download-section").offset().top - 80
	        }, 2000);
    	}
    });

    $(".download-app-mobile").click(function (){
    	if($(this).hasClass("story-page")){
			window.location.href = "index.html#download";
		}else{
	        $('html, body').animate({
	            scrollTop: $(".download-section").offset().top + 250
	        }, 2000);
	    }
    });

    $('.in-drop input').click(function(e){
    	e.stopPropagation();
    	$(".input-dropdown-normal,.input-dropdown-tabDiv").hide();
    	$(".input-dropdown-normal,.input-dropdown-tabDiv").removeClass('on');
    	$(this).parent().find(".input-dropdown-normal").show(); 
    	$(this).parent().find(".input-dropdown-normal").addClass('on');
    	$(this).parent().find(".input-dropdown-tabDiv").show(); 
    	$(this).parent().find(".input-dropdown-tabDiv").addClass('on');
    });

    $(".input-dropdown-normal div").click(function(e){
    	e.stopPropagation();
    	var divContent = $(this).html();
    	$(this).parent().prev().prev().val(divContent);
    	$(".input-dropdown-normal").hide();
    	$(".input-dropdown-normal").removeClass('on');
    });

    $(".input-dropdown-tabDiv .tab-manual-content-block").click(function(){
    	var gear_type = $('div#car_gear_type div.active').html();
    	var divContent = gear_type + "-" + $(this).find('.title').html();
    	$(".input-dropdown-tabDiv .tab-manual-content-block").removeClass('active');
		$(this).parent().parent().parent().prev().prev().val(divContent);
		$(this).addClass('active');
		$(".input-dropdown-tabDiv").hide();
		$(".input-dropdown-tabDiv").removeClass('on');
    });

    $(".sign-up-text").click(function(){
    	$(".sign-up-wrapper .tabs a").removeClass("active");
    	$(this).addClass("active");
    	$(".sign-in-form,.otp-form").hide();
    	$(".sign-up-form").show();
    });

    $(".sign-in-form .link").click(function(){
    	$(".sign-up-wrapper .tabs a").removeClass("active");
    	$(".sign-up-text").addClass("active");
    	$(".sign-in-form").hide();
    	$(".sign-up-form").show();
    });    

    $(".sign-in-text").click(function(){
    	$(".sign-up-wrapper .tabs a").removeClass("active");
    	$(this).addClass("active");
    	$(".sign-up-form,.otp-form").hide();
    	$(".sign-in-form").show();
    });

    $(".sign-up-form .link").click(function(){
    	$(".sign-up-wrapper .tabs a").removeClass("active");
    	$(".sign-in-text").addClass("active");
    	$(".sign-up-form").hide();
    	$(".sign-in-form").show();
    });

    $(".sign-in-button").click(function(){
    	$(".sign-up-wrapper .tabs a").removeClass("active");
    	$(".sign-up-form,.sign-in-form").hide();
    	$(".otp-form").show();
    });

    $(".tab-automatic").click(function(e){
    	e.stopPropagation();
    	$(".tab-manual").removeClass("active");
    	$(this).addClass("active");
    	$(".tab-manual-content").hide();
    	$(".automatic-block").show();
    });

    $(".tab-manual").click(function(e){
    	e.stopPropagation();
    	$(".tab-automatic").removeClass("active");
    	$(this).addClass("active");
    	$(".tab-manual-content").hide();
    	$(".manual-block").show();
    });

    $(".fair-estimate a").click(function(){
    	$(".inner-form-wrapper,.main-banner .form-wrapper").hide();
    	$(".fare-estimate,.fare-estimate .form-wrapper").show();
    });

    $(".fare-close").click(function(){
    	$(".fare-estimate,.fare-estimate .form-wrapper").hide();
    	$(".inner-form-wrapper,.main-banner .form-wrapper").show();
    });

    $(".form-wrapper .tabs a").click(function(){
    	$(".form-wrapper .tabs a").removeClass("active");
    	$(this).addClass("active");
    	var activeDiv = "."+$(this).attr('rel')+"-form";
    	$(".form-all").hide();
    	$(activeDiv).show();
    });

});

/*function animateValue(id, start, end, duration) {
    var start= 0 ;
    var end = parseInt(document.getElementById(id).textContent, 10);
    var duration = 500;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}*/