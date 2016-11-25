


$(document).ready( function() {
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/',
		dataType: 'json',
		data: { get_param: 'value' },
		error: function (erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPlanet = document.querySelector("#DivLista");
			divPlanet.innerHTML = "";
			$.each(data.results, function(i, obj) {
				divPlanet.innerHTML += '<a href="javascript:SelPlanetas(\'' + obj.url + '\')" >' + obj.name + '</a> <br />';
			})
		}
	})
})

function SelPlanetas(Purl) {
	$.ajax({
		type: 'GET',
		url: Purl,
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) {
			alert(erro.responseText);
		},
		success: function(data) {
			var divPlaneta = document.querySelector("#InfPlanet");
			divPlaneta.innerHTML = "";
			divPlaneta.innerHTML += 
								   "<br/><br/>Nome: " + data.name + 
			                       "<br/>Periodo de Rotacao:" + data.rotation_period + 
			                       "<br/>Perioro de Orbita: " + data.orbital_period +
								   "<br/>Populacao: " + data.population + 
								   "<br/>";
	}});
}