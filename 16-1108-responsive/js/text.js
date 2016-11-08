$(function(){

    /*

    // windowのscroll値を取得し、consoleに出力。

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
    })

    // offset

    var top = $(".container").offset();
    console.log(top);

    */

    // フッターからpagetop。

    var $pagetop = $(".footer__wrapper");

    $pagetop.css({
        "cursor": "pointer"
    });

    $pagetop.click(function(){
        $("body, html").animate({scrollTop: 0});
    });

    // ナビゲーション固定

    var $header = $("header");
    var $offset = $header.offset();


    $(window).scroll(function(){
        if($(window).scrollTop() > $offset.top){
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    })


    // ナビゲーション・スムーススクロール

    var $scroll = $(".scroll");

}) // endfunction
