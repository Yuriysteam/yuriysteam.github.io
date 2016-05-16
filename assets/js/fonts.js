$(document).ready(function () {

    $("#font-sample").css({
        "color": $("#features-select option:selected").text(),
        "font-size": parseInt($("#font-size").val())
    });


    $("#features-select").change(function () {
        var $color = $("#features-select option:selected").text();
        $("#font-sample").css("color", $color);
    });

    $("#font-size").change(function () {
        var $font_size = $("#font-size").val();
        $("#font-sample").css("font-size", parseInt($font_size));
    });
});