var imgObj=null;

imgObj = document.getElementById('myImage');
// imgObj2.style.right = '-2000px';
imgObj.style.transform = 'translateX(-2000px)';
imgObj.style.display='none';
setInterval(function(){ moveLeft() }, 4000); //4000ms - это частота появления поезда сейчас
right = -2000;
function moveLeft(){
    // right = parseInt(imgObj2.style.right, 10);
    
	console.log('move 2', right);

    if (2000 >= right) {
        imgObj.style.transform = 'translateX(' + (right + 5) + 'px)';
        imgObj.style.display='block';
		right = right + 5;

        setTimeout(function(){moveLeft();},5); // call moveRight in 20msec
        
    } else {
        stop();
    }
}

function stop(){
   // imgObj2.style.right = '-2000px';
	imgObj.style.transform = 'translateX(-2000px)';
   imgObj.style.display='none';
}


var imgObj2=null;

imgObj2 = document.getElementById('myImage2');
// imgObj2.style.right = '-2000px';
imgObj2.style.transform = 'translateX(-2000px)';
imgObj2.style.display='none';
setInterval(function(){ moveLeft2() }, 4000); //4000ms - это частота появления поезда сейчас
right = -2000;
function moveLeft2(){
    // right = parseInt(imgObj2.style.right, 10);
    
	console.log('move 2', right);

    if (2000 >= right) {
        imgObj2.style.transform = 'translateX(' + (right + 5) + 'px)';
        imgObj2.style.display='block';
		right = right + 5;

        setTimeout(function(){moveLeft2();},5); // call moveRight in 20msec
        
    } else {
        stop2();
    }
}

function stop2(){
   // imgObj2.style.right = '-2000px';
	imgObj2.style.transform = 'translateX(-2000px)';
   imgObj2.style.display='none';
}

$( "#point1" ).click(function() {
  $( "#point1-info" ).toggle("slow");
});

$( "#point2" ).click(function() {
  $( "#point2-info" ).toggle("slow");
});

$(document).ready(function(){
	$(".tabs-new").lightTabs();
});


$('#map-tab1').click(function(){
    $('#metro_map').css('background', 'url("images/map-1.png")');
});

$('#map-tab2').click(function(){
    $('#metro_map').css('background', 'url("images/map-2.png")');
});

$('#map-tab3').click(function(){
    $('#metro_map').css('background', 'url("images/map-3.png")');
});

$('#map-tab4').click(function(){
    $('#metro_map').css('background', 'url("images/map-4.png")');
});

(function($){				
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;
			
			showPage = function(i){
				$(tabs).children("div").children("div").hide();
				$(tabs).children("div").children("div").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("active");
				$(tabs).children("ul").children("li").eq(i).addClass("active");
			}
								
			showPage(0);				
			
			$(tabs).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};	
})(jQuery);