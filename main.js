$(document).ready(() => {
	$('article').on('click', event => {
		$(event.currentTarget).child('.info').show();
	})

})