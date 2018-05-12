var n = 0;
var last = $(".imgs").find("img").length - 1;

$(".imgs").find("img").not(last).css("margin-left", "-2000px");

setInterval(function(){
    $(".imgs").find("img").eq(n).css("margin-left", "0px");
    $(".imgs").find("img").not(":eq(" + n + ")").css("margin-left", "-2000px");
    
    var last = $(".imgs").find("img").length - 1;
    
    n = n == last ? 0 : n+1;
}, 2000);