$(document).ready(function() {
    setUp();

});

$(window).resize(function() {
    setUp();
    $(".slider").css({"transform": "translateX(0px)"});
});

function setUp() {
    var slider = new Slider();
    $("#prev").click(function() {
        slider.left();
    });

    $("#next").click(function() {
        slider.right();
    });
}

function Slider() {
    this.currIndex = 0;
    this.range = $(".slide").length - 1;
    this.slideWidth = $(".slide").outerWidth();
}

Slider.prototype = {
    right: function() {
        var sliderPos = parseInt($(".slider").css("left")) - this.slideWidth;
        if (this.currIndex < this.range) {
            this.currIndex += 1;
            var sliderPos = parseInt($(".slider").css('transform').split(',')[4]) - this.slideWidth;
            $(".slider").css({
                "transform": "translate3D(" + sliderPos + "px, 0, 0)",
                "webkit-transform": "translate3D(" + sliderPos + "px, 0, 0)"
            });
        }

        if (this.currIndex === this.range) {
            $("#next").addClass("inactive");
        }
        $("#prev").removeClass("inactive");
    },
    left: function() {
        console.log(this.currIndex);
        if (this.currIndex > 0) {
            this.currIndex -= 1;
            var sliderPos = parseInt($(".slider").css('transform').split(',')[4]) + this.slideWidth;
            $(".slider").css({
                "transform": "translate3D(" + sliderPos + "px, 0, 0)",
                "webkit-transform": "translate3D(" + sliderPos + "px, 0, 0)"
            });
            if (this.currIndex === 0) {
                $("#prev").addClass("inactive");
            }
            $("#next").removeClass("inactive");
        }
    }
}
