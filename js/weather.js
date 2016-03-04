/*
*   Sample Request Header
*
*   GET https://social.yahooapis.com/v1/user/abcdef123/profile?format=json
*   Authorization: Bearer aXJUKynsTUXLVY
*/

/*


var display = document.getElementById("weather-container");
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://weather.yahooapis.com/forecastrss?w=2457170", true, consumerKey);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        display.innerHTML = readBody(xhr);
    }
}
xhr.send();

*/

var display = document.getElementById("weather-container");
var callbackFunction = function(data) {
    var data = JSON.stringify(data);
    display.innerHTML = data;
};


