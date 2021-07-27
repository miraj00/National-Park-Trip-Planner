$(document).ready(function () {
    $('select').formSelect();
});
var njIndex= 0;
var njValues = [
    {
        choices: ["NJ Park 1", "NJ Park 2"]
    }
];

var njChoices =  njValues[njIndex].choices;


$("#select1").change(function(){
    var val = $(this).val();        
    if (val == "NJ"){
        $("#myselect").html("<option value='opt'>--Select Park--</option><option value='opt1'>NJ: NJ 1</option><option value='opt2'>NJ: NJ 2</option>");
    }else if(val == "AL") {
        $("#myselect").html("<option value='opt'>--Select Park--</option><option value='opt1'>AL: AL 1</option><option value='opt2'>AL: AL 2</option>");
    } else if (val == "WA") {
        $("#myselect").html("<option value='opt'>--Select Park--</option><option value='opt1'>WA: WA 1</option><option value='opt2'>WA: WA 2</option>");
    } else if (val == "0") {
        $("#myselect").html("<option value=''>--select one--</option>");
    }
    $('#myselect').formSelect()
});




