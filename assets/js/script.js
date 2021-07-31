$(document).ready(function () {
    $('select').formSelect();
 });

 
 $('.carousel.carousel-slider').carousel({
    fullWidth: true
  
  });
      

  $.backstretch("./assets/images/pic2.JPEG");

/*
  function capture() {
  html2canvas(document.body, {
    onrendered: function(canvas)
    {
    var img = canvas.toDataURL();
    $("#result-image").attr('src', img).show();
    }
    });
  }

*/


var optionsList = document.querySelector("#mySelection");

var Nevada = [ "Death Valley National Park", "Great Basin National Park" ];
var Montana = [ "Glacier National Park", "Yellowstone National Park"];
var Hawaii = [ "Haleakala National Park", "Hawai’i Volcanoes National Park"];
var New_Mexico = ["Carlsbad Caverns National Park", "White Sands National Park"];
var Arizona = [ "Grand Canyon National Park", "Petrified Forest National Park, pefo", "Saguaro National Park, sagu"];
var Utah = [ "Arches National Park", "Bryce Canyon National Park", "Canyonlands National Park", "Capitol Reef National Park", "Zion National Park"];
var Alaska = ["Denali National Park","Gates of the Arctic National Park", "Glacier Bay National Park", "Katmai National Park", "Kenai Fjords National Park", "Kobuk Valley National Park", "Lake Clark National Park", "Wrangell St Elias National Park"];
var California = ["Channel Islands National Park", "Death Valley National Park", "Joshua Tree National Park", "Lassen Volcanic National Park", "Pinnacles National Park", "Redwood National Park", "Sequoia and Kings Canyon National Park", "Yosemite National Park"];  

