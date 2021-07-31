
$(document).ready(function () {
    $('select').formSelect();
    
    $("#stateS").change(function () {
        var val = $(this).val();
        if (val == "ak") {
            $("#mySelect").html("<option value='opt'>Select Park</option><option value='dena'>Denali National Park</option><option value='gaar'>Gates of the Arctic National Park</option><option value='glba'>Glacier Bay National Park</option><option value='katm'>Katmai National Park</option><option value='kefj'>Kenai Fjords National Park</option><option value='kova'>Kobuk Valley National Park</option><option value='lacl'>Lake Clark National Park</option><option value='wrst'>Wrangell St Elias National Park</option>");
        } else if (val == "az") {
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
        $('#content-x').hide();
        $('#content-error').hide();
        $('#parkInfo').text('');
        init(parkCode);	
    });


});

function init(parkCode){ 
    if(parkCode=='0' || parkCode==undefined){	
        return;	
 }


//  $('#parkInfo').text('FULL NAME OF PARK : '+parkCode);
    

    //----------------------------------------API  to pull Park Information -----------------------------------------------------------------

    var parkAPI= "https://developer.nps.gov/api/v1/parks?parkCode=" 
    + parkCode 
    + "&api_key=KFp4bdWCgYMu7u8w5g1O3dmwGFoJEp9PQcpINgdf";
  

    fetch(parkAPI).then(function (response) {
        response.json().then(function (data1) {

            document.getElementById("parkInfo").innerHTML = data1.data[0].fullName;

            document.getElementById("address").innerHTML = "Address :  [ " + data1.data[0].addresses[0].line2 + " ] " + data1.data[0].addresses[0].line1 + ", " + data1.data[0].addresses[0].city + ", " + data1.data[0].addresses[0].stateCode + " - " + data1.data[0].addresses[0].postalCode;
            document.getElementById("phNo").innerHTML = "Phone No :  " + data1.data[0].contacts.phoneNumbers[0].phoneNumber;
            //document.getElementById("discription").innerHTML = "Description : " + data1.data[0].description;
            // document.getElementById("alerts").innerHTML = "Current Temp :  " + t0fixed + " *F" ; 
            document.getElementById("allotherfees").innerHTML = " -        $ " + data1.data[0].entranceFees[0].cost + " for non-commercial vehicle (15 passenger capacity or less) and all occupants ";
            document.getElementById("motorcyclefees").innerHTML = " -        $ " + data1.data[0].entranceFees[1].cost + " for non-commercial motorcycle ";
            document.getElementById("pedfees").innerHTML = " -       $ " + data1.data[0].entranceFees[2].cost + " for  bicyclist, hiker, pedestrian ";

            document.getElementById("parkLink").innerHTML = data1.data[0].url;

            var zip = data1.data[0].addresses[0].postalCode;
            //console.log("zip " + zip);
            weatherAPI(zip);

        })
    })
}
//Second API for Weather API
function weatherAPI(zip){
    fetch("https://api.openweathermap.org/data/2.5/forecast?zip=" 
    + zip 
    + ",us&appid=9d0a91c9414180869a1b366b5eca06bd"
    + "&units=imperial")

    .then(function(response){
        return response.json();
    })
    .then(function(response){
        getWeatherForecast(response);

        })
    };
//  var currentDate= new Date();
//  var year = currentDate.getFullYear();
//  var month = currentDate.getMonth();

 function getWeatherForecast(weatherData){
    forecastContainerEl.textContent="";
    for(i=0;i<=15; i++){
        //48 hours weather forecast for every 3 hours= 15 iterations
        var hourdiv = document.createElement("div");
        $(hourdiv).addClass("col s12 m8 l2");
        $(hourdiv).append("<p id='time'></p>");
        $(hourdiv).append("<p id='icon'>Time:</p>");
        $(hourdiv).append("<p id='iconText'></p>");
        $(hourdiv).append("<p id='temp'></p>");
        $(hourdiv).append("<p id='windDegree'>Wind: </p>");
         //create element for icon
        var icon=document.createElement("img");
        $(icon).attr("src", "https://openweathermap.org/img/w/" + weatherData.list[i].weather[0].icon + ".png");
        $(hourdiv).append(icon);
        


    $(forecastContainerEl).append(hourdiv);



        
    }

     
     console.log(weatherData);

 }

var forecastContainerEl = document.querySelector("#hourForecast");

// // //         // --------------------------------- At 3 hours ---------------------------------------------------------------------
                    //time div
// // //        const milliseconds = data2.list[0].dt * 1000;             // <------------------converting Unix date into readable format        
// // //         const dateObject = new Date(milliseconds);
// // //         const humanDateFormat = dateObject.toLocaleString("en-US", { timeZoneName: "short" })
// // //         document.getElementById("time0").innerHTML = humanDateFormat;  //<---------------------adding date via innerHTML 

                    //Text
// // //         document.getElementById("iconText0").innerHTML = data2.list[0].weather[0].description;

                //Need to do Temp
// // //         var v0 = (data2.list[0].main.temp) * 9 / 5;
// // //         var t0 = v0 - 459.67;
// // //         let t0fixed = t0.toFixed(2)
// // //         document.getElementById("temp0").innerHTML = "Temp :  " + t0fixed + " *F";

                    //values
// // //         document.getElementById("wind0").innerHTML = "Wind :  " + data2.list[0].wind.speed + " MPH";
// // //         document.getElementById("windDegree0").innerHTML = "Wind Direction :  " + data2.list[0].wind.deg + " degree ";

