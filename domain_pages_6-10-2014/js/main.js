var navigation_pos = function() {
	if ( $(document).scrollLeft() == 0 ) {
		$('.navigation, .header_main').css({'left':'0','marginLeft':'0'})
	} 
	$(document).scroll(
	function(){
		if ($(window).scrollTop() > 500 ) {		
			$('.header_main').css({'position':'fixed','top':0});
			$('.navigation').slideDown(500);
			$('.navigation').css({'position':'fixed','top':68});
			if ( $(document).width() <= 1000 ) {
				if (!$(document).scrollLeft() == 0 ) {
					$('.navigation, .header_main').css({'left': -$(document).scrollLeft(),'marginLeft':'0'})
				} else {
					$('.navigation, .header_main').css({'left':'0','marginLeft':'0'})
				}
			}
		}
		else {
			$('.navigation').hide(700);
			$('.header_main').css({'position':'static'});
		}
	});
};
$(function () {
	navigation_pos();
	$('.add_form').click(function(e) {
		e.preventDefault();
		$(this).hide();
		$(this).next().show();
	});
	
	$('.Show_hide_button').click(function(e) {
		e.preventDefault();
		if ($(this).closest('tr').next().find('.-n-whois-info').hasClass('active')) {
		$(this).html('show whois');
		$(this).closest('tr').next().find('.-n-whois-info').fadeOut().removeClass('active');
		}
		else {
		$(this).html('hide whois');
		$(this).closest('tr').next().find('.-n-whois-info').addClass('active').fadeIn(500);
		$(this).closest('tr').next().find('.whois_info').jScrollPane({scrollbarWidth:18, mouseWheelSpeed: 30});
		}
	});
	
});
$(window).resize(function(){
navigation_pos();	
});
$(window).load(function(){	
	$('.table-dns-inner, .whois_info').jScrollPane({scrollbarWidth:18, mouseWheelSpeed: 30})
});