$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});


$(document).ready(function() {
$(".btn-pref2 .btn").click(function () {
    $(".btn-pref2 .btn").removeClass("btn-primary2").addClass("btn-default2");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default2").addClass("btn-primary2");   
});
});