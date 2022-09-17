const get_api_res_btn = document.getElementById('get_api_res_btn');
const searchTitleField = document.getElementById('searchTitle');
const api_result1 = document.getElementById('api_result1');

get_api_res_btn.addEventListener('click', getAPI);

function getAPI(){
	fetch(
		'http://www.omdbapi.com/?apikey=63782376&t=' + searchTitleField.value,
		{ method: 'GET' }
	)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		
		if (data.Response === 'False') {
			api_result1.style.display = 'none';
			
			return;
		}
		
		api_result1.style.display = 'block';
		api_result1.innerHTML = 'Title: ' + data.Title + '<br>Year: ' + data.Year + '<br>Director: ' + data.Director;
	});
}
