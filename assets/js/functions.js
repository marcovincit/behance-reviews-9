$(document).ready(function() {

	$(window).load(function () {
		
		setTimeout(function(){ $('body').removeClass('load'); }, 1200);
	});
	/*

	$('#menu a').hover(function () {

		var linkHash = $(this).attr('href');
			link = linkHash.replace('#', '');

		if ($('body').attr('id') = 'inicio') {
			$('body').removeAttr('class').addClass(link+'-colors');
		}
	});

	*/


	$('#menu a').click(function () {

		$('#menu a').removeClass('current');

		$(this).addClass('current');

		var linkHash = $(this).attr('href');
			link = linkHash.replace('#', '');

		$('body').removeAttr('id').attr('id', link);
	});

	$('.avaliador').hover(function() {
		var linkHash = $(this).attr('id');
			link = '#'+linkHash+'-photo';

		$('.avaliador-photo').removeClass('in');

		$(link).addClass('in');
	}, function() {
		$('.avaliador-photo').removeClass('in');
	});

	$('.organizador').hover(function() {
		var linkHash = $(this).attr('id');
			link = '#'+linkHash+'-photo';

		$('.organizador-photo').removeClass('in');

		$(link).addClass('in');
	}, function() {
		$('.organizador-photo').removeClass('in');
	});

});