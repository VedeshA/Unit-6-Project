$(".start-button").click(function() {
    $(".door").hide();
    
    $(".chewyave").show();
    $(".start-button").hide();
    $(".title").text("A desert appeared right in front of your house click the button to tarvel further");
    $(".dr").show();
});
$(".dr").click(function() {
    $(".chewyave").hide();
    $(".butt").hide();
    $(".py").show();
     $(".dr").hide();
    $(".title").text("There is a pyramid double click to get inside");
});
$(".py").dblclick(function() {
    $(".hover").show();
    $(".py").hide();
     $(".title").text("Search the image for possible codes");
});
$(".hover").mouseleave(function() {
    $(".enter").show();
    $(".leave").show();
    $(".title").text("Click the correct code to get out");
});
$(".leave").click(function() {
    $(".hover").hide();
    $(".mc").show();
    $(".enter").hide();
    $(".leave").hide();
    $("body").css("background-color", "red");
    $(".title").text("You triggered the explosion go back before you die");
    $(".back").show();
});
$(".back").hover(function() {
    $(".hover").show();
    $(".enter").show();
    $(".leave").show();
    $(".title").text("Click the correct code to get out");
    $("body").css("background-color", "lightblue");
    $(".mc").hide();
    $(".back").hide();
});
$(".enter").click(function() {
    $(".hover").hide();
    $(".awake").show();
    $(".enter").hide();
    $(".leave").hide();
    $(".title").text("You've waken up and realize it was all a dream");
    $(".title").css("color","blue");
    $(".mc").hide();
    $(".back").hide();
});
