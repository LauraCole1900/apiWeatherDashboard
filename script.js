//API query url
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "city-input" + "country-input" + "&appid=2278d7ef6a3b88793ffca205108a944e";

// on-click event triggers AJAX call
$("#find-location").on("click", function (e) {
  e.preventDefault();


  // API query url
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,England&appid=2278d7ef6a3b88793ffca205108a944e";



  // AJAX call
  // create table rows
  // put data into table
  // weather icons for current conditions
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  console.log(response);
  // .then(function (response) {
  //   var tRow = $("<tr>");
  //   var cityTd = $("<td>").text(response.name);
  //   var windDiv = $(".wind").text("Wind direction = " + response.wind.deg + " Wind speed = " + response.wind.speed);
  //   var humidityDiv = $(".humidity").text(response.main.humidity);
  //   var tempK = response.main.temp;
  //   var tempF = (parseFloat(tempK) - 273.15) * 1.80 + 32;
  //   var tempDiv = $(".temp").text(tempF);
  // })
})