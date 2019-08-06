$(document).ready(() => {
	$('article').on('click', event => {
		$(event.currentTarget).child('.info').show();
	})

	$('.footer').on('mouseenter', event => {
		$(event.currentTarget).child('.foot-text').removeClass('hide');
	})

	$('.footer').on('mouseleave', event => {
		$(event.currentTarget).child('.foot-text').addClasss('hide');
	})

})