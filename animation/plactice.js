$(function(){
    //ブラウザの高さを取得し、そこから図形の高さを引いた値を、変数に入れる。
    var heig =$(window).height()-176;
    //アニメーションさせる。
    $(".circle").animate({"marginTop": heig},5000,"easeOutElastic");
    // scrollさせた時に発動させること。
});
