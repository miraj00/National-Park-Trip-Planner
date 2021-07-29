$(document).ready(function () {
    $('select').formSelect();
 });


var optionsList = document.querySelector("#mySelection");

var Nevada = [ "Death Valley National Park", "Great Basin National Park" ];
var Montana = [ "Glacier National Park", "Yellowstone National Park"];
var Hawaii = [ "Haleakala National Park", "Hawai’i Volcanoes National Park"];
var New_Mexico = ["Carlsbad Caverns National Park", "White Sands National Park"];
var Arizona = [ "Grand Canyon National Park", "Petrified Forest National Park, pefo", "Saguaro National Park, sagu"];
var Utah = [ "Arches National Park", "Bryce Canyon National Park", "Canyonlands National Park", "Capitol Reef National Park", "Zion National Park"];
var Alaska = ["Denali National Park","Gates of the Arctic National Park", "Glacier Bay National Park", "Katmai National Park", "Kenai Fjords National Park", "Kobuk Valley National Park", "Lake Clark National Park", "Wrangell St Elias National Park"];
var California = ["Channel Islands National Park", "Death Valley National Park", "Joshua Tree National Park", "Lassen Volcanic National Park", "Pinnacles National Park", "Redwood National Park", "Sequoia and Kings Canyon National Park", "Yosemite National Park"];  
//added API Key variable
var APIKey= "9d0a91c9414180869a1b366b5eca06bd";
var y = document.querySelector('#parkCode').innerHTML;

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
 };

 function getParkInfo(parkCode){
    fetch("https://developer.nps.gov/api/v1/parks?parkCode=" 

    + parkCode
    + "&api_id="
    +APIKeyNPS
    )

    .then(function(response) {
        return response.json();
    })
    .then(function(respnse) {
        displayParkInfo(response);

    }

};


