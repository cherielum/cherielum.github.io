$(document).ready(function(){
    $("div.icons").hover(function(){
        $(this).css("background-color", "#02b3e4");
        }, function(){
        $(this).css("background-color", "white");
    });
    $(".projects").hover(function(){
        $(this).css("background-color", "black");
        }, function(){
        $(this).css("background-color", "#454242");
    });
});