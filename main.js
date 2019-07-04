


$(document).ready(function () {
    
    $(".buttons").click(function (e) {
        //alert($(this).val());
        $(".text").val($(".text").val()+$(this).val());
        
        
    });
});