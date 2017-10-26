$(document).ready(function() {
    setUp();

});

$(window).resize(function() {
    setUp();
    $(".slider").css({"left": 0});
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
            var sliderPos = parseInt($(".slider").css("left")) - this.slideWidth;
            $(".slider").css({"left": sliderPos});
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
            var sliderPos = parseInt($(".slider").css("left")) + this.slideWidth;
            $(".slider").css({"left": sliderPos});
            if (this.currIndex === 0) {
                $("#prev").addClass("inactive");
            }
            $("#next").removeClass("inactive");
        }
    }
}
