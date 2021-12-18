window.jQuery = window.$ = jQuery;


/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	jQuery('#loader .bar').animate({
		width : '100%'
	}, 700, function(){
		jQuery('#loader').fadeOut(function(){
			jQuery('#page').animate({'opacity' : '1'},500);
		});
	});
});



/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.main_menu').find('.scroll_btn a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top );
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	});
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.main_menu li')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	});
};

jQuery(document).ready(function() {
	//MobileMenu
	if ($(window).width() < 768){
		jQuery('.main_menu').prepend('<a href="javascript:void(0)" class="menu_toggler"><i class="fa fa-bars"></i></a>');
		jQuery('header .main_menu ul').hide();
		jQuery('.menu_toggler, .main_menu ul li a').click(function(){
			jQuery('header .main_menu ul').slideToggle(300);
		});
	}
	
	$(window).scroll(function(event) {
		calculateScroll();
	});
	$('.main_menu ul li.scroll_btn a, .mobile_menu ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 55}, 1000);
		return false;
	});
	
	
	//Fixed Menu
	var fixed_menu = true;

	if (jQuery('header').size() && fixed_menu == true) {
		setInterval(scrolled_menu, 0);
	}
	
});

function scrolled_menu() {
	if (jQuery(window).scrollTop()) {
		jQuery('header').addClass('menu_fixed');
	} else {
		jQuery('header').removeClass('menu_fixed');
	}
};



/*-----------------------------------------------------------------------------------*/
/*	FLEXSLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	//Top Slider
	$('.flexslider.top_slider').flexslider({
		animation: "fade",
		slideshowSpeed: 4000,
		controlNav: false,
		directionNav: false,
		pauseOnAction: false,
		pauseOnHover: false,
		prevText: "",
		nextText: ""
	});
	
	
	$('.flexslider .flex-direction-nav a.flex-prev').prepend('<i class="fa fa-angle-left"></i>');
	$('.flexslider .flex-direction-nav a.flex-next').prepend('<i class="fa fa-angle-right"></i>');
	
});




/*-----------------------------------------------------------------------------------*/
/*	Home Height
/*-----------------------------------------------------------------------------------*/
jQuery(window).resize(function(){
	homeHeight();
	
});

jQuery(document).ready(function(){
	homeHeight();
});

function homeHeight(){
	var wh = jQuery(window).height();
	jQuery('#home, .top_slider, .top_slider .slides li, #home .container').css('height', wh);

}



/*-----------------------------------------------------------------------------------*/
/*	PRETTYPHOTO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
});


/*-----------------------------------------------------------------------------------*/
/*	FLICKR
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=128950171@N02&lang=en-us&format=json&jsoncallback=?", function(data){
		$.each(data.items, function(i,item){
			if(i<=5){ // <— change this number to display more or less images
				$("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul")
				.wrap("<li><a href='" + item.link + "' target='_blank' title='Flickr'></a></li>");
			}
		});			
	});
});



/*-----------------------------------------------------------------------------------*/
/*	Twitter
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {	
	jQuery('#twitter_block .twitter_wrap').tweet({
		modpath: 'twitter/',
		count: 1,
		username : 'IceTemplates'
	});
});





/*-----------------------------------------------------------------------------------*/
/*	PARRALAX
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function() {
	if (jQuery(window).width() > 1025){
		setTimeout(function() {
			jQuery('.flexslider.top_slider .slides li').parallax("50%", -0.5);
			jQuery('#testimonials').parallax("50%", -0.5);
			jQuery('#twitter_block').parallax("50%", -0.5);
		}, 500);
	}
});




