$(function(){

    // リストの動き
    $(".menu").click(function(){
        if($(".menu-list").css("display")=="none"){
            $(".menu-list").slideDown("slow");
        } else {
            $(".menu-list").slideUp("slow");
        }
    })

    // アニメーション
    $(".menu").click(function(){
        $(".above").toggleClass("menuclick1");
    });
    $(".menu").click(function(){
        $(".center").toggleClass("menuclick2");
    });
    $(".menu").click(function(){
        $(".under").toggleClass("menuclick3");
    });

}) // endfunction
