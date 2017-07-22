function handle_form() {
	$('#search-subject').on('submit', function(event) {
		event.preventDefault();
		alert('submitted');
	});
}

$(handle_form());