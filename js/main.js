(function($){
	'use strict';

//code start
$('h1').hide();

$('#akash').show();
//$('#akash').html('<u>Akash</u> is a good boy ');
$('.abc p').prepend('<b>Good day!</b>')
$('.abc p').append('<b>Thank You!</b>')

$('#akash').css({
	color : '#33d9b2',
	fontSize: 50
});

$('.abc').find('a').css({
	textDecoration : 'none',
	color : '#ffb142',
	fontWeight : 700
});

//$('a').parent('p').hide();

//$('.habiba').addClass('afroja');
//$('.habiba').removeClass('afroja');
$('.abc > a').on('click',function () {
	$('.habiba').addClass('afroja');
});

$('.habiba').on('click', function(){
	$('.habiba').removeClass('afroja');

});

$('.abc p a').on('click', function(){
	$('.bhag').fadeIn();
});
$('.bhag span').on('click',function(){
	$('.bhag').fadeOut();
})


//mobile-menu
/*$('.menu-icon span').on('click',function(){
	$('.main-menu').slideToggle();
});


$(window).resize(function(){
	var demo = $(window).width();
	

	if ( demo > 991 ) {
		$('.main-menu').removeAttr('style');
	}
});*/

$('.menu-icon span').on('click',function(){
	$('.mobile-menu').animate({
		right: 0
	});
});

$('.menu-close span').on('click', function(){
	$('.mobile-menu').animate({
		right: -250
	});	
})


}) (jQuery);