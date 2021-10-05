# Weather Dashboard

## Table of Contents

* [Description](#description)
* [Links](#links)
* [Screenshots](#screenshots)
* [Installation Instructions](#installation-instructions)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Tests](#tests)
* [Credits](#credits)
* [Contributing](#contributing)
* [Questions](#questions)
* [Badges](#badges)

## Description

This is a weather dashboard using the third-party API from OpenWeather. The user will search a city using the provided text-box. They will then be presented with the name of the city, current date and time for that city, a five-day forecast, and the current conditions for that city. The name of the city will also appear in a button to the left of the forecast, under "History," which the user can click on to repeat the search of that city. Upon searching for a new city, the forecast and date/time will change to the new city; the newest search will display at the top of the current conditions, with previous searches moving down; and a button with the new city will appear in the "history" section. At any time, the user may revisit the forecast for a previous search by clicking on the name of that city in the "current conditions" portion of the page or the "history" portion pf the page. Upon reloading the page, the user's most recent search will appear in the "forecast" portion of the page and their search history will load as clickable buttons in the "history" portion of the page.

Forecast conditions include date, weather, high and low temperatures in Fahrenheit, relative humidity, and wind speed in mph. Current conditions include current weather, temperature in Fahrenheit, relative humidity, wind in mph, and UV index with risk level indicated by color.

## Links

[Weather Dashboard](https://lauracole1900.github.io/apiWeatherDashboard/)

## Screenshots

Blank dashboard:
![Dashboard](assets/dashboard-blank.png)

Dashboard with cities entered:
![Dashboard with search history](assets/dashboard-searched.png)

User input form:
![User input form](assets/dashboard-user-input.png)

Clickable buttons to repeat a search:

<img src="assets/dashboard-history-buttons.png" alt="City buttons" width="90px">

Dashboard with a search repeated from clicking one of the city buttons:
![Dashboard history search](assets/dashboard-history-forecast.png)

Dashboard upon reload:
![Dashboard on reload](assets/dashboard-reload.png)

## Installation Instructions

If you want to run a copy of this app on your local machine, first clone the repository:

HTTPS:
```
$ git clone https://github.com/LauraCole1900/apiWeatherDashboard.git
```

SSH:
```
$ git clone git@github.com:LauraCole1900/apiWeatherDashboard.git
```

Then cd into the directory into which you cloned, right-click on index.html, and choose "Open in default browser."

## Usage

This project is intended to be used to allow the user to see forecast and current weather conditions in cities around the globe.

## Technologies Used

[![HTML5](https://img.shields.io/badge/built%20with-HTML5-f06529)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) [![CSS3](https://img.shields.io/badge/built%20with-CSS3-2965f1)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![jQuery](https://img.shields.io/badge/built%20with-jQuery-0769ad)](https://jquery.com/) [![Bootstrap](https://img.shields.io/badge/built%20with-Bootstrap-563d7c)](https://getbootstrap.com/) [![Day.js](https://img.shields.io/badge/built%20with-Day.js-dd6655)](https://day.js.org/) [![OpenWeather API](https://img.shields.io/badge/built%20with-OpenWeather-cd7354)](https://openweathermap.org/) [![Local Storage](https://img.shields.io/badge/built%20with-local%20storage-e34c26)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
## Tests

npm run test

## Credits

Weather icons in the header created by Joey Yakimowich-Payne, licensed under Creative Commons (http://creativecommons.org/licenses/by/3.0/)

OpenWeather's products and services licensed under Creative Commons Attribution-ShareAlike 4.0 International licence (https://creativecommons.org/licenses/by-sa/4.0/), and the data and database are licensed under the Open Data Commons Open Database License (https://opendatacommons.org/licenses/odbl/).

Bootstrap, jQuery, and Dayjs are licensed under MIT.

## Contributing

N/A

## Questions

If you have further questions, you can reach me at lauracole1900@comcast.net. For more of my work, see [my GitHub](https://github.com/LauraCole1900).

## Badges

![License badge](https://img.shields.io/badge/license-MIT-189bff) [![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/LauraCole1900/apiWeatherDashboard)