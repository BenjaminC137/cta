var ctaRoutesAPI;


function getRoutes(){
	var jasonData;

	ctaRoutesAPI = "http://www.ctabustracker.com/bustime/api/v2/getroutes?key=nPdrgPPcDVkVQxiySZichRMHS&format=json";
	console.log(ctaRoutesAPI);
	$("cta").html(ctaRoutesAPI);
	
	$.get(ctaRoutesAPI, (jsonData) => {

	$("cta").html(jsonData["bustime-response"]);
		console.log(jasonData["bustime-response"]);

	});
return false;
}






//function getPredictions(){
//	http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=nPdrgPPcDVkVQxiySZichRMHS&format=json
//}
