$("#tab-description").click(function() {
    $("#show-description").show();
    $("#show-process").hide();
    $("#tab-description").addClass("tab-active");
    $("#tab-process").removeClass("tab-active"); 
});

$("#tab-process").click(function() {
    $("#show-description").hide();
    $("#show-process").show();
    $("#tab-process").addClass("tab-active");
    $("#tab-description").removeClass("tab-active");
});