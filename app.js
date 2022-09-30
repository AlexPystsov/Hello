const get_api_res_btn = document.getElementById('get_api_res_btn');
const api_result1 = document.getElementById('api_result1');
const api_result2 = document.getElementById('api_result2');
get_api_res_btn.addEventListener('click', getAPI);


let endPoint = 'http://api.open-notify.org/iss-now.json';

    function getAPI(){
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        api_result1.innerHTML=data.iss_position.longitude;
        api_result2.innerHTML=data.iss_position.latitude;
        
    });
}
