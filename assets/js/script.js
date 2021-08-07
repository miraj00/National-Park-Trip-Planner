//Global Variable for Weather Info Container
var forecastContainerEl = $("#hourForecast");

//Local Storage Setup
var savedParks = JSON.parse(localStorage.getItem("savedHistory")) || [];
var parkContainer = $("#parks");

//Functions to be ready on page load
$(document).ready(function () {
    //inititiating Materialize Select
    $('select').formSelect();
    //Dynamic/Dependent Dropdowns
    $("#stateS").change(function () {
        var val = $(this).val();
        if (val == "az") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='grca'>Grand Canyon</option><option value='pefo'>Petrified Forest National Park</option><option value='sagu'>Saguaro National Park</option>");
        } else if (val == "cal") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='chis'>Channel Islands National Park</option><option value='deva'>Death Valley National Park</option><option value='jotr'>Joshua Tree National Park<option value='lavo'>Lassen Volcanic National Park</option><option value='pinn'>Pinnacles National Park</option><option value='redw'>Redwood National Park</option><option value='seki'>Sequoia and Kings Canyon National Park</option><option value='yose'>Yosemite National Park</option>");
        } else if (val == "hi") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='hale'>Haleakala National Park</option><option value='havo'>Hawai’i Volcanoes National Park</option>");
        } else if (val == "mt") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='glac'>Glacier National Park</option><option value='yell'>Yellowstone National Park</option>");
        } else if (val == "nv") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='deva'>Death Valley National Park</option><option value='grba'>Great Basin National Park</option>");
        } else if (val == "nm") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='cave'>Carlsbad Caverns National Park</option><option value='whsa'>White Sands National Park</option>");
        } else if (val == "ut") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='arch'>Arches National Park</option><option value='brca'>Bryce Canyon National Park</option><option value='cany'>Canyonlands National Park</option><option value='care'>Capitol Reef National Park</option><option value='zion'>Zion National Park</option>");
        } else if (val == "0") {
            $("#mySelect").html("<option value=''>Select Park</option>");
        }
        $('#mySelect').formSelect()
    });

    $("#mySelect").change(function () {
        var parkCode = $(this).val();
        init(parkCode);
        displayParks();
    });
    // Materialize Carouse
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    //Backstretch Plugin
    $.backstretch("./assets/images/pic2.JPEG");

});

//Functions for Localstorage / Search History
displayParks();

function displayParks() {
    parkContainer.children().remove();

    for (var i = 0; i < savedParks.length; i++) {
        var parkButton = $("<button></button>");
        $(parkButton).val(savedParks[i].parkCode);
        //set text for the button
        parkButton.attr("type", "button");
        parkButton.addClass("btnCode waves-effect waves-light btn");

        parkButton.html(savedParks[i].parkName);
        parkButton.appendTo(parkContainer);  
    }

}
// Display Park And Weather Info When Click Search History Button
$(document).on("click", ".btnCode",function(){
    var btnVal = $(this).val();
    console.log(btnVal);
    init(btnVal);
    
})
function addPark(parkCode) {
    var checkStore = true;
      //check for parkName already in storage
      for(var i=0; i<savedParks.length; i++){
        if(savedParks[i].parkCode == parkCode){
            checkStore = false;
        }
    }
    if(checkStore){
        savedParks = JSON.parse(localStorage.getItem("savedHistory")) || [];
        //create object 
        var parkObject = {};
        var searched =savedParks.indexOf(parkObject);
        parkObject.parkName = $("#parkInfo").text();
        console.log($("#parkInfo").text());
        parkObject.parkCode = parkCode;
        if(savedParks.length < 25){
            savedParks.push(parkObject);
        
        // console.log(savedPark);
        localStorage.setItem("savedHistory", JSON.stringify(savedParks));
        }
    }
}

// Function For Fetching Park Info
function init(parkCode) {
    if (parkCode == '0' || parkCode == undefined) {
        return;

    }
    // console.log(parkCode);
    //----------------------------------------API  to pull Park Information -----------------------------------------------------------------

    var parkAPI = "https://developer.nps.gov/api/v1/parks?parkCode="
        + parkCode
        + "&api_key=KFp4bdWCgYMu7u8w5g1O3dmwGFoJEp9PQcpINgdf";


    fetch(parkAPI).then(function (response) {
        response.json().then(function (data1) {
            

            document.getElementById("parkInfo").innerHTML = data1.data[0].fullName;
            addPark(parkCode);
            displayParks();
            document.getElementById("address").innerHTML = "Address :  [ " + data1.data[0].addresses[0].line2 + " ] " + data1.data[0].addresses[0].line1 + ", " + data1.data[0].addresses[0].city + ", " + data1.data[0].addresses[0].stateCode + " - " + data1.data[0].addresses[0].postalCode;
            document.getElementById("phNo").innerHTML = "Phone No :  " + data1.data[0].contacts.phoneNumbers[0].phoneNumber;
            document.getElementById("description").innerHTML = "Description : " + data1.data[0].description;
            document.getElementById("allotherfees").innerHTML = " -        $ " + data1.data[0].entranceFees[0].cost + " for non-commercial vehicle (15 passenger capacity or less) and all occupants ";
            document.getElementById("motorcyclefees").innerHTML = " -        $ " + data1.data[0].entranceFees[1].cost + " for non-commercial motorcycle ";
            document.getElementById("pedfees").innerHTML = " -       $ " + data1.data[0].entranceFees[2].cost + " for  bicyclist, hiker, pedestrian ";


            var zip = data1.data[0].addresses[0].postalCode;
            zip=zip.substring(0,5);
            //console.log("zip " + zip);
            weatherAPI(zip);
        })
    })
}
//Function For Displaying Weather Info
function weatherAPI(zip) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?zip="
        + zip
        + ",us&appid=eec3413a16d43f5e64f5215a7760f24b"
        + "&units=imperial")

        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            getWeatherForecast(response);

        })
};

function getWeatherForecast(weatherData) {

    forecastContainerEl.empty();

    console.log(weatherData);

    for (i = 0; i <= 15; i++) {

        //48 hours weather forecast for every 3 hours= 15 iterations

        var hourdiv = $("<div></div>");

        var divUl = $("<ul></ul>");

        var iconLi = $("<li class='btn-floating btn-medium pulse'></li>");

        hourdiv.append(divUl);

        hourdiv.addClass("col s1 m6 l12 grey lighten-4");

        //create time elements

        divUl.append("<li id='time'>" + dayjs.unix(weatherData.list[i].dt).format('DD.MM.YYYY hh:mm a') + " </li>");

        divUl.append(iconLi);

        //Create icon class 

        var icon = $("<img/>");

        iconLi.append(icon);

        // icon.addClass("btn-floating btn-medium pulse");
        icon.attr("src", "https://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png");

        //This is to add weather icon description

        divUl.append("<li id='iconText' class='capitalize'>" + weatherData.list[i].weather[0].description + "</li>");

        //Temp
        divUl.append("<li id='temp'>Temperature: " + weatherData.list[i].main.temp + "&#176;F</li>");

        //Creating content for WindSpeed
        divUl.append("<li id='windSpeed'>" + "Wind: " + weatherData.list[i].wind.speed + " MPH</li>");

        // //Create content for windSpeed

        divUl.append("<li id='windDeg'>" + "Wind Direction: " + weatherData.list[i].wind.deg + "&#176;" + "</li>");

        forecastContainerEl.append(hourdiv);

    }
}







