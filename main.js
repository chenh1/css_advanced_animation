

$(document).ready(function(){
    var circleOffset = $(".circleAnimation");
    var circleColor = $(".circleColor");
    var $body = $("body");

    $("#changeColor").click(function(){
        var circle = $("<div>",{
            class : "circle",
        });
        $(circle).css({
            top: circleOffset.offset().top,
            left: circleOffset.offset().left,
            "border-color": circleColor.css("border-color")
        });
        $body.append(circle);
        var r= Math.floor((Math.random()*256));
        var g= Math.floor((Math.random()*256));
        var b= Math.floor((Math.random()*256));
        circleColor.css({"border-color": "rgb("+r+","+g+","+b+")"});
    });
});