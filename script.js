//function getResults(resultObj) {}
// weather api :  https://api.weather.gov/points/39.7456,-97.0892

$(document).ready(function () {
    $("#search-button").on("click", function () {
        var searchTerm = $("#search-value").val();
        $("#search-value").val("");
        weatherFunction(searchTerm);
        weatherForecast(searchTerm);
    });

function weatherFunction(searchTerm) {
    
    $.ajax({
        type: "GET",
        url: "api.openweathermap.org/data/2.5/weather?q={city name}&appid={f467738ba5027fc3bee62c611bd30bce}",