

$(document).ready(function(){
    var circleOffset = $(".circleAnimation");
    var circleColor = $(".circleColor");
    var $body = $("body");

    $("#changeColor").click(function(){
        var circle = $("<div>",{
            class : "circle clonedCircle",
        });
        $(circle).css({
            top: circleOffset.offset().top,
            left: circleOffset.offset().left,
            "border-color": circleColor.css("border-color")
        });
        $body.append(circle);
        $(".clonedCircle").hover(function(){
            $(this).animate({opacity: 0}, function(){
                $(this).remove();
            });
        });
        var r= Math.floor((Math.random()*256));
        var g= Math.floor((Math.random()*256));
        var b= Math.floor((Math.random()*256));
        circleColor.css({"border-color": "rgb("+r+","+g+","+b+")"});
    });
});