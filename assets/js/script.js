$("#select1").on('change',function(){
    var val = $(this).val();
    if (val == "NJ"){
        $("#myselect").html("<option value='test'>NJ: NJ 1</option><option value='test2'>NJ: NJ 2</option>");
    }else if(val == "AL") {
        ("#myselect").html("<option value='test'>AL: AL 1</option><option value='test2'>AL: AL 2</option>");
    } else if (val == "WA") {
        $("#myselect").html("<option value='test'>WA: WA 1</option><option value='test2'>WA: WA 2</option>");
    } else if (val == "0") {
        $("#myselect").html("<option value=''>--select one--</option>");
    }
});



// $(function() {
//     $("#select1").on('change', function() {
//         $('#myselect').val("1");

//         // re-initialize material-select
//         $('#myselect').formSelect();
//     });
// });

