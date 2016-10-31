/**
 * Created by EuniceHeymann on 10/31/16.
 */
$("#start-toggle").click(function() {
    $(".colors").animate({
        opacity: "0"
    }, 500).animate({
        opacity: "1"
    }, 500)
});