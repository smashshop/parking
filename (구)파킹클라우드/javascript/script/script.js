$(".menu>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".menu>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

function start(){
    $(".slider>img").eq(1).css("margin-left", "-2000px");
    $(".slider>img").eq(2).css("margin-left", "-2000px");
    setInterval(function(){
        slide();
    },6000);
};

var now = 0;
var count_img = 2;

function slide(){
    now = now == count_img ? 0 : now+1;
    $(".slider>img").eq(now-1).css("margin-left", "-2000px");
    $(".slider>img").eq(now).css("margin-left", "0");
}

start();