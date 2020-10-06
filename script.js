$(document).ready(function () {
  dayjs.extend(window.dayjs_plugin_utc)


  // on-click event triggers AJAX call
  $("#find-location").on("click", function (e) {
    e.preventDefault();

    // set "city" variable
    var city = $("#city").val();

    // callForecast() as soon as city variable is set
    callForecast(city);

    // pass last-searched-city data into local storage
    localStorage.setItem("lastSearched", city);

    // API query URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=2278d7ef6a3b88793ffca205108a944e";

    // set table row variable
    var tRow = $("<tr>");


    // AJAX call for current conditions
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      // create city buttons
      var cityButton = $("<button>").text(response.name).addClass("cityBtn");
      var cityTd = $("<td>").append(cityButton);

      // use weather icons for current conditions
      var weatherIcon = $("<img>").attr("src", `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`).addClass("wIcon")
      var currTd = $("<td>").text(response.weather[0].description).append(weatherIcon);

      // Temperature, humidity and wind speed variables
      var tempTd = $("<td>").text(response.main.temp);
      var humTd = $("<td>").text(response.main.humidity);
      var windTd = $("<td>").text(response.wind.speed);

      // put city, current cond, temp, humidity, wind data into table cells
      tRow.append(cityTd, currTd, tempTd, humTd, windTd)

      // define latitude & longitude for UVI data
      var lat = response.coord.lat;
      var lon = response.coord.lon;

      // give API time to respond so lat & lon data populates properly
      setTimeout(function () {
        getUv(lat, lon)
      }, 15)
    })

    // Retrieve UVI
    function getUv(lat, lon) {
      var uvData = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=2278d7ef6a3b88793ffca205108a944e";

      // AJAX call for UVI
      $.ajax({
        url: uvData,
        method: "GET"
      }).then(function (response) {

        // UVI variable
        var uvTd = $("<td>").text(response.value).attr("id", "uvi");

        // put UVI into table cell 
        tRow.append(uvTd);

        // check UVI value to determine alert color, color cell background accordingly
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
    // append table row at the top of the table body
    $("tbody").prepend(tRow);
  });


  // call forecast data
  // append forecast data to table cells
  function callForecast(city) {
    var forecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&units=imperial&appid=166a433c57516f51dfab1f7edaed8413`;

    $.ajax({
      url: forecast,
      method: "GET"
    }).then(function (response) {
      // empty forecast data
      $("#tableForecast").empty();

      // set forecast city name
      var cityName = $("<h2>").text(response.city.name).attr("id", "fCityName");

      // set forecast local time
      var UTCOffset = (dayjs().utcOffset(response.city.timezone / 60).format("ddd, MMM DD, YYYY, hh:mma"));
      var lclTime = $("<h3>").text("Local date & time: " + UTCOffset);

      // check if a forecast city already exists
      if ($("#fCityName").length) {
        // replace cityName
        $("#fCityName").text(response.city.name);

        //replace local time
        $("#localTime").text("Local date & time: " + UTCOffset);

      } else {
        // append cityName
        $("#forecast").append(cityName);

        // append local time
        $("#localTime").append(lclTime);

      };
      populateForecast(response);
    });
  };


  function populateForecast(response) {
    console.log(response);
    // append data, use loop
    $(response.list).each(function (i) {
      // convert unix to MDT
      var date = new Date(response.list[i].dt * 1000);
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2,"0");
      // insert MDT dates into forecast table
      var fDay = $("<td>").text(month + "/" + day);

      var fWeatherIcon = $("<img>").attr("src", `https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png`).addClass("wIcon");

      var fWeather = $("<td>").text(response.list[i].weather[0].description).append(fWeatherIcon).attr("id", "forecastWeather");

      var fTempMax = $("<td>").text(response.list[i].temp.max);

      var fTempMin = $("<td>").text(response.list[i].temp.min);

      var fHum = $("<td>").text(response.list[i].humidity).attr("id", "forecastHumid");

      var fWind = $("<td>").text(response.list[i].speed).attr("id", "forecastWind");

      var tfRow = $("<tr>");

      tfRow.append(fDay, fWeather, fTempMax, fTempMin, fHum, fWind);
      $("#tableForecast").append(tfRow);
    });
  };


  // retrieve forecast from local storage and set as "city" variable
  if ("lastSearched" !== null) {
    var city = localStorage.getItem("lastSearched");
    callForecast(city);
  }

  // clicking city buttons callForecast() for that city
  $(document).on("click", "button", function () {
    var city = $(this).text();
    callForecast(city);
  });
});