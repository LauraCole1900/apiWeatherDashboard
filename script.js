$(document).ready(function () {

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
    // create table row
    // create table cells
    // put city, current cond, temp, humidity, wind data into table cells
    // use weather icons for current conditions
    // append table cells to table row
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var cityButton = $("<button>").text(response.name);
      var cityTd = $("<td>").append(cityButton);
      var weatherIcon = $("<img>").attr("src", `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`).addClass("wIcon")
      var currTd = $("<td>").text(response.weather[0].description).append(weatherIcon);
      var tempTd = $("<td>").text(response.main.temp);
      var humTd = $("<td>").text(response.main.humidity);
      var windTd = $("<td>").text(response.wind.speed);
      tRow.append(cityTd, currTd, tempTd, humTd, windTd)
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      setTimeout(function () {
        getUv(lat, lon)
      }, 25)
    })

    // get UVI data
    // append UVI data to table row
    function getUv(lat, lon) {
      var uvData = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=2278d7ef6a3b88793ffca205108a944e";

      $.ajax({
        url: uvData,
        method: "GET"
      }).then(function (response) {
        var uvTd = $("<td>").text(response.value).attr("id", "uvi");
        tRow.append(uvTd)
        if (response.value < 3) {
          uvTd.addClass("low")
        } else if (response.value >= 3 && response.value < 6) {
          uvTd.addClass("moderate")
        } else if (response.value >= 6 && response.value < 8) {
          uvTd.addClass("high")
        } else if (response.value >= 8 && response.value < 11) {
          uvTd.addClass("very_high")
        } else if (response.value >= 11) {
          uvTd.addClass("extreme")
        }
      });
    }

    // add table row to table body
    $("tbody").prepend(tRow);
  });


  // call forecast data
  // append forecast data to table cells
  function callForecast(city) {
    var forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=2278d7ef6a3b88793ffca205108a944e`;

    $.ajax({
      url: forecast,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var cityName = $("<h2>").text(response.city.name).attr("id", "fCityName");

      // check if the forecast city already exists
      if ($("#fCityName").length) {
        // replace cityName
        // replace data

      } else {
        // append cityName
        // append data
        $("#forecast").append(cityName)
      }
      // for (i = 0; i < response.list.length; i + 8) {
      //   i = 7;
      //   var fDay = $("<td>").text(response.list[i].dt_txt);
      //   var fWeatherIcon = $("<img>").attr("src", `https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png`).addClass("wIcon");
      //   var fWeather = $("<td>").text(weather[0].description).append(fWeatherIcon);
      //   var fTemp = $("<td>").text(response.list[i].main.temp);
      //   var fHum = $("<td>").text(response.list[i].main.humidity);
      //   var fWind = $("<td>").text(response.list[i].wind.speed);
      //   var tfRow = $("<tr>");
      //   tfRow.append(fDay, fWeather, fTemp, fHum, fWind);
      //   $("#tableForecast").append(tfRow);
      // }

    })
    // for loop, i+8
  }

  // city buttons callForecast() for that city
});