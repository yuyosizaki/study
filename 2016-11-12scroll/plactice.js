$(function(){
    var heig =$(window).height()-176;
    //アニメーションさせる。
    $(".circle").animate({"marginTop": heig},5000,"easeOutElastic");
    // scrollさせた時に発動させること。

    // offset で　wrapperの位置を図る。
    var i = $(".wrapper").offset().top;
    console.log(i);

    // scroll関数の中に、scrolltopメソッドを発火
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        console.log(top);
    });
});
