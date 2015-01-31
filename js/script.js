var playerData; 

$(document).ready(function() {
    getData();
}); 

function getData() {
	$.getJSON("js/baseballcard.json", function(data, error) { 
		playerData = data;
		drawStuff(); 
	});
}

function drawStuff() {

	var playerName = playerData.name;
	var playerTeam = playerData.club; 
	var playerStats = playerData.stats;
	var firstSeasonIndex = playerStats.length -10; 

	var firstSeasonStats = playerData.stats[firstSeasonIndex];
	var firstSeasonStolenBases = firstSeasonStats.SB;
	var firstSeasonYear = firstSeasonStats.year;
	var firstSeasonTeam = firstSeasonStats.club;

	$(".chart").append("<h1>"+playerName+"</h1>");
	$(".chart").append("<h3>"+playerTeam+"</h3>");
	$(".chart").append("<p>During "+firstSeasonYear+", "+playerName+" stole "+firstSeasonStolenBases+" bases for the "+firstSeasonTeam+" ... lol.");

}





