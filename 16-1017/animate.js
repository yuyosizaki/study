$(function(){
    // 1秒ごとに.boxをブラウザの幅分ランダムに移動。
    var $move = $(".box");
    var ID = setInterval(function(){
            moveleft = Math.random()*$(window).width();
            movetop  = Math.random()*$(window).height();
            $move.animate({
                "marginLeft": moveleft,
                "marginTop" : movetop
            },1000)
        })

}) // endfunction
