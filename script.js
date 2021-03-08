//function getResults(resultObj) {}
// weather api :  https://api.weather.gov/points/39.7456,-97.0892

$(document).ready(function () {
    $("#search-button").on("click", function () {
        var searchTerm = $("#search-value").val();
        $("#search-value").val("");
        weatherFunction(searchTerm);
        weatherForecast(searchTerm);
    }
})

    function weatherFunction(searchTerm) {
  
    $.ajax({
        url: "api.openweathermap.org/data/2.5/forecast?q=SanAntonio,us&mode=xml&appid={f467738ba5027fc3bee62c611bd30bce}",
        method: "GET",
    })
});
