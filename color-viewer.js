var main = function() {
	$('#view').click(function() {
		var hex = $('#color').val();
		$('<div>').text(hex).prependTo('.swatches');
		$('#color').val('');
	});
};

$(document).ready(main);