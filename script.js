//API query url
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "city-input" + "country-input" + "&appid=2278d7ef6a3b88793ffca205108a944e";

// on-click event triggers AJAX call
$("#find-location").on("click", function (e) {
  e.preventDefault();


  // API query url
  var city = $("#city").val();
  callForecast(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=2278d7ef6a3b88793ffca205108a944e";

  var tRow = $("<tr>");


  // AJAX call
  // create table rows
  // put data into table
  // use weather icons for current conditions
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var cityTd = $("<td>").text(response.name);
    var weatherIcon = $("<img>").attr("src", `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`)
    var currTd = $("<td>").append(weatherIcon);
    var tempTd = $("<td>").text(response.main.temp);
    var humTd = $("<td>").text(response.main.humidity);
    var windTd = $("<td>").text(response.wind.speed);
    tRow.append(cityTd, currTd, tempTd, humTd, windTd)
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    setTimeout(function () {
      getUv(lat, lon)
    }, 100)
  })

  function getUv(lat, lon) {
    var uvData = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=2278d7ef6a3b88793ffca205108a944e";

    $.ajax({
      url: uvData,
      method: "GET"
    }).then(function (response) {
      var uvTd = $("<td>").text(response.value);
      tRow.append(uvTd)
      if (response.value <= 2) {
        uvTd.addClass("low")
      } else if (response.value > 2 && response.value <= 5) {
        uvTd.addClass("moderate")
      } else if (response.value > 6 && response.value <= 7) {
        uvTd.addClass("high")
      } else if (response.value > 7 && response.value <= 10) {
        uvTd.addClass("very_high")
      } else if (response.value > 10) {
        uvTd.addClass("extreme")
      }

    })
  }

  // add table row to table body
  $("tbody").prepend(tRow);
});


function callForecast(city) {
  var forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=2278d7ef6a3b88793ffca205108a944e`;

  $.ajax({
    url: forecast,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  })
  // for loop, i+8
}

// uv index 0-2 = low, 3-5 = moderate, 6-7 = high, 8-10 = very high, 11+ = extreme