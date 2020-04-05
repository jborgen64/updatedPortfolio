$(".contactBtn").on("click", function(){
    $(".aboutHolder").hide(500);
    $(".portfolio").hide(500);
    $(".contact").show(500);
});

$(".aboutBtn").on("click", function(){
    $(".contact").hide(500);
    $(".portfolio").hide(500);
    $(".aboutHolder").show(500);
});

$(".portBtn").on("click", function(){
    $(".contact").hide(500);
    $(".aboutHolder").hide(500);
    $(".portfolio").show(500);
});