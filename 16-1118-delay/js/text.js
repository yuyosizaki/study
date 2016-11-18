$(function(){

    // 通常
    var $listwrapper = $(".listwrapper");
    var $list = $(".list");

    $list.css({"opacity": 0}).each(function(i){
        $(this).delay(500 * i).animate({"opacity": 1},1500);
    });

    // スライド
    var $slide = $(".slide_list");

    $slide.css({"opacity": 0,"left": 40}).each(function(i){
        $(this).delay(300 * i).animate({"opacity": 1,"left": 0},500);
    });

    // divを動かす
    var $move = $(".move");

    $move.delay(5000).animate({"left": 500},1500).animate({"left": 0},1500);

    // return復習

    var x = 180;
    var y = 3;
    var func = test();

    function test(){
        var answer = x * y;
        return answer;
    }

    console.log(func);

}) // endfunction
