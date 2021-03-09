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
  //constant semantic error
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&appid=f467738ba5027fc3bee62c611bd30bce&units=imperial",
        method: "GET",
    }).then(function (data) {
        console.log(data);
        $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");

        for (var i = 0; i < data.list.length; i++) {

            if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {

                var titleFive = $("<h3>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
                var imgFive = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");

                var colFive = $("<div>").addClass("col-md-2");
                var cardFive = $("<div>").addClass("card bg-primary text-white");
                var cardBodyFive = $("<div>").addClass("card-body p-2");
                var tempFive = $("<p>").addClass("card-text").text("Temperature: " + data.list[i].main.temp + " °F");

                
                colFive.append(cardFive.append(cardBodyFive.append(titleFive, imgFive, tempFive)));
                $("#forecast .row").append(colFive);
            }
        }
    });
}
});