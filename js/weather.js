/*
*   Sample Request Header
*
*   GET https://social.yahooapis.com/v1/user/abcdef123/profile?format=json
*   Authorization: Bearer aXJUKynsTUXLVY
*/

/*
  var callbackFunction = function(data) {
    var wind = data.query.results.channel.wind;
    alert(wind.chill);
  };

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://weather.yahooapis.com/forecastrss?w=2457170", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        console.log(readBody(xhr));
    }
}
xhr.send();

<script src="https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text='chicago, il')&format=json&callback=callbackFunction"></script>
*/

var display = document.getElementById("weather-container");

display.innerHTML += "BooYaaaa";