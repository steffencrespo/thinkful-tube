const API_KEY = 'AIzaSyA4oC_zsoNlR64H2XnHQUDK7YBw5GDwFKU';
const ENDPOINT_URL = 'https://www.googleapis.com/youtube/v3/search';

function handleForm() {
	$('#search-subject').on('submit', function(event) {
		event.preventDefault();
		getDataFromAPI($('input').text(), printVideoList);
	});
}

function getDataFromAPI(searchTerm, callback) {
	const settings = {
		url: ENDPOINT_URL,
		data: {
			part: 'snippet',
			q: `${searchTerm}`,
			key: API_KEY
		},
		datatype: 'json',
		type: 'GET',
		success: callback
	};
	$.ajax(settings);
}

function printVideoList(data) {
	const videosList = data.items;

	for (let i = 0; i < videosList.length; i++) {
		let title = videosList[i].snippet.title;
		let description = videosList[i].snippet.description;
		let thumbnail = videosList[i].snippet.thumbnails.default.url;
		$('#js-videos-list')
			.append(`
				<section class='video-box col-3'>
					<div class='video-title'>
						<h2>${title}</h2>
					</div>
					<div class='video-item'>
						<img src='${thumbnail}'>
					</div>
				</section>`);
	}
}

$(handleForm());