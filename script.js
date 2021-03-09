//function getResults(resultObj) {}
// weather api :  https://api.weather.gov/points/39.7456,-97.0892

$(document).ready(function () {
    $("#search-button").on("click", function () {
        var searchTerm = $("#search-value").val();
        $("#search-value").val("");
        weatherFunction(searchTerm);
        weatherForecast(searchTerm);
    });

var history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length > 0) {
        weatherFunction(history[history.length - 1]);
    }
    for (var i = 0; i < history.length; i++) {
        createRow(history[i]);
    }

    function createRow(text) {
        var listItem = $("<li>").addClass("list-group-item").text(text);
        $(".history").append(listItem);
    }
    
    $(".history").on("click", "li", function () {
        weatherFunction($(this).text());
        weatherForecast($(this).text());
    });

    function weatherFunction(searchTerm) {
  
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&appid=f467738ba5027fc3bee62c611bd30bce&units=imperial",
        method: "GET",
    }).then(function (data) {
        console.log(data);
        $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");
