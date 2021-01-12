/**
 * Created by rekha on 1/12/2021.
 */

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    //  x.innerHTML = "Latitude: " + position.coords.latitude +
    //    "<br>Longitude: " + position.coords.longitude;
    //alert( "Latitude: " + position.coords.latitude);
    // $("#demo").html("Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude );
    getdata(position.coords.latitude,position.coords.longitude);
}


var output_data;
var query;

function searchdata() {
    if (query !== "") {
        // $("#newresult").html(output_data);
        alert($("#searchquery").val());
        var query = $("#searchquery").val();
        $("#searchquery").val(" ");
    }
    else {
        alert("plz enter to search ");
    }
    getdata(query);
}
//<![CDATA[

function getdata(latt,logg) {


    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?lat="+latt+ "&lon="+logg+"&appid=02db694722f4407bb5dbc01424bdb5d4",
        type: "GET",
        dataType: "json",
        success: function (weather_report) {
            console.log(weather_report);
            alert(weather_report.name);
            $("#lang").html(latt);
            $("#lat").html(logg);
            $("#placename").html(weather_report.name);
            $("#temperature").html(weather_report.weather[0].description);
            $("#wind_data").html(weather_report.wind.speed);
        }
    });
}

//]]>