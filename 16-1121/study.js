/*js file*/
$(function(){

    // 三角形の解を求める。

    var width  = 78;
    var height = 8;
    var answer = testfunc();

    function testfunc(){
        var triangle = (width * height)/2;
        return triangle;
    }

    console.log(answer);

    // random関数とsetTimeoutの練習。

    function count(){
        var random = Math.floor(Math.random()*(10-5)+5);
        $(".count").text(random);
    }

    var ID = setInterval(count,1000);

    // イベントを止める。

    $(".count").click(function(){
        clearInterval(ID);
    })

})//end function
