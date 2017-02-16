var ANIMATION_SPEED = 500;
var DEBUG_MODE = true; // TODO set to false in production

function mirrorFields(field1, field2){
    $(field1).on("keyup", function(){
        var value = $(this).val();
        var $field2 = $(field2);
        $field2.val(value);
        if(value){
            $("label[for='"+ $field2.attr("id")+"']").addClass("show");
        } else {
            $("label[for='"+ $field2.attr("id")+"']").removeClass("show");
        }
    });
    $(field2).on("keyup", function(){
        var value = $(this).val();
        var $field1 = $(field1);
        $field1.val(value);
        if(value){
            $("label[for='"+ $field1.attr("id")+"']").addClass("show");
        } else {
            $("label[for='"+ $field1.attr("id")+"']").removeClass("show");
        }
    });

}

function prettifyValue(currency, amount) {
    var value = (amount.formatMoney() + "").split(".");;
    return '<span class="currency-whole">' + value[0] + '</span><span class="currency-small">.' + value[1] + ' '+ currency +'</span>';
}

function scrollTo(obj) {
    $('html,body').animate({scrollTop: $(obj).offset().top}, ANIMATION_SPEED, "swing");
}

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? " " : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

$(document).ready(function () {
    $("#btn-print").on('click', function(){window.print()});
});

/*TODO this is here to fake the webservice for currency exchange rates*/
var rates = {
    "GBP": 1.5229,
    "CZK": 0.040887,
    "EUR": 1.1035,
    "AUD": 0.77,
    "CAD": 0.79,
    "CHF": 1.04,
    "DKK": 0.15,
    "HRK": 0.15,
    "HUF": 0.0037,
    "JPY": 0.01,
    "NOK": 0.13,
    "NZD": 0.75,
    "PLN": 0.27,
    "RON": 0.26,
    "RUB": 0.02,
    "SEK": 0.12,
    "TRY": 0.41,
    "ZAR": 0.09,
    "USD": 1
};

// when the input field is focused, the text will be selected
function selectOnFocus($input){
    $input.focus(function(){
        if(!$(this).hasClass("focused")) {
            var that = this;
            setTimeout(function(){
                $(that).select();
            }, 10);
            $(this).addClass("focused");
        }
    });
    $input.blur(function(){
        $(this).removeClass("focused");
    });
}


// prime with empty jQuery object
window.prevFocus = $();

// Catch any bubbling focusin events (focus does not bubble)
$(document).on('focusin', ':input', function () {

    // Test: Show the previous value/text so we know it works!
    $("#prev").html(prevFocus.val() || prevFocus.text());

    // Save the previously clicked value for later<
    window.prevFocus = $(this);
});

function openMap(name) {
    var link;
    link = 'http://maps.google.com/maps/place/'+encodeURIComponent(name);
    window.open(link, '_blank');
}

function isMobile () {
    return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width < 991 );
}

$("form").on("submit", function(){
    if(DEBUG_MODE) {
        console.log("Submitting form data: " + $(this).serialize());

        // get all the inputs into an array.
        var $inputs = $('form :input');

        // get an associative array of just the values.
        var values = {};
        $inputs.each(function() {
            values[$(this).attr("id")] = $(this).val();
        });

        var $selects = $('form select');
        $selects.each(function() {
            values["#" + $(this).attr("id")] = $(this).find(":selected").val();
        });

        console.log("Input fields ID's and values: " + JSON.stringify(values, null, '\t'));
    }
});