//API query url
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "city-input" + "country-input" + "&appid=2278d7ef6a3b88793ffca205108a944e";

// on-click event triggers AJAX call
$("#find-location").on("click", function (e) {
  e.preventDefault();


  // API query url
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=2278d7ef6a3b88793ffca205108a944e";



  // AJAX call
  // create table rows
  // put data into table
  // weather icons for current conditions
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var tRow = $("<tr>");
    var cityTd = $("<td>").text(response.name);
    var currTd = $("<td>").text(response.weather.icon);
    var tempTd = $("<td>").text(response.main.temp);
    var humTd = $("<td>").text(response.main.humidity);
    var windTd = $("<td>").text(response.wind.speed);
    // var uvTd = $("<td>").text(response.);

    // add data to table row
    tRow.prepend(cityTd, currTd, tempTd, humTd, windTd, uvTd)

    // add table row to table body
    $("tbody").append(tRow);
  });
});