function myFunction(event) {
      event.preventDefault();

      

      const element = document.getElementById("stateS");

      const checkValue = element.options[element.selectedIndex].value;
      console.log(checkValue);
      const checkText = element.options[element.selectedIndex].text;
      console.log(checkText);

      // storing selected state in local storage  ------------------------------------
      localStorage.setItem ("state", checkText);

//---------------- Query to present list of National Park upon State Selection ------------------------------------------------------------
if ( checkValue === "NEVADA") { 

    for (let i = 0; i < 2; i++) {
    
    var Nevada = [ "Death Valley National Park", "Great Basin National Park" ];    
    var parklistEl = document.createElement("li");
    parklistEl.className = "parksList";
    parklistEl.innerHTML = Nevada[i];
    optionsList.appendChild(parklistEl);
    }
}
if ( checkValue === "HAWAII") { 

        for (let i = 0; i < 2; i++) {
        
        var Hawaii = [ "Haleakala National Park", "Hawai’i Volcanoes National Park"];  
        var parklistEl = document.createElement("li");
        parklistEl.className = "parksList";
        parklistEl.innerHTML = Hawaii[i];
        optionsList.appendChild(parklistEl);
        }
}
if ( checkValue === "NEW-MEXICO") { 

    for (let i = 0; i < 2; i++) {
    
    var New_Mexico = ["Carlsbad Caverns National Park", "White Sands National Park"];
    var parklistEl = document.createElement("li");
    parklistEl.className = "parksList";
    parklistEl.innerHTML = New_Mexico[i];
    optionsList.appendChild(parklistEl);
    }
}
if ( checkValue === "MONTANA") { 

    for (let i = 0; i < 2; i++) {
    
    var Montana = [ "Glacier National Park", "Yellowstone National Park"];  
    var parklistEl = document.createElement("li");
    parklistEl.className = "parksList";
    parklistEl.innerHTML = Montana[i];
    optionsList.appendChild(parklistEl);
    }
}
if ( checkValue === "ARIZONA") { 

    for (let i = 0; i < 3; i++) {

    var Arizona = [ "Grand Canyon National Park", "Petrified Forest National Park, pefo", "Saguaro National Park, sagu"];
    var parklistEl = document.createElement("li");
    parklistEl.className = "parksList";
    parklistEl.innerHTML = Arizona[i];
    optionsList.appendChild(parklistEl);
    }
}
if ( checkValue === "UTAH") { 

    for (let i = 0; i < 5; i++) {

    var Utah = [ "Arches National Park", "Bryce Canyon National Park", "Canyonlands National Park", "Capitol Reef National Park", "Zion National Park"];
    var parklistEl = document.createElement("li");
    parklistEl.className = "parksList";
    parklistEl.innerHTML = Utah[i];
    optionsList.appendChild(parklistEl);
    }
}
 
if ( checkValue === "ALASKA") { 

    for (let i = 0; i < 8; i++) {

    var Alaska = ["Denali National Park","Gates of the Arctic National Park", "Glacier Bay National Park", "Katmai National Park", "Kenai Fjords National Park", "Kobuk Valley National Park", "Lake Clark National Park", "Wrangell St Elias National Park"];
    var parklistEl = document.createElement("li");
    parklistEl.className = "parksList";
    parklistEl.innerHTML = Alaska[i];
    optionsList.appendChild(parklistEl);
    }
}

if ( checkValue === "CALIFORNIA") { 

    for (let i = 0; i < 8; i++) {
    
    var California = ["Channel Islands National Park", "Death Valley National Park", "Joshua Tree National Park", "Lassen Volcanic National Park", "Pinnacles National Park", "Redwood National Park", "Sequoia and Kings Canyon National Park", "Yosemite National Park"];  
    var parklistEl = document.createElement("li");
    parklistEl.className = "parksList";
    parklistEl.innerHTML = California[i];
    optionsList.appendChild(parklistEl);
    }
}




// upon selecting national park name, it updates that park's info and weather 

var y = document.querySelector('#parkCode').innerHTML;
console.log(y);

//----------------------------------------API  to pull Park Information -----------------------------------------------------------------

    var apiUrl1= "https://developer.nps.gov/api/v1/parks?parkCode=" + y + "&api_key=KFp4bdWCgYMu7u8w5g1O3dmwGFoJEp9PQcpINgdf";
    console.log(apiUrl1);

    fetch(apiUrl1).then(function(response1) {
    response1.json().then(function(data1) {
  
    document.getElementById("parkInfo").innerHTML = data1.data[0].fullName ; 

     document.getElementById("address").innerHTML = "Address :  [ "  + data1.data[0].addresses[0].line2 + " ] " + data1.data[0].addresses[0].line1 + ", " + data1.data[0].addresses[0].city + ", " + data1.data[0].addresses[0].stateCode + " - " + data1.data[0].addresses[0].postalCode ; 
     document.getElementById("phNo").innerHTML = "Phone No :  " + data1.data[0].contacts.phoneNumbers[0].phoneNumber ; 
     document.getElementById("discription").innerHTML = "Description : " + data1.data[0].description  ; 
    // document.getElementById("alerts").innerHTML = "Current Temp :  " + t0fixed + " *F" ; 
     document.getElementById("allotherfees").innerHTML = " -        $ "  + data1.data[0].entranceFees[0].cost + " for non-commercial vehicle (15 passenger capacity or less) and all occupants " ; 
     document.getElementById("motorcyclefees").innerHTML = " -        $ "  + data1.data[0].entranceFees[1].cost + " for non-commercial motorcycle " ; 
     document.getElementById("pedfees").innerHTML = " -       $ "  + data1.data[0].entranceFees[2].cost + " for  bicyclist, hiker, pedestrian " ; 



  //   document.getElementById("parkLink").innerHTML = data1.data[0].url ;


 

//-----------------:: -------------  API  to pull weather info for every 3 hours for hikers / campers ----------------::-------------------

 var zip = data1.data[0].addresses[0].postalCode
 
 var apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&appid=9d0a91c9414180869a1b366b5eca06bd";
 console.log(apiUrl2);

 fetch(apiUrl2).then(function(response2) {

 response2.json().then(function(data2) {
 console.log(data2);


// --------------------------------- At 3 hours ---------------------------------------------------------------------

 const milliseconds = data2.list[0].dt * 1000;             // <------------------converting Unix date into readable format        
 const dateObject = new Date(milliseconds);
 const humanDateFormat = dateObject.toLocaleString("en-US", {timeZoneName: "short"}) 
 document.getElementById("time0").innerHTML = humanDateFormat;  //<---------------------adding date via innerHTML 

 var iconTime0El = document.querySelector('#icon0');
 var jpgImg0 = document.createElement('img');
 var iconUrl0 = "https://openweathermap.org/img/w/" + data2.list[0].weather[0].icon + ".png";
 jpgImg0.setAttribute('src', iconUrl0);
 iconTime0El.innerHTML='';
 iconTime0El.appendChild(jpgImg0);

 document.getElementById("iconText0").innerHTML = data2.list[0].weather[0].description ; 


 var v0 = (data2.list[0].main.temp) * 9/5;
 var t0 = v0 - 459.67;
 let t0fixed = t0.toFixed(2) 
 document.getElementById("temp0").innerHTML = "Temp :  " + t0fixed + " *F" ;

 document.getElementById("wind0").innerHTML = "Wind :  " + data2.list[0].wind.speed + " MPH";
 document.getElementById("windDegree0").innerHTML = "Wind Direction :  " + data2.list[0].wind.deg + " * ";


// --------------------------------- At 6 hours ---------------------------------------------------------------------

const milliseconds1 = data2.list[1].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject1 = new Date(milliseconds1);
const humanDateFormat1 = dateObject1.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time1").innerHTML = humanDateFormat1;  //<---------------------adding date via innerHTML 

var iconTime1El = document.querySelector('#icon1');
var jpgImg1 = document.createElement('img');
var iconUrl1 = "https://openweathermap.org/img/w/" + data2.list[1].weather[0].icon + ".png";
jpgImg1.setAttribute('src', iconUrl1);
iconTime1El.innerHTML='';
iconTime1El.appendChild(jpgImg1);

document.getElementById("iconText1").innerHTML = data2.list[1].weather[0].description ; 


var v1 = (data2.list[1].main.temp) * 9/5;
var t1 = v1 - 459.67;
let t1fixed = t1.toFixed(2) 
document.getElementById("temp1").innerHTML = "Temp :  " + t1fixed + " *F" ;

document.getElementById("wind1").innerHTML = "Wind :  " + data2.list[1].wind.speed + " MPH";
document.getElementById("windDegree1").innerHTML = "Wind Direction :  " + data2.list[1].wind.deg + " * ";

// --------------------------------- At 9 hours ---------------------------------------------------------------------

const milliseconds2 = data2.list[2].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject2 = new Date(milliseconds2);
const humanDateFormat2 = dateObject2.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time2").innerHTML = humanDateFormat2;  //<---------------------adding date via innerHTML 

var iconTime2El = document.querySelector('#icon2');
var jpgImg2 = document.createElement('img');
var iconUrl2 = "https://openweathermap.org/img/w/" + data2.list[2].weather[0].icon + ".png";
jpgImg2.setAttribute('src', iconUrl2);
iconTime2El.innerHTML='';
iconTime2El.appendChild(jpgImg2);

document.getElementById("iconText2").innerHTML = data2.list[2].weather[0].description ; 


var v2 = (data2.list[2].main.temp) * 9/5;
var t2 = v2 - 459.67;
let t2fixed = t2.toFixed(2) 
document.getElementById("temp2").innerHTML = "Temp :  " + t2fixed + " *F" ;

document.getElementById("wind2").innerHTML = "Wind :  " + data2.list[2].wind.speed + " MPH";
document.getElementById("windDegree2").innerHTML = "Wind Direction :  " + data2.list[2].wind.deg + " * ";

// --------------------------------- At 12 hours ---------------------------------------------------------------------

const milliseconds3 = data2.list[3].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject3 = new Date(milliseconds3);
const humanDateFormat3 = dateObject3.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time3").innerHTML = humanDateFormat3;  //<---------------------adding date via innerHTML 

var iconTime3El = document.querySelector('#icon3');
var jpgImg3 = document.createElement('img');
var iconUrl3 = "https://openweathermap.org/img/w/" + data2.list[3].weather[0].icon + ".png";
jpgImg3.setAttribute('src', iconUrl3);
iconTime3El.innerHTML='';
iconTime3El.appendChild(jpgImg3);

document.getElementById("iconText3").innerHTML = data2.list[3].weather[0].description ; 


var v3 = (data2.list[3].main.temp) * 9/5;
var t3 = v3 - 459.67;
let t3fixed = t3.toFixed(2) 
document.getElementById("temp3").innerHTML = "Temp :  " + t3fixed + " *F" ;

document.getElementById("wind3").innerHTML = "Wind :  " + data2.list[3].wind.speed + " MPH";
document.getElementById("windDegree3").innerHTML = "Wind Direction :  " + data2.list[3].wind.deg + " * ";

// --------------------------------- At 15 hours ---------------------------------------------------------------------

const milliseconds4 = data2.list[4].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject4 = new Date(milliseconds4);
const humanDateFormat4 = dateObject4.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time4").innerHTML = humanDateFormat4;  //<---------------------adding date via innerHTML 

var iconTime4El = document.querySelector('#icon4');
var jpgImg4 = document.createElement('img');
var iconUrl4 = "https://openweathermap.org/img/w/" + data2.list[4].weather[0].icon + ".png";
jpgImg4.setAttribute('src', iconUrl4);
iconTime4El.innerHTML='';
iconTime4El.appendChild(jpgImg4);

document.getElementById("iconText4").innerHTML = data2.list[4].weather[0].description ; 


var v4 = (data2.list[4].main.temp) * 9/5;
var t4 = v4 - 459.67;
let t4fixed = t4.toFixed(2) 
document.getElementById("temp4").innerHTML = "Temp :  " + t4fixed + " *F" ;

document.getElementById("wind4").innerHTML = "Wind :  " + data2.list[4].wind.speed + " MPH";
document.getElementById("windDegree4").innerHTML = "Wind Direction :  " + data2.list[4].wind.deg + " * ";

// --------------------------------- At 18 hours ---------------------------------------------------------------------

const milliseconds5 = data2.list[5].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject5 = new Date(milliseconds5);
const humanDateFormat5 = dateObject5.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time5").innerHTML = humanDateFormat5;  //<---------------------adding date via innerHTML 

var iconTime5El = document.querySelector('#icon5');
var jpgImg5 = document.createElement('img');
var iconUrl5 = "https://openweathermap.org/img/w/" + data2.list[5].weather[0].icon + ".png";
jpgImg5.setAttribute('src', iconUrl5);
iconTime5El.innerHTML='';
iconTime5El.appendChild(jpgImg5);

document.getElementById("iconText5").innerHTML = data2.list[5].weather[0].description ; 


var v5 = (data2.list[5].main.temp) * 9/5;
var t5 = v5 - 459.67;
let t5fixed = t5.toFixed(2) 
document.getElementById("temp5").innerHTML = "Temp :  " + t5fixed + " *F" ;

document.getElementById("wind5").innerHTML = "Wind :  " + data2.list[5].wind.speed + " MPH";
document.getElementById("windDegree5").innerHTML = "Wind Direction :  " + data2.list[5].wind.deg + " * ";

// --------------------------------- At 18 hours ---------------------------------------------------------------------

const milliseconds6 = data2.list[6].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject6 = new Date(milliseconds6);
const humanDateFormat6 = dateObject6.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time6").innerHTML = humanDateFormat6;  //<---------------------adding date via innerHTML 

var iconTime6El = document.querySelector('#icon6');
var jpgImg6 = document.createElement('img');
var iconUrl6 = "https://openweathermap.org/img/w/" + data2.list[6].weather[0].icon + ".png";
jpgImg6.setAttribute('src', iconUrl6);
iconTime6El.innerHTML='';
iconTime6El.appendChild(jpgImg6);

document.getElementById("iconText6").innerHTML = data2.list[6].weather[0].description ; 


var v6 = (data2.list[6].main.temp) * 9/5;
var t6 = v6 - 459.67;
let t6fixed = t6.toFixed(2) 
document.getElementById("temp6").innerHTML = "Temp :  " + t6fixed + " *F" ;

document.getElementById("wind6").innerHTML = "Wind :  " + data2.list[6].wind.speed + " MPH";
document.getElementById("windDegree6").innerHTML = "Wind Direction :  " + data2.list[6].wind.deg + " * ";

// --------------------------------- At 24 hours ---------------------------------------------------------------------

const milliseconds7 = data2.list[7].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject7 = new Date(milliseconds7);
const humanDateFormat7 = dateObject7.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time7").innerHTML = humanDateFormat7;  //<---------------------adding date via innerHTML 

var iconTime7El = document.querySelector('#icon7');
var jpgImg7 = document.createElement('img');
var iconUrl7 = "https://openweathermap.org/img/w/" + data2.list[7].weather[0].icon + ".png";
jpgImg7.setAttribute('src', iconUrl7);
iconTime7El.innerHTML='';
iconTime7El.appendChild(jpgImg7);

document.getElementById("iconText7").innerHTML = data2.list[7].weather[0].description ; 


var v7 = (data2.list[7].main.temp) * 9/5;
var t7 = v7 - 459.67;
let t7fixed = t7.toFixed(2) 
document.getElementById("temp7").innerHTML = "Temp :  " + t7fixed + " *F" ;

document.getElementById("wind7").innerHTML = "Wind :  " + data2.list[7].wind.speed + " MPH";
document.getElementById("windDegree7").innerHTML = "Wind Direction :  " + data2.list[7].wind.deg + " * ";


// --------------------------------- At 27 hours ---------------------------------------------------------------------

const milliseconds8 = data2.list[8].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject8 = new Date(milliseconds8);
const humanDateFormat8 = dateObject8.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time8").innerHTML = humanDateFormat8;  //<---------------------adding date via innerHTML 

var iconTime8El = document.querySelector('#icon8');
var jpgImg8 = document.createElement('img');
var iconUrl8 = "https://openweathermap.org/img/w/" + data2.list[8].weather[0].icon + ".png";
jpgImg8.setAttribute('src', iconUrl8);
iconTime8El.innerHTML='';
iconTime8El.appendChild(jpgImg8);

document.getElementById("iconText8").innerHTML = data2.list[8].weather[0].description ; 


var v8 = (data2.list[8].main.temp) * 9/5;
var t8 = v8 - 459.67;
let t8fixed = t8.toFixed(2) 
document.getElementById("temp8").innerHTML = "Temp :  " + t8fixed + " *F" ;

document.getElementById("wind8").innerHTML = "Wind :  " + data2.list[8].wind.speed + " MPH";
document.getElementById("windDegree8").innerHTML = "Wind Direction :  " + data2.list[8].wind.deg + " * ";

// --------------------------------- At 30 hours ---------------------------------------------------------------------

const milliseconds9 = data2.list[9].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject9 = new Date(milliseconds9);
const humanDateFormat9 = dateObject9.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time9").innerHTML = humanDateFormat9;  //<---------------------adding date via innerHTML 

var iconTime9El = document.querySelector('#icon9');
var jpgImg9 = document.createElement('img');
var iconUrl9 = "https://openweathermap.org/img/w/" + data2.list[9].weather[0].icon + ".png";
jpgImg9.setAttribute('src', iconUrl9);
iconTime9El.innerHTML='';
iconTime9El.appendChild(jpgImg9);

document.getElementById("iconText9").innerHTML = data2.list[9].weather[0].description ; 


var v9 = (data2.list[9].main.temp) * 9/5;
var t9 = v9 - 459.67;
let t9fixed = t9.toFixed(2) 
document.getElementById("temp9").innerHTML = "Temp :  " + t9fixed + " *F" ;

document.getElementById("wind9").innerHTML = "Wind :  " + data2.list[9].wind.speed + " MPH";
document.getElementById("windDegree9").innerHTML = "Wind Direction :  " + data2.list[9].wind.deg + " * ";

// --------------------------------- At 33 hours ---------------------------------------------------------------------

const milliseconds10 = data2.list[10].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject10 = new Date(milliseconds10);
const humanDateFormat10 = dateObject10.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time10").innerHTML = humanDateFormat10;  //<---------------------adding date via innerHTML 

var iconTime10El = document.querySelector('#icon10');
var jpgImg10 = document.createElement('img');
var iconUrl10 = "https://openweathermap.org/img/w/" + data2.list[10].weather[0].icon + ".png";
jpgImg10.setAttribute('src', iconUrl10);
iconTime10El.innerHTML='';
iconTime10El.appendChild(jpgImg10);

document.getElementById("iconText10").innerHTML = data2.list[10].weather[0].description ; 


var v10 = (data2.list[10].main.temp) * 9/5;
var t10 = v10 - 459.67;
let t10fixed = t10.toFixed(2) 
document.getElementById("temp10").innerHTML = "Temp :  " + t10fixed + " *F" ;

document.getElementById("wind10").innerHTML = "Wind :  " + data2.list[10].wind.speed + " MPH";
document.getElementById("windDegree10").innerHTML = "Wind Direction :  " + data2.list[10].wind.deg + " * ";

// --------------------------------- At 36 hours ---------------------------------------------------------------------

const milliseconds11 = data2.list[11].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject11 = new Date(milliseconds11);
const humanDateFormat11 = dateObject11.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time11").innerHTML = humanDateFormat11;  //<---------------------adding date via innerHTML 

var iconTime11El = document.querySelector('#icon11');
var jpgImg11 = document.createElement('img');
var iconUrl11 = "https://openweathermap.org/img/w/" + data2.list[11].weather[0].icon + ".png";
jpgImg11.setAttribute('src', iconUrl11);
iconTime11El.innerHTML='';
iconTime11El.appendChild(jpgImg11);

document.getElementById("iconText11").innerHTML = data2.list[11].weather[0].description ; 


var v11 = (data2.list[11].main.temp) * 9/5;
var t11 = v11 - 459.67;
let t11fixed = t11.toFixed(2) 
document.getElementById("temp11").innerHTML = "Temp :  " + t11fixed + " *F" ;

document.getElementById("wind11").innerHTML = "Wind :  " + data2.list[11].wind.speed + " MPH";
document.getElementById("windDegree11").innerHTML = "Wind Direction :  " + data2.list[11].wind.deg + " * ";

// --------------------------------- At 39 hours ---------------------------------------------------------------------

const milliseconds12 = data2.list[12].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject12 = new Date(milliseconds12);
const humanDateFormat12 = dateObject12.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time12").innerHTML = humanDateFormat12;  //<---------------------adding date via innerHTML 

var iconTime12El = document.querySelector('#icon12');
var jpgImg12 = document.createElement('img');
var iconUrl12 = "https://openweathermap.org/img/w/" + data2.list[12].weather[0].icon + ".png";
jpgImg12.setAttribute('src', iconUrl12);
iconTime12El.innerHTML='';
iconTime12El.appendChild(jpgImg12);

document.getElementById("iconText12").innerHTML = data2.list[12].weather[0].description ; 


var v12 = (data2.list[12].main.temp) * 9/5;
var t12 = v12 - 459.67;
let t12fixed = t12.toFixed(2) 
document.getElementById("temp12").innerHTML = "Temp :  " + t12fixed + " *F" ;

document.getElementById("wind12").innerHTML = "Wind :  " + data2.list[12].wind.speed + " MPH";
document.getElementById("windDegree12").innerHTML = "Wind Direction :  " + data2.list[12].wind.deg + " * ";

// --------------------------------- At 42 hours ---------------------------------------------------------------------

const milliseconds13 = data2.list[13].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject13 = new Date(milliseconds13);
const humanDateFormat13 = dateObject13.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time13").innerHTML = humanDateFormat13;  //<---------------------adding date via innerHTML 

var iconTime13El = document.querySelector('#icon13');
var jpgImg13 = document.createElement('img');
var iconUrl13 = "https://openweathermap.org/img/w/" + data2.list[13].weather[0].icon + ".png";
jpgImg13.setAttribute('src', iconUrl13);
iconTime13El.innerHTML='';
iconTime13El.appendChild(jpgImg13);

document.getElementById("iconText13").innerHTML = data2.list[13].weather[0].description ; 


var v13 = (data2.list[13].main.temp) * 9/5;
var t13 = v13 - 459.67;
let t13fixed = t13.toFixed(2) 
document.getElementById("temp13").innerHTML = "Temp :  " + t13fixed + " *F" ;

document.getElementById("wind13").innerHTML = "Wind :  " + data2.list[13].wind.speed + " MPH";
document.getElementById("windDegree13").innerHTML = "Wind Direction :  " + data2.list[13].wind.deg + " * ";

// --------------------------------- At 45 hours ---------------------------------------------------------------------

const milliseconds14 = data2.list[14].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject14 = new Date(milliseconds14);
const humanDateFormat14 = dateObject14.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time14").innerHTML = humanDateFormat14;  //<---------------------adding date via innerHTML 

var iconTime14El = document.querySelector('#icon14');
var jpgImg14 = document.createElement('img');
var iconUrl14 = "https://openweathermap.org/img/w/" + data2.list[14].weather[0].icon + ".png";
jpgImg14.setAttribute('src', iconUrl14);
iconTime14El.innerHTML='';
iconTime14El.appendChild(jpgImg14);

document.getElementById("iconText14").innerHTML = data2.list[14].weather[0].description ; 


var v14 = (data2.list[14].main.temp) * 9/5;
var t14 = v14 - 459.67;
let t14fixed = t14.toFixed(2) 
document.getElementById("temp14").innerHTML = "Temp :  " + t14fixed + " *F" ;

document.getElementById("wind14").innerHTML = "Wind :  " + data2.list[14].wind.speed + " MPH";
document.getElementById("windDegree14").innerHTML = "Wind Direction :  " + data2.list[14].wind.deg + " * ";

// --------------------------------- At 48 hours ---------------------------------------------------------------------

const milliseconds15 = data2.list[15].dt * 1000;             // <------------------converting Unix date into readable format        
const dateObject15 = new Date(milliseconds15);
const humanDateFormat15 = dateObject15.toLocaleString("en-US", {timeZoneName: "short"}) 
document.getElementById("time15").innerHTML = humanDateFormat15;  //<---------------------adding date via innerHTML 

var iconTime15El = document.querySelector('#icon15');
var jpgImg15 = document.createElement('img');
var iconUrl15 = "https://openweathermap.org/img/w/" + data2.list[15].weather[0].icon + ".png";
jpgImg15.setAttribute('src', iconUrl15);
iconTime15El.innerHTML='';
iconTime15El.appendChild(jpgImg15);

document.getElementById("iconText15").innerHTML = data2.list[15].weather[0].description ; 


var v15 = (data2.list[15].main.temp) * 9/5;
var t15 = v15 - 459.67;
let t15fixed = t15.toFixed(2) 
document.getElementById("temp15").innerHTML = "Temp :  " + t15fixed + " *F" ;

document.getElementById("wind15").innerHTML = "Wind :  " + data2.list[15].wind.speed + " MPH";
document.getElementById("windDegree15").innerHTML = "Wind Direction :  " + data2.list[15].wind.deg + " * ";

              })
          })
    })
})

}

