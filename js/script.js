var playerData; 

$(document).ready(function() {
    getData();
}); 

function getData() {
	$.getJSON("js/baseballcard.json", function(data, error) { 
		playerData = data;
		drawChart(); 
	});
}


function drawChart() {
	$(".playerName").html(playerData.name);

	$.each(playerData.stats, function(i, item) {
		var width = item.HR * 10;
		$(".chart").append(
			"<div class='col-md-12 bar-container'>"+
			"<div class='year'>"+item.year+"</div>"+
			"<div class='bar' style='width: "+width+"px'></div>"+
			"<div class='total'>"+item.HR+"</div>"+
		"</div>"
)})}






