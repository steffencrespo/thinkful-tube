const API_KEY = 'AIzaSyA4oC_zsoNlR64H2XnHQUDK7YBw5GDwFKU';
const ENDPOINT_URL = 'https://www.googleapis.com/youtube/v3/search';

function handleForm() {
	printVideoList();
	$('#search-subject').on('submit', function(event) {
		event.preventDefault();
		alert(handleYoutubeSearch('leo', null));
	});
}

function handleYoutubeSearch(searchTerm, callBack) {
	const settings = {
		url: ENDPOINT_URL,
		data: {
			part: 'snippet',
			q: `${searchTerm}`,
			key: API_KEY
		},
		datatype: 'json',
		type: 'GET'
	};
	$.ajax(settings);
}

function getDataFromApi(searchTerm, callback) {
  const query = {
  	key: API_KEY,
    q: `${searchTerm}`,
    part: 'snippet'
  }
  $.getJSON(ENDPOINT_URL, query, callback);
}

function printVideoList() {
	let html = '';
	const videos = 
		[{
			title: "one"},
		{
			title: "two"
		}];

	for (let i = 0; i < videos.length; i++) {
		$('#js-videos-list').append(`<div id='video-item'><p>${videos[i].title}</p></div>`);
	}
}

$(handleForm());