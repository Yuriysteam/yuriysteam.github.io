
$(function(){
    bindEvents('input');
    bindEvents('select');
});

function bindEvents(obj){
    var onClass = "on";
    var showClass = "show";

    $(obj).bind("checkval",function(){
        var obj_id = $(this).attr('id');
        var label = $("label[for='"+ obj_id +"']");
        if(this.value !== ""){
            label.addClass(showClass);
        } else {
            label.removeClass(showClass);
        }
    }).on("keyup",function(){
        $(this).trigger("checkval");
    }).on("change",function(){
        $(this).trigger("checkval");
    }).on("focus",function(){
        var obj_id = $(this).attr('id');
        var label = $("label[for='"+obj_id+"']");
        $(label).addClass(onClass);
        $(".help-block[data-for='"+obj_id+"']").slideDown();
    }).on("blur",function(){
        var obj_id = $(this).attr('id');
        var $help_block = $(".help-block[data-for='"+obj_id+"']");
        $(this).trigger("checkval");
        var label = $("label[for='"+obj_id+"']");
        $(label).removeClass(onClass);
        if($help_block.data("floatlabel-delay")){
            setTimeout(function () {
                $help_block.slideUp();
            },$help_block.data("floatlabel-delay"));
        } else {
            $help_block.slideUp();
        }
    }).trigger("checkval");

}
