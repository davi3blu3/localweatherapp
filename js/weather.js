

// DECLARE DOM VARIABLES
var date = document.getElementById("date");
var temp = document.getElementById("temp");
var condition = document.getElementById("condition");
var weatherImage = document.getElementById("weather-image")

/* XML REQUEST TO YAHOO WEATHER YQL
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='nashville, tn')&format=json", true);

// deleted from end of url &callback=callbackFunction

xhr.send();

date.innerHTML = xhr.responseText;
condition.innerHTML = xhr.response;

/*
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        temp.innerHTML = "function triggered";
    } else {
        temp.innerHTML = "failed";
    }
}
*/
// is function needed inside ready state change func?
var callbackFunction = function(data) {
    var dateResponse = data.query.results.channel.item.condition.date;
    var tempResponse = data.query.results.channel.item.condition.temp;
    var conditionResponse = data.query.results.channel.item.condition.text;
    var weatherDescription = data.query.results.channel.item.description;
        var imgBegin = weatherDescription.indexOf('<img');
        var imgEnd = weatherDescription.indexOf('>');
        var imageResponse = weatherDescription.substring(imgBegin, imgEnd+1);
    alert(imageResponse);
    date.innerHTML = dateResponse;
    temp.innerHTML = tempResponse;
    condition.innerHTML = conditionResponse;
    weatherImage.innerHTML = imageResponse; // changed variable
};

/*
{"query":
  {"count":1,
   "created":"2016-03-04T19:27:23Z",
   "lang":"en-us",
   "results":
     {"channel":
       {"title":"Yahoo! Weather - Nashville,TN",
        "link":"http://us.rd.yahoo.com/dailynews/rss/weather/Nashville__TN/*http://weather.yahoo.com/forecast/USTN0357_f.html",
        "description":"Yahoo! Weather for Nashville, TN",
        "language":"en-us",
        "lastBuildDate":"Fri, 04 Mar 2016 12:53 pm CST",
        "ttl":"60",
        "location":
            {"city":"Nashville","country":"United States","region":"TN"},
        "units":
            {"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},
        "wind":
            {"chill":"45","direction":"40","speed":"6"},
        "atmosphere":
            {"humidity":"68","pressure":"30.17","rising":"2","visibility":"10"},
        "astronomy":
            {"sunrise":"6:12 am","sunset":"5:45 pm"},
        "image":
            {"title":"Yahoo! Weather",
            "width":"142",
            "height":"18",
            "link":"http://weather.yahoo.com",
            "url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},
        "item":
            {"title":"Conditions for Nashville, TN at 12:53 pm CST",
            "lat":"36.17",
            "long":"-86.78",
            "link":"http://us.rd.yahoo.com/dailynews/rss/weather/Nashville__TN/*http://weather.yahoo.com/forecast/USTN0357_f.html",
            "pubDate":"Fri, 04 Mar 2016 12:53 pm CST",
            "condition":
                {"code":"26",
                "date":"Fri, 04 Mar 2016 12:53 pm CST",
                "temp":"48",
                "text":"Cloudy"},
            "description":"\n<img src=\"http://l.yimg.com/a/i/us/we/52/26.gif\"/><br />\n<b>Current Conditions:</b><br />\nCloudy, 48 F<BR />\n<BR /><b>Forecast:</b><BR />\nFri - Cloudy. High: 49 Low: 35<br />\nSat - Partly Cloudy. High: 63 Low: 33<br />\nSun - Mostly Sunny. High: 63 Low: 46<br />\nMon - AM Clouds/PM Sun. High: 69 Low: 54<br />\nTue - AM Clouds/PM Sun. High: 72 Low: 58<br />\n<br />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Nashville__TN/*http://weather.yahoo.com/forecast/USTN0357_f.html\">Full Forecast at Yahoo! Weather</a><BR/><BR/>\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)<br/>\n",
            "forecast":
                [{"code":"26","date":"4 Mar 2016","day":"Fri","high":"49","low":"35","text":"Cloudy"},{"code":"30","date":"5 Mar 2016","day":"Sat","high":"63","low":"33","text":"Partly Cloudy"},{"code":"34","date":"6 Mar 2016","day":"Sun","high":"63","low":"46","text":"Mostly Sunny"},{"code":"30","date":"7 Mar 2016","day":"Mon","high":"69","low":"54","text":"AM Clouds/PM Sun"},
                {"code":"30","date":"8 Mar 2016","day":"Tue","high":"72","low":"58","text":"AM Clouds/PM Sun"}],
            "guid":
                {"isPermaLink":"false","content":"USTN0357_2016_03_08_7_00_CST"}}}}}}

*/