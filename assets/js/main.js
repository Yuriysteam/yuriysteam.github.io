$(document).ready(function () {

	$("#tab-description").click(function () {
		$("#show-description").show();
		$("#show-process").hide();
		$("#tab-description").addClass("tab-active");
		$("#tab-process").removeClass("tab-active");
	});

	$("#tab-process").click(function () {
		$("#show-description").hide();
		$("#show-process").show();
		$("#tab-process").addClass("tab-active");
		$("#tab-description").removeClass("tab-active");
	});

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