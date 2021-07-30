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
        var val = $(this).val();
        if (val == "dena") {
            $("#parkCode").text("dena")
        } else if (val == "gaar") {
            $("#parkCode").text("gaar")
        } else if (val == "glba") {
            $("#parkCode").text("glba")
        } else if (val == "katm") {
            $("#parkCode").text("katm")
        } else if (val == "kefj") {
            $("#parkCode").text("kefj")
        } else if (val == "kova") {
            $("#parkCode").text("kova")
        } else if (val == "lacl") {
            $("#parkCode").text("lacl")
        } else if (val == "wrst") {
            $("#parkCode").text("wrst")
        } else if (val == "grca") {
            $("#parkCode").text("grca")
        } else if (val == "pefo") {
            $("#parkCode").text("pefo")
        } else if (val == "sagu") {
            $("#parkCode").text("sagu")
        }else if (val == "chis") {
            $("#parkCode").text("chis")
        } else if (val == "deva") {
            $("#parkCode").text("deva")
        } else if (val == "jotr") {
            $("#parkCode").text("jotr")
        } else if (val == "lavo") {
            $("#parkCode").text("lavo")
        } else if (val == "pinn") {
            $("#parkCode").text("pinn")
        } else if (val == "redw") {
            $("#parkCode").text("redw")
        } else if (val == "seki") {
            $("#parkCode").text("seki")
        } else if (val == "yose") {
            $("#parkCode").text("yose")
        } else if (val == "hale") {
            $("#parkCode").text("hale")
        } else if (val == "havo") {
            $("#parkCode").text("havo")
        } else if (val == "glac") {
            $("#parkCode").text("glac")
        } else if (val == "yell") {
            $("#parkCode").text("yell")
        } else if (val == "grba") {
            $("#parkCode").text("grba")
        } else if (val == "cave") {
            $("#parkCode").text("cave")
        } else if (val == "whsa") {
            $("#parkCode").text("whsa")
        } else if (val == "arch") {
            $("#parkCode").text("arch")
        } else if (val == "brca") {
            $("#parkCode").text("brca")
        } else if (val == "cany") {
            $("#parkCode").text("cany")
        } else if (val == "care") {
            $("#parkCode").text("care")
        } else if (val == "zion") {
            $("#parkCode").text("zion")
        }
    });


});

var parkAPI= "https://developer.nps.gov/api/v1/parks?";
var apiParkKey= "KFp4bdWCgYMu7u8w5g1O3dmwGFoJEp9PQcpINgdf";
var currentDate= new Date();
var month= currentDate.getMonth() + 1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();

//API  to pull Park Information 
function getParkAPI (){
    fetch("https://developer.nps.gov/api/v1/parks?parkCode=" 
   + parkCode 
   + "&api_key="
   + "KFp4bdWCgYMu7u8w5g1O3dmwGFoJEp9PQcpINgdf")
}
    
then(function (response) {
    return response.json();
})
.then(function (getParkInfo) {
    getParkInfo(response);
})
}




//API to pull 


