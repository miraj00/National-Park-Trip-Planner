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



// $(function() {
//     $("#select1").on('change', function() {
//         $('#myselect').val("1");

//         // re-initialize material-select
//         $('#myselect').formSelect();
//     });
// });

