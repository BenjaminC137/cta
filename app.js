

getRoutes();

function getRoutes(){
	var ctaRoutesAPI = 	"http://www.ctabustracker.com/bustime/api/v2/getroutes?key=nPdrgPPcDVkVQxiySZichRMHS&format=json"

	$.getJSON(ctaRoutesAPI, (jsonData) => {

//		var currentRoutes = jsonData.query.results.channel.description;});
		console.log(jasonData);
}




}

function getPredictions(){
	http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=nPdrgPPcDVkVQxiySZichRMHS&format=json
}
