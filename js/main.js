$(document).ready(function($) {
	
	$( '.open-link' ).on( 'click', function( event ) {
		event.preventDefault();
		$( this ).find( '.fa-angle-right' ).toggleClass('open');
		$( this ).siblings( '.tier-3, .tier-4, .tier-5, .tier-6' ).slideToggle(750);
		
		$( this ).closest( 'li' ).siblings().each(function(index, el) {
			$(el).children( '.tier-3, .tier-4, tier-5, .tier-6' ).slideUp(750);
			$(el).find( '.fa-angle-right' ).removeClass('open');
		});
		
		
	});

});