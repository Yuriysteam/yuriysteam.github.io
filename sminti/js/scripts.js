$(function () {

    var $nav = $(".navigation");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    $(document).scroll(function () {

        var $nav = $(".navigation");

        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    });

});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


$(document).ready(function () {
    $(".sell").hide();
    $(".choice-buy").addClass('dark-green-bg');

    $(".choice-sell").on("click", function () {
        $(".buy").hide();
        $(".sell").show();
        $(".choice-sell").addClass('dark-green-bg');
        $(".choice-buy").removeClass('dark-green-bg');
    });

    $(".choice-buy").on("click", function () {
        $(".buy").show();
        $(".sell").hide();
        $(".choice-buy").addClass('dark-green-bg');
        $(".choice-sell").removeClass('dark-green-bg');
    });

    $("#buy-sum").keyup(function () {
        var value = $("#buy-sum").val();
        $('.results-buy').find('.results-amount-in').text(value);
    });

    $("#sell-sum").keyup(function () {
        var value = $("#sell-sum").val();
        $('.results-sell').find('.results-amount-in').text(value);
    });

    $("#buy-sell").change(function () {
        var value = $("#buy-sell").find('option:selected').text();
        $('.results-buy').find('.results-rate-in').text(value);
    });

    $("#sell-sell").change(function () {
        var value = $("#sell-sell").find('option:selected').text();
        $('.results-sell').find('.results-rate-in').text(value);
    });


    $("#buy-buy").change(function () {
        var value = $("#buy-buy").find('option:selected').text();
        $('.results-buy').find('.results-rate-out').text(value);
    });

    $("#sell-buy").change(function () {
        var value = $("#sell-buy").find('option:selected').text();
        $('.results-sell').find('.results-rate-out').text(value);
    });


    $(".count-buy").on("click", function () {
        var inrate = $("#buy-sell").val();
        var outrate = $("#buy-buy").val();
        var amount = $("#buy-sum").val();
        var rate = inrate / outrate;
        var outputrate = rate.toFixed(2);
        var value = rate * amount;
        var output = value.toFixed(2);
        $(".results-buy .results-amount-out").text(output);
        $(".results-buy .results-amount-rate").text(outputrate);
    });

    $(".count-sell").on("click", function () {
        var inrate = $("#sell-sell").val();
        var outrate = $("#sell-buy").val();
        var amount = $("#sell-sum").val();
        var rate = inrate / outrate;
        var outputrate = rate.toFixed(2);
        var value = rate * amount;
        var output = value.toFixed(2);
        $(".results-sell .results-amount-out").text(output);
        $(".results-sell .results-amount-rate").text(outputrate);
    });

    
    $("#connect-form input").focus(function(){
        if($('#emailSent').is(':visible')) {
            $('#emailSent').hide();
        }
    });
    
});

$(document).ready(function () {
    $('.documents-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        infinite: false,
        centerMode: false,
        responsive: [

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    $('.left').click(function () {
        $('.documents-slider').slick('slickPrev');
    })

    $('.right').click(function () {
        $('.documents-slider').slick('slickNext');
    })
});


$(document).ready(function () {
    $('.company-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
    });
});


$(document).ready(function () {
    $('.video-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    $('.video-slider-one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
    });
    $('.testi-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesPerRow: 1,
        rows: 3,
        slidesToScroll: 1,
        autoplay: false,
    });
    $('.testi-left').click(function () {
        $('.testi-slider').slick('slickPrev');
    })

    $('.testi-right').click(function () {
        $('.testi-slider').slick('slickNext');
    })
    $('.left-video').click(function () {
        $('.video-slider').slick('slickPrev');
    })

    $('.right-video').click(function () {
        $('.video-slider').slick('slickNext');
    })

});

$('.video').parent().click(function () {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});


$(document).ready(function () {
    $('.documents-testi-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    $('.left-testi-document').click(function () {
        $('.documents-testi-slider').slick('slickPrev');
    })

    $('.right-testi-document').click(function () {
        $('.documents-testi-slider').slick('slickNext');
    })

});


$(function() {
    $('.table-cats div').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
});
});

// send mail
function call(){
    var httpRequest = new XMLHttpRequest();

    // this function executes whenever the ready state of the request changes
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            
            var res = +httpRequest.responseText
            if(res) {
                document.forms[0].reset();
                $('#emailSent').show();
            }
        }
    }
    
    // open the request ...
    httpRequest.open('POST', 'mail.php')
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    // ... and send it
    httpRequest.send('userName=' + $('#userName').val() + '&email=' + $('#email').val() + '&phoneNumber=' + encodeURIComponent($('#phoneNumber').val()));
   }