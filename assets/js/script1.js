
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


 $('#parkInfo').text('FULL NAME OF PARK : '+parkCode);
    
var currentDate= new Date();
var month= currentDate.getMonth()+ 1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();


//API  to pull Park Information 
function getParkAPI (parkCode){
    //fetch code to get Park codes
    fetch("https://developer.nps.gov/api/v1/parks?parkCode=" 
   + parkCode 
   + "&api_key="
   + "KFp4bdWCgYMu7u8w5g1O3dmwGFoJEp9PQcpINgdf")

    
then(function (response) {
    return response.json();
})
.then(function (getParkInfo) {
    getParkInfo(response);
    console.log(getParkAPI);

})
};

function getParkInfo(event, data1){
    event.preventDefault();
    const element = document.getElementById("stateS");
    const checkValue = element.options[element.selectedIndex].value;
    console.log(checkValue);
    const checkText = element.options[element.selectedIndex].text;
    console.log(checkText);

    // upon selecting national park name, it updates that park's info and weather 

    document.getElementById("parkInfo").innerHTML = data1.data[0].fullName;

    document.getElementById("address").innerHTML = "Address :  [ " + data1.data[0].addresses[0].line2 + " ] " + data1.data[0].addresses[0].line1 + ", " + data1.data[0].addresses[0].city + ", " + data1.data[0].addresses[0].stateCode + " - " + data1.data[0].addresses[0].postalCode;
    document.getElementById("phNo").innerHTML = "Phone No :  " + data1.data[0].contacts.phoneNumbers[0].phoneNumber;
    document.getElementById("discription").innerHTML = "Description : " + data1.data[0].description;
    // document.getElementById("alerts").innerHTML = "Current Temp :  " + t0fixed + " *F" ; 
    document.getElementById("allotherfees").innerHTML = " -        $ " + data1.data[0].entranceFees[0].cost + " for non-commercial vehicle (15 passenger capacity or less) and all occupants ";
    document.getElementById("motorcyclefees").innerHTML = " -        $ " + data1.data[0].entranceFees[1].cost + " for non-commercial motorcycle ";
    document.getElementById("pedfees").innerHTML = " -       $ " + data1.data[0].entranceFees[2].cost + " for  bicyclist, hiker, pedestrian ";
    document.getElementById("parkLink").innerHTML = data1.data[0].url;

}


//API to pull 

   // storing selected state in local storage  ------------------------------------
   //localStorage.setItem("state", checkText);
