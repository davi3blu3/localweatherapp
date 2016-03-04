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

var date = document.getElementById("date");
var temp = document.getElementById("temp");
var condition = document.getElementById("condition");
var callbackFunction = function(data) {
    var dateResponse = JSON.stringify(data.query.results.channel.item.condition.date);
    var tempResponse = JSON.stringify(data.query.results.channel.item.condition.temp);
    var conditionResponse = JSON.stringify(data.query.results.channel.item.condition.text);
    date.innerHTML += dateResponse;
    temp.innerHTML = tempResponse;
    condition.innerHTML += conditionResponse;
};


